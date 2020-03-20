import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HomeProductComponent } from './home-product.component';
import { ListProductComponent } from '../../components/products/list-product/list-product.component';
import { CardProductComponent } from '../../components/products/card-product/card-product.component';
import { HomeProductRoutingModule } from './home-product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeProductRoutingModule,    
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),    
  ],
  declarations: [ 
    HomeProductComponent,
    ListProductComponent,
    CardProductComponent 
  ]
})
export class HomeProductModule { }