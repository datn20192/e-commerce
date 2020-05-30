import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
import { Product } from '../../../../models/product.model';
import { ProductsApiService } from '../../../../services/product-api.service';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
 
  productSubs: Subscription;

  product:Product;
  isUpdate: boolean = false;
  productID:string = "";
  isLoad:boolean = false;
  
  constructor(
    private router: Router,
    private productApiService: ProductsApiService
  ) { }


  ngOnInit() {
    this.loadProduct();
  }

  ngOnDestroy() {
    this.productSubs.unsubscribe();
  }

  loadProduct() {
    // Load product ID
    this.productID = this.router.url.split('/')[this.router.url.split('/').length-1];
    console.log(this.productID);
    this.productSubs = this.productApiService.getProductByID(this.productID).subscribe(res => {
      let result = JSON.parse(res);
      if(result.code==200) {
        this.product = result.data;
        this.isLoad = true;
      }      
    });
  }

  deleteProduct(product: Product){
    if(confirm("Bạn muốn xóa sản phẩm\n" + product.name)) {
      console.log("deleted");
    }
  }

  updateProduct() {
    this.isUpdate = !this.isUpdate;
  }
  
}