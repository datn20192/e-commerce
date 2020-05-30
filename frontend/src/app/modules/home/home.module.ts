import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel'

import { SharedModule } from '../../shared/shared-module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './home-products/product-list.component';
import { GroupProductsComponent } from './group-products/group-products.component';
import { CarouselListProductComponent } from './products/list-product-carousel/list-product-carousel.component';

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
        CarouselListProductComponent,
        SearchComponent,
        DashboardComponent
    ],
    providers: [
        DashboardService
    ]
})

export class HomeModule {}