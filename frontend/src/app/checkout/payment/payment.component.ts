import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { CheckoutApiService } from '../checkout.service';
import { Card, TypeOfPayment } from '../../models/bill.model';
import { catchError } from 'rxjs/operators';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

    private typeOfPaymentSubs: Subscription;

    private typeOfPayment: string;
    private typeOfPaymentArr: TypeOfPayment[];     
    private card = new Card("", "", "", "");

    constructor(
        private checkoutApi: CheckoutApiService
    ) { }

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
        this.typeOfPaymentSubs.unsubscribe();
    }

    load() {
        this.typeOfPaymentSubs = this.checkoutApi.getAllTypeOfPayment().subscribe(res => {
            let result = JSON.parse(res);
            this.typeOfPaymentArr = result.data;
            this.typeOfPayment = 'cash'
        },
            console.error
        );
    }

    onSubmit() {
        console.log(this.typeOfPayment);
    }

    slash() {
        this.card.validThru = this.card.validThru + '/'
    }
    
}