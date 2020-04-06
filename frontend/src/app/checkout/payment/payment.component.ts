import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

    private typeOfPayment: string;

    private typeOfPaymentArr: object[] = [
        {
            value: "cash",
            name: "Thanh toán tiền mặt khi nhận hàng"            
        },
        {
            value: "card",
            name: "Thanh toán bằng thẻ quốc tế "           
        }
    ];
    
    private cardInforForm = this.fb.group({
        name: [''],
        cardNumber: [''],
        validThru: [''],
        securityCode: ['']
    });    

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        
    }

    onSubmit() {
        console.log(this.typeOfPayment);
    }
}