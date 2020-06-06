import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { SigninSignupComponent } from './components/signin-signup/signin-signup.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ListProductGridComponent } from '../modules/home/products/list-product-grid/list-product-grid.component';
import { CardProductComponent } from '../modules/home/products/card-product/card-product.component';
import { ProductDetailComponent } from '../modules/home/products/product-detail/product-detail.component';
import { AdminCardProductComponent } from '../modules/admin/products/admin-card-product/admin-card-product.component';

// Pipe
import { ProductStar } from './pipes/product/product-star.pipe';
import { ProductPrice } from './pipes/product/product-price.pipe';
import { CartTotalMoney } from './pipes/cart/cart-total-money.pipe';

@NgModule({
    imports: [ 
        CommonModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [ 
        // Pipe
        ProductPrice,
        CartTotalMoney,
        ProductStar,
        // Component
        SigninSignupComponent,
        SigninComponent,
        SignupComponent,
        ListProductGridComponent,
        CardProductComponent,
        ProductDetailComponent,
        AdminCardProductComponent
    ],
    exports: [ 
        NgxSpinnerModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        
        SigninSignupComponent,
        SigninComponent,
        SignupComponent,
        ListProductGridComponent,
        CardProductComponent,
        ProductDetailComponent,
        AdminCardProductComponent,

        ProductPrice,
        CartTotalMoney,
        ProductStar 
    ]
   })
   export class SharedModule { }