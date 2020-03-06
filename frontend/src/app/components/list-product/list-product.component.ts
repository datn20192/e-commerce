import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsApiService } from '../../services/product-api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productsApi: ProductsApiService) { }

  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {

  }

  productsListSubs: Subscription;
  productsList: Product[];
  product = new Product("", "", "", "", "", "", "");
  type = '';

  load() {
    this.productsListSubs = this.productsApi.getProducts().subscribe(res => {
      this.productsList = res;
      console.log(this.productsListSubs);
      console.log(this.productsList);
    },
      console.error
    );
  }

  unload() {
    this.productsListSubs.unsubscribe();
  }

  submit() {
    if (this.type == 'Add') {
      this.productsListSubs = this.productsApi.addProduct(this.product.product_id, this.product.name, this.product.price, this.product.quantity, this.product.category, this.product.description, this.product.imageURL).subscribe(res => {
        var result = JSON.parse(res);
        console.log(result.data);
        alert(result.data);
        console.log(this.product);
        this.load();
      })
    }
    else if (this.type = 'Delete') {

    }
  }

  create() {
    this.type = 'Add';
    this.product = {
      product_id: '',
      name: '',
      price: '',
      quantity: '',
      category: '',
      description: '',
      imageURL: ''
    }
  }

  update() {

  }

  delete() {

  }

}
