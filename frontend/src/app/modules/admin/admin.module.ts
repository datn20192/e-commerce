import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared-module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProductDetailComponent } from './products/admin-product-details/admin-product-detail.component';
import { AdminProductInformationComponent } from './products/admin-product-information/admin-product-information.component';
import { AdminGroupProductsComponent } from './products/admin-group-products/admin-group-products.component';
import { AdminProductListComponent } from './products/admin-home-products/admin-product-list.component';
import { AdminAddingProductComponent } from './products/admin-adding-product/admin-adding-product.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';


@NgModule({
    imports: [
        SharedModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
        AdminProductDetailComponent,
        AdminProductInformationComponent,
        AdminGroupProductsComponent,
        DashboardComponent,
        AdminProductListComponent,
        AdminAddingProductComponent
    ]
})
export class AdminModule {}