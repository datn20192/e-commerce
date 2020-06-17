import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { CheckoutApiService } from '../../checkout.service';
import { AuthService } from '../../../../services/auth.service';
import { retry } from 'rxjs/operators';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html'
})

export class SuccessComponent {
    
    private authSubs: Subscription;
    private submitSubs: Subscription;

    private paymentResult: boolean = false;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private spinnerService: NgxSpinnerService,
        private checkoutApiService: CheckoutApiService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.load();
    }

    ngOnDestroy() {
       this.authSubs.unsubscribe();
       this.submitSubs.unsubscribe();
    }

    load() {
        this.spinnerService.show();
        this.route.queryParams.subscribe(params => {
            let transaction_info = params['transaction_info'];
            let order_code = params['order_code'];
            let price = params['price'];
            let payment_id = params['payment_id'];
            let payment_type = params['payment_type'];
            let error_text = params['error_text'];
            let secure_code = params['secure_code'];
            console.log(order_code);
            this.paymentResult = this.checkoutApiService.verifyPaymentUrl(transaction_info, order_code, price, 
                                            payment_id, payment_type, error_text, secure_code);
            this.authSubs = this.authService.user$.subscribe(user => {
                this.submitSubs = this.checkoutApiService.submitOnlinePayment(user.uid, order_code).subscribe(res => {
                    let result = JSON.parse(res);
                    if(result.code !== 200) {
                        this.spinnerService.hide();
                        retry(1);
                    }
                    else {
                        this.spinnerService.hide();
                        alert('Đặt hàng thàng công. Tiếp tục mua sắm..');
                        this.router.navigate(['']);
                    }
                });
            });
        });
        
        
    }
    
}