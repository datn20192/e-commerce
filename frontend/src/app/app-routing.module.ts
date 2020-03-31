import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { HomeProductsComponent } from './components/products/home-products/home-products.component';
import { GroupProductsComponent } from './components/products/group-products/group-products.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [    
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Trang chủ'
    },
    children: [  
      {
        path: '',
        component: HomeProductsComponent,
        data: {
          title: 'Sản phẩm mới'
        }           
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
      {
        path: 'checkout',
        component: CartComponent,
        data: {
        title: 'Giỏ hàng'
        }
      }       
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
