import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
import { Product } from '../../../../models/product.model';
import { ProductsApiService } from '../../../../services/product-api.service';
import { AdminApiService } from '../../admin.service';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
 
  productSubs: Subscription;
  adminSubs: Subscription;

  product:Product;
  isUpdate: boolean = false;
  productID:string = "";
  isLoad:boolean = false;
  
  constructor(
    private router: Router,
    private productApiService: ProductsApiService,
    private adminApiService: AdminApiService
  ) { }


  ngOnInit() {
    this.loadProduct();
  }

  ngOnDestroy() {
    this.productSubs.unsubscribe();
    if(this.adminSubs) this.adminSubs.unsubscribe();
  }

  loadProduct() {
    // Load product ID
    this.productID = this.router.url.split('/')[this.router.url.split('/').length-1];
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
      this.adminSubs = this.adminApiService.deleteProduct(product.id).subscribe(res => {
        let result = JSON.parse(res);
        if(result.code === 200) {
          alert(`Xóa thành công sản phẩm \n ${product.name}`);
          this.router.navigate(["/quan-ly"]);
        }
        else alert("Xóa thất bại! Thử lại..");
      });
    }
  }

  //----------------- Update product ------------------//

  updateProduct(product?:Product) {
    this.isUpdate = !this.isUpdate;
    if(product) {
      this.adminSubs = this.adminApiService.updateProduct(product).subscribe(res => {
        let result = JSON.parse(res);
        if(result.code === 200) {
          alert("Cập nhật sản phẩm thành công");
          this.loadProduct();
        }
        else {
          alert("Thất baị! Hãy thử lại..");
          this.updateProduct();
        }
      });
    }
  }
  
}