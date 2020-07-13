import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs/';
import {catchError} from 'rxjs/operators';
import { Md5 } from 'md5-typescript';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { API_URL, merchant_site_code, receiver, secure_pass, nganluong_url } from '../../../environments/environment';

import { User, UserInfor } from '../../models/user.model';
import { TypeOfPayment } from '../../models/bill.model';
import { Customer } from '../../models/bill.model';

import { AuthService } from '../../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class CheckoutApiService {

    user: User;

    constructor(
        private http: HttpClient,
        private afs: AngularFirestore,      
        private authService: AuthService 
    ) {
        this.authService.user$.subscribe(user => this.user=user);
    }
    private static _handleError(err: HttpErrorResponse | any) {
        return throwError(err.message || 'Error: Unable to complete request.');
    }    

    // Get all of payment types
    getAllTypeOfPayment(): Observable<any> {
        return this.http.get<TypeOfPayment>(`${API_URL}/api/payment/types`)
        .pipe(
            catchError(CheckoutApiService._handleError)
        )
    }

    //----------- API for query shipping information from firebase ------------//  
    // Add information for user 
    addUserInfor(userInfor: UserInfor, uid: string) {        
        const user: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
        user.set({"infor": JSON.parse(JSON.stringify(userInfor))}, {merge: true})
        .catch(
            catchError(CheckoutApiService._handleError)
        );
    }

    // Add bill to mongoDB
    addBill(customer: Customer):Observable<any>{
        var params = {
            uid: customer.uid,
            email: customer.email,
            bill: customer.bill
        }
        return this.http.post<any>(`${API_URL}/api/bill/add_bill`, params)
        .pipe(
            catchError(CheckoutApiService._handleError)
        );
    }
    
    // Submit the online order
    submitOnlinePayment(uid: string, onlinePaymentID: string):Observable<any>{
        var params = {
            uid: uid,
            onlinePaymentID: onlinePaymentID
        };
        return this.http.post<any>(`${API_URL}/api/bill/submitOnlinePayment`, params)
        .pipe(
            catchError(CheckoutApiService._handleError)
        );
    }

    // Delete all products from cart
    deleteAllProducts(uid: string){
        const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
        cartRef.set({"cart": []}, { merge: true }).catch(
            catchError(CheckoutApiService._handleError)
        );
    }

    // Get all of the districts of Hanoi
    GetDistrictsOfHanoi(): Observable<any> {
        return this.http.get<any>(`${API_URL}/api/maps`)
        .pipe(
            catchError(CheckoutApiService._handleError)
        );
    }

    //----------------------- Checkout with nganluong.vn -------------------------//
    
    // Build url to connect to nganluong.vn
    buildURL(customer: Customer, return_url: string, order_code: string, currency: string, quantity: number, tax: number, discount: number, 
            fee_cal: number, fee_shipping: number,  affiliate_code: string        
    ): string {
        let paymentURL: string = "";
        let str_return_url = return_url.toLowerCase();

        // nomalize nganluong.vn params from customer
        let transaction_info: string = customer.email + "Payment";
        let price: number = customer.bill['totalMoney'];
        let order_description: string = "";
        for(let item of customer.bill['cart']) {
            order_description += (item.quantityPurchased + " x " + item.product.name + ". \n");
        }
        order_description.trim();
        let infor = customer.bill['infor'];
        let address = infor.address.details + ", " + infor.address.subDistrict + ", " +
                        infor.address.district + ", " + infor.address.province;
        let buyer_info = infor.name + "*|*" + customer.email + "*|*" + infor.phoneNumber + "*|*" +
                    address;
        
        let security_code = merchant_site_code + " " + str_return_url + " " + receiver + " " + 
                            transaction_info + " " + order_code + " " + price + " " + currency + " " + 
                            quantity + " " + tax + " " + discount + " " + fee_cal + " " + fee_shipping + " " + 
                            order_description + " " + buyer_info + " " + affiliate_code + " " + secure_pass;
        let md5 = Md5.init(security_code);
        let paramsURL: {[key: string]:number|string} = {};
        paramsURL['merchant_site_code'] = merchant_site_code;
        paramsURL['return_url'] = encodeURI(str_return_url.toLowerCase());
        paramsURL['receiver'] = encodeURI(receiver);
        paramsURL['transaction_info'] = transaction_info;
        paramsURL['order_code'] = order_code;
        paramsURL['price'] = price;
        paramsURL['currency'] = currency;
        paramsURL['quantity'] = quantity;
        paramsURL['tax'] = tax;
        paramsURL['discount'] = discount;
        paramsURL['fee_cal'] = fee_cal;
        paramsURL['fee_shipping'] = fee_shipping;
        paramsURL['order_description'] = encodeURI(order_description);
        paramsURL['buyer_info'] = encodeURI(buyer_info);
        paramsURL['affiliate_code'] = affiliate_code;
        paramsURL['secure_code'] = md5;
        let redirectURL = nganluong_url;
        if (redirectURL.indexOf("?") == -1) redirectURL += "?";
        else if (redirectURL.substring(redirectURL.length - 1, 1) != "?" && redirectURL.indexOf("&") == -1)
        {
           redirectURL += "&";
        }

        let url = "";
        for (let key in paramsURL) {            
            if(url=="") url += (key.toString() + "=" + paramsURL[key]);
            else url += ("&" + key.toString() + "=" + paramsURL[key]);
        }

        paymentURL = redirectURL + url;
        return paymentURL;
    }

    // Verify payment
    verifyPaymentUrl(transaction_info: string, order_code: string, price: string, 
                    payment_id: string, payment_type: string, error_text: string, 
                    secure_code: string
    ): boolean{
        let str: string = " " + decodeURI(transaction_info) + " " + order_code + " " + 
                            price + " " + payment_id + " " + payment_type + " " + 
                            decodeURI(error_text) + " " + merchant_site_code + " " + 
                            secure_pass;        
        let verify_secure_code = Md5.init(str);

        if(verify_secure_code == secure_code) return true;
        else return false;
    }    

}