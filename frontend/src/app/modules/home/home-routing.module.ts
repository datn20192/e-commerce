import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninSignupGuard } from '../../guards/signin-signup.guard';
import { AdminProductGroupGuard } from '../../guards/admin/admin-product-group.guard';

import { HomeComponent } from './home.component';
import { GroupProductsComponent } from './group-products/group-products.component';
import { ProductListComponent } from './home-products/product-list.component';
import { SigninSignupComponent } from '../../shared/components/signin-signup/signin-signup.component';
import { SearchComponent } from '../search/search.component';

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
              path: 'dangnhap-dangky',
              component: SigninSignupComponent,
              canActivate: [SigninSignupGuard],
              data: {
                title: 'Đăng nhập & Đăng ký'
              }
            },

            {
                path: 'dien-thoai',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
                data: {
                  title: 'Điện Thoại'
                }
              },
              {
                path: 'may-tinh-bang',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
                data: {
                  title: 'Máy tính bảng'
                }
              },
              {
                path: 'laptop',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
                data: {
                  title: 'Laptop'
                }       
              },
              {
                path: 'thiet-bi-may-tinh',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
                data: {
                  title: 'Thiết Bị Máy Tính'
                }
              },
              {
                path: 'tivi',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
                data: {
                  title: 'Tivi'
                }
              },
              {
                path: 'may-dieu-hoa',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
                data: {
                  title: 'Máy Điều Hòa'
                }
              },
              {
                path: 'may-giat',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
                data: {
                  title: 'Máy Giặt'
                }
              },
              {
                path: 'tu-lanh',
                component: GroupProductsComponent,
                canActivate: [AdminProductGroupGuard],
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
              },
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