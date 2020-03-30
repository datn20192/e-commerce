import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './home-products/product-list.component';
import { GroupProductsComponent } from './group-products/group-products.component';
import { CardProductComponent } from './products/card-product/card-product.component';
import { CarouselListProductComponent } from './products/list-product-carousel/list-product-carousel.component';
import { ListProductGridComponent } from './products/list-product-grid/list-product-grid.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ProductListComponent,
        GroupProductsComponent,
        CardProductComponent,
        CarouselListProductComponent,
        ListProductGridComponent,
        ProductDetailComponent
    ]
})

export class HomeModule {}