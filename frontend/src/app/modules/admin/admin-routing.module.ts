import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminModuleGuard } from '../../guards/admin/admin-module.guard';

import { AdminComponent } from './admin.component';
import { AdminProductDetailComponent } from './products/admin-product-details/admin-product-detail.component';
import { AdminGroupProductsComponent } from './products/admin-group-products/admin-group-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminProductListComponent } from './products/admin-home-products/admin-product-list.component';

const adminRoute: Routes = [
    {
        path: '',
        component: AdminComponent,
        data: {
            title: 'Quản lý'
        },
        canActivate: [ AdminModuleGuard ],
        canActivateChild: [ AdminModuleGuard ],
        children: [
            {
                path: '',
                component: AdminProductListComponent,
                data: {
                    title: 'Sản phẩm mới'
                }
            },

            {
                path: 'thong-ke-doanh-thu',
                component: DashboardComponent,
                data: {
                    title: 'Thống kê doanh thu'
                }
            },

            {
                path: 'chi-tiet-san-pham/:id',
                component: AdminProductDetailComponent,
                data: {
                    title: 'Chi tiết sản phẩm'
                }
            },

            {
                path: 'dien-thoai',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Điện Thoại'
                }
            },
            {
                path: 'may-tinh-bang',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Máy tính bảng'
                }
            },
            {
                path: 'laptop',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Laptop'
                }       
            },
            {
                path: 'thiet-bi-may-tinh',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Thiết Bị Máy Tính'
                }
            },
            {
                path: 'tivi',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Tivi'
                }
            },
            {
                path: 'may-dieu-hoa',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Máy Điều Hòa'
                }
            },
            {
                path: 'may-giat',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Máy Giặt'
                }
            },
            {
                path: 'tu-lanh',
                component: AdminGroupProductsComponent,
                data: {
                  title: 'Tủ Lạnh'
                }
            },

        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}