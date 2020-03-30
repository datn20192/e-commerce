import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './home/home-products/product-list.component';
import { GroupProductsComponent } from './home/group-products/group-products.component';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { ShippingComponent } from './components/checkout/shipping/shipping.component';

// guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [    

  {
    path: '',
    component: ProductListComponent,
    data: {
      title: 'Trang chủ'
    }
  },
  
  { 
    path: 'customers', 
    loadChildren: () => import('./customers/customers').then(m => m.CustomersModule) 
  },
  
      {
        path: 'dien-thoai',
        component: GroupProductsComponent,
        data: {
          title: 'Điện Thoại'
        }
      },
      {
        path: 'may-tinh-bang',
        component: GroupProductsComponent,
        data: {
          title: 'Máy tính bảng'
        }
      },
      {
        path: 'laptop',
        component: GroupProductsComponent,
        data: {
          title: 'Laptop'
        }       
      },
      {
        path: 'thiet-bi-may-tinh',
        component: GroupProductsComponent,
        data: {
          title: 'Thiết Bị Máy Tính'
        }
      },
      {
        path: 'tivi',
        component: GroupProductsComponent,
        data: {
          title: 'Tivi'
        }
      },
      {
        path: 'may-dieu-hoa',
        component: GroupProductsComponent,
        data: {
          title: 'Máy Điều Hòa'
        }
      },
      {
        path: 'may-giat',
        component: GroupProductsComponent,
        data: {
          title: 'Máy Giặt'
        }
      },
      {
        path: 'tu-lanh',
        component: GroupProductsComponent,
        data: {
          title: 'Tủ Lạnh'
        }
      },     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
