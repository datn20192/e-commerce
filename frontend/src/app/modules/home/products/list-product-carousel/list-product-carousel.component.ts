import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../../models/product.model';
import { HomeApiService }from '../../home.service';

@Component({
  selector: 'app-carousel-list-product',
  templateUrl: './list-product-carousel.component.html',
  styleUrls: ['./list-product-carousel.component.css']
})
export class CarouselListProductComponent {

  @Input() title: String;
  @Input() category: String;
  
  productsListSubs: Subscription;    

  // Product    
  productsList: Product[];  
  quadrupleProductList = [];

  constructor(
    private productsApi:HomeApiService
  ){}

  ngOnInit(){    
    this.load();
  }

  ngOnDestroy(){
    this.productsListSubs.unsubscribe(); 
  }  
  
  load(){    
    this.productsListSubs = this.productsApi.getProductByCategory(this.category).subscribe(res => {
      let result = JSON.parse(res);
      this.productsList = result.data;        
      this.quadrupleProductList = this.groupByQuaruple(this.productsList);                     
    },
      console.error
    );         
  }

  // group product list by quaruple
  groupByQuaruple(productsList){
    let quadrupleProduct = [];
    let quadrupleProductList = [];
    for (let i = productsList.length-1; i>=0; i=i-4) {      
      quadrupleProduct = (i>3) ? productsList.slice(i-4,i) : productsList.slice(0,i);      
      quadrupleProductList.push(quadrupleProduct);      
    } 
    return quadrupleProductList;
  }
  
}