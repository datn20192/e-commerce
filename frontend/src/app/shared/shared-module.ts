import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel'

import { NgxSpinnerModule } from 'ngx-spinner';

import { SigninSignupComponent } from './components/signin-signup/signin-signup.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { ListProductGridComponent } from '../modules/home/products/list-product-grid/list-product-grid.component';
import { CardProductComponent } from '../modules/home/products/card-product/card-product.component';
import { ProductDetailComponent } from '../modules/home/products/product-detail/product-detail.component';
import { AdminCardProductComponent } from '../modules/admin/products/admin-card-product/admin-card-product.component';
import { CarouselListProductComponent } from '../modules/home/products/list-product-carousel/list-product-carousel.component';
import { MiniCartComponent } from '../modules//checkout//bill//mini-cart/mini-cart.component';
import { MiniShippingComponent } from '../modules//checkout/bill/mini-shipping/mini-shipping.component';

// Pipe
import { ProductStar } from './pipes/product/product-star.pipe';
import { ProductPrice } from './pipes/product/product-price.pipe';
import { CartTotalMoney } from './pipes/cart/cart-total-money.pipe';
import { CartAddressInfor } from './pipes/cart/cart-address-infor.pipe';
import { FeedbackComponent } from '../modules/home/products/feedback/feedback.component';
import { TabsModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
@NgModule({
    imports: [ 
        CarouselModule,
        CommonModule,
        NgxSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        ProgressbarModule.forRoot(), 
    ],
    declarations: [ 
        // Pipe
        ProductPrice,
        CartTotalMoney,
        ProductStar,
        CartAddressInfor,
        // Component
        SigninSignupComponent,
        SigninComponent,
        SignupComponent,
        ListProductGridComponent,
        CardProductComponent,
        ProductDetailComponent,
        AdminCardProductComponent,
        CarouselListProductComponent,
        MiniCartComponent,
        MiniShippingComponent,
        FeedbackComponent
    ],
    exports: [ 
        CarouselModule,
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
        CarouselListProductComponent,
        MiniCartComponent,
        MiniShippingComponent,

        ProductPrice,
        CartTotalMoney,
        ProductStar,
        CartAddressInfor 
    ]
   })
   export class SharedModule { }