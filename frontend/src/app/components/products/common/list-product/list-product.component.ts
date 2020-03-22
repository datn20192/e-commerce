import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../../models/product.model';
import { ProductsApiService } from '../../../../services/product-api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  @Input() title: String;
  @Input() content: String;
  
  constructor(
    private productsApi:ProductsApiService
  ){}

  ngOnInit(){
    this.load();
  }

  ngOnDestroy(){
    this.productsListSubs.unsubscribe(); 
  }

  productsListSubs: Subscription;    

  // Product    
  productsList: Product[];  
  quadrupleProductList = []; 
  
  load(){
    if(this.content === 'ALL'){
      this.productsListSubs = this.productsApi.getProducts().subscribe(res => {
        let result = JSON.parse(res);
        this.productsList = result.data;  
        console.log(this.productsList); 
        this.groupByQuaruple(this.productsList, this.quadrupleProductList);               
      },
        console.error
      );
    }      
  }

  // group product list by quaruple
  groupByQuaruple(productsList, quadrupleProductList){
    let quadrupleProduct = [];
    productsList.forEach((element, index) => {
      quadrupleProduct.push(element);               
      if((index%3==0 && index>0) || (index == (productsList.length -1))){
        quadrupleProductList.push(quadrupleProduct);
        quadrupleProduct = [];
      }                
    }); 
  }
  
}
