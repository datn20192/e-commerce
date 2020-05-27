import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel'

import { SharedModule } from '../../shared/shared-module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './home-products/product-list.component';
import { GroupProductsComponent } from './group-products/group-products.component';
import { CardProductComponent } from './products/card-product/card-product.component';
import { CarouselListProductComponent } from './products/list-product-carousel/list-product-carousel.component';
import { ListProductGridComponent } from './products/list-product-grid/list-product-grid.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

// Pipe
import { ProductStar } from '../../shared/pipes/product/product-star.pipe';
import { SearchComponent } from '../search/search.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardService } from '../../services/dashboard.service';
import { ChartsModule } from 'ng2-charts';
@NgModule({
    imports: [
        CarouselModule,
        SharedModule,       
        HomeRoutingModule,
        ChartsModule
    ],
    declarations: [
        HomeComponent,
        ProductListComponent,
        GroupProductsComponent,
        CardProductComponent,
        CarouselListProductComponent,
        ListProductGridComponent,
        ProductDetailComponent,
        SearchComponent,
        DashboardComponent,
        ProductStar
    ],
    providers: [
        DashboardService
    ]
})

export class HomeModule {}