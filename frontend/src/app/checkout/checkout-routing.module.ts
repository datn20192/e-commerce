import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';

import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { 
    path: '', 
    component: CheckoutComponent,
    data : {
      title: 'Đặt hàng'
    },
    children: [     
      {
        path: 'cart',
        component: CartComponent,
        data : {
          title: 'Giỏ hàng'
        }
      },

      {
        path: 'shipping',
        component: ShippingComponent,
        data : {
          title: 'Địa chỉ giao hàng'
        }
      },

      {
        path: 'payment',
        component: PaymentComponent,
        data : {
          title: 'Thanh toán & Đặt mua'
        }
      }
      
    ] 
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CheckoutRoutingModule { }


