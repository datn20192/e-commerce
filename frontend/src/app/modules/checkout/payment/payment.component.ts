import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { CheckoutApiService } from '../checkout.service';
import { Card, TypeOfPayment } from '../../../models/bill.model';
import { User } from '../../../models/user.model';
import { catchError } from 'rxjs/operators';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

    private typeOfPaymentSubs: Subscription;
    private userInforSubs: Subscription;

    private typeOfPayment: string;
    private typeOfPaymentArr: TypeOfPayment[];     
    private card = new Card("", "", "", "");
    // private userInfor = new UserInfor("", "", new Address("", "", "", ""));
    private user: User;

    private showBill:boolean = false;

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
            let infor = res.payload.data().infor;     
            if(infor !== {}) {
                this.user = res.payload.data();
                this.showBill = true;
                console.log(this.user);
            }
            else this.route.navigate(['checkout/shipping']);
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
        console.log(this.typeOfPayment);
    }

    // Nomalize the valid thru input
    slash() {
        this.card.validThru = this.card.validThru + '/'
    }
    
}