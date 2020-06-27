import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared-module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './home-products/product-list.component';
import { GroupProductsComponent } from './group-products/group-products.component';

import { SearchComponent } from '../search/search.component';
import { ChartsModule } from 'ng2-charts';
import { StarVote } from './products/feedback/star.directive';


@NgModule({
    imports: [
        SharedModule,       
        HomeRoutingModule,
        ChartsModule,
    ],
    declarations: [
        HomeComponent,
        ProductListComponent,
        GroupProductsComponent,
        SearchComponent,
        StarVote
    ],
   
})

export class HomeModule {}