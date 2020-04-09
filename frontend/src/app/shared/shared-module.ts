import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPrice } from './pipes/product/product-price.pipe';
import { CartTotalMoney } from './pipes/cart/cart-total-money.pipe';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ 
        ProductPrice,
        CartTotalMoney
    ],
    exports: [ 
        CommonModule,
        ProductPrice,
        CartTotalMoney 
    ]
   })
   export class SharedModule { }