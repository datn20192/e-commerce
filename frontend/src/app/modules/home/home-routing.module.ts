import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { GroupProductsComponent } from './group-products/group-products.component';
import { ProductListComponent } from './home-products/product-list.component';
import { SigninSignupComponent } from '../../shared/components/signin-signup/signin-signup.component';
import { SearchComponent } from './search/search.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Trang chủ'
        },
        children: [
            {
              path: '',
              component: ProductListComponent,
              data: {
                title: 'Sản phẩm mới'
              }
            },

            {
              path: 'signin-signup',
              component: SigninSignupComponent,
              data: {
                title: 'Đăng nhập & Đăng ký'
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
                path: 'search',
                component: SearchComponent,
                data: {
                  title: 'Tìm kiếm'
                }
              }
        ]
    },    
]

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule {}