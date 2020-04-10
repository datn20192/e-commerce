import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninSignupComponent } from './components/signin-signup/signin-signup.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';

import { ProductPrice } from './pipes/product/product-price.pipe';
import { CartTotalMoney } from './pipes/cart/cart-total-money.pipe';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [ 
        ProductPrice,
        CartTotalMoney,
        SigninSignupComponent,
        SigninComponent,
        SignupComponent
    ],
    exports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        
        SigninSignupComponent,
        SigninComponent,
        SignupComponent,

        ProductPrice,
        CartTotalMoney 
    ]
   })
   export class SharedModule { }