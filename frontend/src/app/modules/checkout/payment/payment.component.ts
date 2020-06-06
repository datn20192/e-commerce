import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { CheckoutApiService } from '../checkout.service';
import { Card, TypeOfPayment, Customer, Bill } from '../../../models/bill.model';
import { User } from '../../../models/user.model';
import { CartFunction } from '../../../shared/functions/cart.function';

import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

    private typeOfPaymentSubs: Subscription;

    public typeOfPayment: string;
    public typeOfPaymentArr: TypeOfPayment[];     
    private card = new Card("", "", "", "");
    private user: User;

    public showBill:boolean = false;
    private customer: Customer;         // save bill

    constructor(
        private route: Router,
        private spinnerService: NgxSpinnerService,
        private checkoutApi: CheckoutApiService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
        this.typeOfPaymentSubs.unsubscribe();
    }

    load() {   
        this.authService.user$.subscribe(user => {
            this.user=user;
            if(user) {
                this.showBill = true;
                this.customer = this.createBill(this.user);
            }           
           
            this.typeOfPaymentSubs = this.checkoutApi.getAllTypeOfPayment().subscribe(res => {
                let result = JSON.parse(res);
                this.typeOfPaymentArr = result.data;
                this.typeOfPayment = 'cash';                    
            },
                console.error
            );   
        });          
             
    }

    onSubmit() {
        if(this.typeOfPayment==="cash") {
            this.spinnerService.show();
            this.checkoutApi.addBill(this.customer).subscribe(res => {
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
        }
    }

    // Nomalize the valid thru input
    slash() {
        this.card.validThru = this.card.validThru + '/'
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
    
}