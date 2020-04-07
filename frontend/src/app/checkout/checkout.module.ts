import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';

// Directive
import { NumbericInput } from '../shared/directives/numberic-input.directive';
import { MonthYearInput } from '../shared/directives/month-year-input.directive';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartComponent,
    ShippingComponent,
    BillComponent,
    PaymentComponent,

    NumbericInput,
    MonthYearInput
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }