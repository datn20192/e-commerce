import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';
import { CheckoutGuard } from '../../guards/checkout.guard';

import { CheckoutComponent } from './checkout.component';

import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './payment/success/success.component';

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
        path: 'gio-hang',
        component: CartComponent,
        data : {
          title: 'Giỏ hàng'
        }
      },

      {
        path: 'dia-chi-giao-hang',
        component: ShippingComponent,
        data : {
          title: 'Địa chỉ giao hàng'
        }
      },

      {
        path: 'hoa-don',
        component: PaymentComponent,
        canActivate: [CheckoutGuard],
        data : {
          title: 'Thanh toán & Đặt mua'
        }
      },

      {
        path: 'ket-qua-giao-dich',
        component: SuccessComponent,
        data : {
          title: 'Kết quả giao dịch'
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


