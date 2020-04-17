import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../models/product.model';

import { ItemCartService } from '../../../services/item-cart.service';

@Component({
    selector: 'app-signin-signup',
    templateUrl: './signin-signup.component.html'
})
export class SigninSignupComponent {    
    
    private activeTab = 'signin';           // Enable signin tab automatically when navigating this page
    constructor(
        private route: Router,
        private itemCartService: ItemCartService
    ) { }

    ngOnInit() {
        
    }


    clickTab(tab:string) {
        this.activeTab = tab;
    }

    submitSignin() {
        this.route.navigate(['/']);         
    }
}