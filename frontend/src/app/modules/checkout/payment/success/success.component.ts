import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { CheckoutApiService } from '../../checkout.service';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html'
})

export class SuccessComponent {
    
    private paymentResult: boolean = false;
    
    constructor(
        private route: ActivatedRoute,
        private checkoutApiService: CheckoutApiService
    ) { }

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
       
    }

    load() {

        this.route.queryParams.subscribe(params => {
            let transaction_info = params['transaction_info'];
            let order_code = params['order_code'];
            let price = params['price'];
            let payment_id = params['payment_id'];
            let payment_type = params['payment_type'];
            let error_text = params['error_text'];
            let secure_code = params['secure_code'];

            this.paymentResult = this.checkoutApiService.verifyPaymentUrl(transaction_info, order_code, price, 
                                            payment_id, payment_type, error_text, secure_code);
            
            console.log(this.paymentResult);
        });
        
        
    }
    
}