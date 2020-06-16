import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { CheckoutApiService } from '../checkout.service';
import { TypeOfPayment, Customer } from '../../../models/bill.model';
import { User } from '../../../models/user.model';
import { CartFunction } from '../../../shared/functions/cart.function';

import { AuthService } from '../../../services/auth.service';
import { ItemCartService } from '../../../services/item-cart.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

    private typeOfPaymentSubs: Subscription;
    private billSubs: Subscription;

    public typeOfPayment: string;
    public typeOfPaymentArr: TypeOfPayment[]; 
    private user: User;
    private numberOfItems: Number;
    private isSubmit: boolean = false;

    public showBill:boolean = false;
    private customer: Customer;         // save bill

    constructor(
        private route: Router,
        private spinnerService: NgxSpinnerService,
        private checkoutApi: CheckoutApiService,
        private authService: AuthService,
        private itemCartService: ItemCartService
    ) { }

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
        this.typeOfPaymentSubs.unsubscribe();
        if (this.isSubmit) this.billSubs.unsubscribe();
    }

    load() {   
        this.authService.user$.subscribe(user => {
            this.user=user;
            this.numberOfItems = this.itemCartService.lengthCart;
            this.typeOfPaymentSubs = this.checkoutApi.getAllTypeOfPayment().subscribe(res => {
                let result = JSON.parse(res);
                this.typeOfPaymentArr = result.data;
                this.typeOfPayment = 'cash';                    
            },
                console.error
            );   
            if(user) {
                this.showBill = true;
                this.customer = this.createBill(this.user);
            }                   
        });          
             
    }

    onSubmit() {
        this.isSubmit = true;
        if(this.typeOfPayment==="cash") {
            this.customer.bill['typeOfPayment'] = this.typeOfPayment;
            this.spinnerService.show();
            this.billSubs = this.checkoutApi.addBill(this.customer).subscribe(res => {
                let result = JSON.parse(res);
                if(result.code !== 200) {
                    this.spinnerService.hide();
                    alert('Đặt hàng thất bại.');
                }
                else {
                    this.checkoutApi.deleteAllProducts(this.user.uid);
                    this.spinnerService.hide();
                    alert('Đặt hàng thàng công. Tiếp tục mua sắm..');
                    this.route.navigate(['']);
                }
            },
                console.error
            );
            console.log(this.customer);
        }
    }    

    // create bill
    private createBill(user:User): Customer {
        let customer: Customer = {
            uid: user.uid,
            email: user.email,
            bill: {
                cart: user.cart,
                infor: user.infor,
                date: new Date().toLocaleString("en-US", {timeZone:"Asia/Ho_Chi_Minh"}),
                totalMoney: CartFunction.totalMoney(user.cart),
                status: false,
                typeOfPayment: this.typeOfPayment
            }
        };               
        return customer;
    }

    checkoutByNL() {   
        this.isSubmit = true;

        this.customer.bill['typeOfPayment'] = this.typeOfPayment;
        this.customer.bill['onlinePaymentChecking'] = false;
        // Create order id
        let date = new Date();
        let order_code = this.user.uid + date.getFullYear().toString() + date.getMonth().toString() + 
                            date.getDay().toString() + date.getHours().toString() + date.getMinutes().toString() + 
                            date.getUTCMilliseconds().toString();
        this.customer.bill['onlinePaymentID'] = order_code;
        this.spinnerService.show();
        this.billSubs = this.checkoutApi.addBill(this.customer).subscribe(res => {
            let result = JSON.parse(res);
            if(result.code !== 200) {
                this.spinnerService.hide();
                alert('Đặt hàng thất bại.');
            }
            else {
                this.checkoutApi.deleteAllProducts(this.user.uid);
                this.spinnerService.hide();
                // Redirect to nganluong.vn checkout                          
                let paymentUrl = this.checkoutApi.buildURL(this.customer,"http://localhost:4200/thanh-toan/ket-qua-giao-dich", 
                                                     order_code, "vnd", 1, 0, 0, 0, 0, "");
                window.location.href = paymentUrl;
            }
        },
            console.error
        );
        
    }
    
}