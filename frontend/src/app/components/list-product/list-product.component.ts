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
    this.unload();
  }

  productsListSubs: Subscription;
  categoryList = [];
  productsList: Product[];
  product = new Product("", "", "", "", "", "", "");
  type = '';

  // to count the quantity by product type 
  count = {
    'smartphone': 0,
    'laptop': 0,
    'tablet': 0
  }; 

  load() {
    this.productsListSubs = this.productsApi.getProducts().subscribe(res => {
      var result = JSON.parse(res)
      this.productsList = result.data;
      this.product = new Product("", "", "", "", "", "", "");

      // count the quantity by product type
      this.count = {
        'smartphone': this.productsList.filter(item => item.category == 'smartphone').length, 
        'laptop': this.productsList.filter(item => item.category == 'laptop').length,
        'tablet': this.productsList.filter(item => item.category == 'table').length
      }
      console.log(this.productsListSubs);     
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
        alert(result.data);
        this.load();
      },
        console.error
      );
    }
    else {
      this.productsListSubs = this.productsApi.updateProduct(this.product.product_id, this.product.name, this.product.price, this.product.quantity, this.product.category, this.product.description, this.product.imageURL).subscribe(res => {
        var result = JSON.parse(res);
        alert(result.data);
        this.load();
      },
        console.error
      );
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

  update(id) {
    this.type = 'Edit';
    var productEdit = this.productsList.filter(item => item.product_id == id)[0];
    this.product.product_id = productEdit.product_id;
    this.product.name = productEdit.name;
    this.product.price = productEdit.price;
    this.product.quantity = productEdit.quantity;
    this.product.category = productEdit.category;
    this.product.description = productEdit.description;
    this.product.imageURL = productEdit.imageURL;
  }

  delete(id) {
    this.productsListSubs = this.productsApi.deleteProduct(id).subscribe(res => {
      var result = JSON.parse(res);
      alert(result.data);
      this.load();
    });
  }

}
