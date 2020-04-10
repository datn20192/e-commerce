import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
    selector: 'app-signin-signup',
    templateUrl: './signin-signup.component.html'
})
export class SigninSignupComponent {

    @Input() product: Product;

    constructor() {

    }

    ngOnInit() {
    
    }
}