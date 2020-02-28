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
  productsListSubs: Subscription;
  productsList: Product[];

  constructor(private productsApi: ProductsApiService){}

  ngOnInit() {
    this.productsListSubs = this.productsApi.getProducts().subscribe(res => {
      this.productsList = res;
      console.log(this.productsListSubs)
    },
    console.error
    );
  }
  ngOnDestroy() {
    this.productsListSubs.unsubscribe();
  }
}
