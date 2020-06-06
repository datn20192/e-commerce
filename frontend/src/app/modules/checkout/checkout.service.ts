import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs/';
import {catchError} from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { API_URL} from '../../../environments/environment';

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
        return this.http.post<any>(`${API_URL}/api/add_bill`, params)
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
}