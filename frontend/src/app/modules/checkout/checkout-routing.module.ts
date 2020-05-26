import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';
import { CheckoutGuard } from '../../guards/checkout.guard';

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
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
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
        canActivate: [CheckoutGuard],
        data : {
          title: 'Địa chỉ giao hàng'
        }
      },

      {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [CheckoutGuard],
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


