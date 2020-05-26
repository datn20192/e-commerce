import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { CheckoutApiService } from '../checkout.service';
import { Card, TypeOfPayment, Customer, Bill } from '../../../models/bill.model';
import { User } from '../../../models/user.model';
import { CartFunction } from '../../../shared/functions/cart.function';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

    private typeOfPaymentSubs: Subscription;
    private userInforSubs: Subscription;

    public typeOfPayment: string;
    public typeOfPaymentArr: TypeOfPayment[];     
    private card = new Card("", "", "", "");
    private user: User;

    public showBill:boolean = false;
    private customer: Customer;         // save bill

    constructor(
        private route: Router,
        private checkoutApi: CheckoutApiService
    ) { }

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
        this.typeOfPaymentSubs.unsubscribe();
        this.userInforSubs.unsubscribe();
    }

    load() {
        this.userInforSubs = this.checkoutApi.getUserInfor().subscribe(res => {
            let userFB = res.payload.data();     
            if(userFB.infor !== {} && userFB.cart.length!=0) {
                this.user = userFB;
                this.showBill = true;
                this.customer = this.createBill(this.user);
            }            
        },
            console.error
        );
        this.typeOfPaymentSubs = this.checkoutApi.getAllTypeOfPayment().subscribe(res => {
            let result = JSON.parse(res);
            this.typeOfPaymentArr = result.data;
            this.typeOfPayment = 'cash';                    
        },
            console.error
        );        
    }

    onSubmit() {
        if(this.typeOfPayment==="cash") {
            this.checkoutApi.addBill(this.customer).subscribe(res => {
                let result = JSON.parse(res);
                if(result.code !== 200) alert('Đặt hàng thất bại.')
                else {
                    this.checkoutApi.deleteAllProducts();
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