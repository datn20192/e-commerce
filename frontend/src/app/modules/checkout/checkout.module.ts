import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared-module';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';

// Directive
import { NumbericInput } from '../../shared/directives/numberic-input.directive';
import { MonthYearInput } from '../../shared/directives/month-year-input.directive';

// Pipe
import { CartAddressInfor } from '../../shared/pipes/cart/cart-address-infor.pipe';
 
@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    ShippingComponent,
    BillComponent,
    PaymentComponent,

    NumbericInput,
    MonthYearInput,  
    
    CartAddressInfor
  ],
  imports: [
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }