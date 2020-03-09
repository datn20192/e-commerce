import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsApiService } from '../../services/product-api.service';
import { Product } from '../../models/product.model';
import { productCategoryServiceAPI } from '../../services/productCategory-api.service';
import { productCategory } from '../../models/productCategory.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    private productsApi: ProductsApiService, 
    private productCategoryApi: productCategoryServiceAPI
    ) { }

  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {
    this.unload();
  }

  productsListSubs: Subscription;
  productCategoryListSubs: Subscription;
  
  // Product  
  productsList: Product[];
  product = new Product("", "", "", "", "", "", "");
  type = '';

  // Product category
  show_old = false;         // Show the old category form
  show_new = false;         // Show the new category form
  productCategoryList = [];  
  productCategory = new productCategory("","",""); 

  load() {
    this.show_old = false;         // Show the old category form
    this.show_new = false;         // Show the new category form
    // Get product list
    this.productsListSubs = this.productsApi.getProducts().subscribe(res => {
      let result = JSON.parse(res);
      this.productsList = result.data;
      this.product = new Product("", "", "", "", "", "", "");        
      console.log(this.productsListSubs); 

      // Get product category list
      this.productCategoryListSubs = this.productCategoryApi.getProductCategories().subscribe(res =>{
        let result = JSON.parse(res);
        this.productCategoryList = result.data;      
        this.productCategory = new productCategory("","","");          
        this.productCategoryList.forEach(element => {                  
          element.quantity = this.productsList.filter(item => item.category == element.category_id).length;          
        });
      },
        console.error
      );
    },
      console.error
    );    
  }

  unload() {  
    // Update the quantity of every category to database
    this.productCategoryList.forEach(element => {
      this.productCategoryListSubs = this.productCategoryApi.updateProductCategory(element.product_id, element.name, element.quantity).subscribe(res =>{ },
        console.error
      );
    });
    console.log('unload');
    this.productsListSubs.unsubscribe();
    this.productCategoryListSubs.unsubscribe();
  }

  submit() {
    if (this.type == 'Add') {
      // Add new product category  
      if(this.show_new){
        this.productCategoryListSubs = this.productCategoryApi.addProductCategory(this.productCategory.category_id, this.productCategory.name,"1").subscribe(res => {
          let result = JSON.parse(res);
          if(result.CODE==500){
            alert(result.data);
            this.load();
          }else{
            this.product.category = this.productCategory.category_id;
          }
        });
      }
      // Update the quantity of old product category
      else if(this.show_old){
        let categoryEdit = this.productCategoryList.filter(item => item.category_id=this.product.category)[0];
        categoryEdit.quantity = (parseInt(categoryEdit.quantity)+1).toString();
        this.productCategoryListSubs = this.productCategoryApi.updateProductCategory(this.product.category, categoryEdit.name, categoryEdit.quantity).subscribe(res => {
          let result = JSON.parse(res);
          if(result.CODE==500){
            alert(result.data);
            this.load();
          }
        });
      }
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
    this.show_old = true;
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
    },
      console.error
    );
  }

}
