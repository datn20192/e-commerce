import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { CartComponent } from './cart/cart.component';

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
      }
    ] 
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }