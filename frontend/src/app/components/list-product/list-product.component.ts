import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductsApiService} from '../../services/product-api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit { 
  
  constructor(private productsApi: ProductsApiService){}

  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {
    
  }

  productsListSubs: Subscription;
  productsList: Product[];
  product = new Product("","","","","","");
  type = '';

  load(){
    this.productsListSubs = this.productsApi.getProducts().subscribe(res => {
      this.productsList = res;
      console.log(this.productsListSubs);
      console.log(this.productsList);      
    },
    console.error
    );
  }

  unload(){
    this.productsListSubs.unsubscribe();
  }

  submit(){
    if(this.type == 'Add'){

    }
    else if(this.type = 'Delete'){

    }
  }

  create(){

  }

  update(){

  }

  delete(){
    
  }

}
