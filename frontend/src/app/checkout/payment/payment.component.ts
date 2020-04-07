import { Component } from '@angular/core';

import { Card } from '../../models/bill.model';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

    private typeOfPayment: string;

    private typeOfPaymentArr: object[] = [];       

    private card = new Card("", "", "", "");

    constructor(
    
    ) { }

    ngOnInit() {
        this.typeOfPaymentArr = [
            {
                value: "cash",
                name: "Thanh toán tiền mặt khi nhận hàng"            
            },
            {
                value: "card",
                name: "Thanh toán bằng thẻ quốc tế "           
            }
        ];
        this.typeOfPayment = 'cash';
        console.log('<*>-<*>');
    }

    onSubmit() {
        console.log(this.typeOfPayment);
    }

    slash() {
        this.card.validThru = this.card.validThru + '/'
    }
    
}