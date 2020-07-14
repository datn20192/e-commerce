import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
import { Product } from '../../../../models/product.model';
import { ProductCategory, CategoryChild } from '../../../../models/productCategory.model';
import { ProductCategoryServiceAPI } from '../../../../services/productCategory-api.service';

@Component({
  selector: 'app-admin-product-information',
  templateUrl: './admin-product-information.component.html'
})
export class AdminProductInformationComponent implements OnInit {
 
  @Input() productIn: Product;
  @Input() allowSet: boolean; 
  @Output() submitProduct = new EventEmitter();
  bigImage: string;
  productCategorySubs: Subscription;

  productCategories: ProductCategory[];
  categories: CategoryChild[];
  brands: string[];
  product: Product;   // Product for modifying information
  
  constructor(
    private route: Router,
    private productCategoryApi: ProductCategoryServiceAPI
  ) { }

  ngOnInit() {
    this.loadCategory();
    this.loadProduct();
  }

  ngOnDestroy() {
    this.productCategorySubs.unsubscribe();
  }

  //------------------------------ Load category ---------------------------------//
  loadCategory() {
    this.productCategorySubs = this.productCategoryApi.getProductCategories().subscribe(res => {
      let result = JSON.parse(res);
      this.productCategories = result.data;
      this.chooseGroup(this.product.groupID);
      this.chooseCategory(this.product.category);
    });
  }
  //------------------------------ Load Product ---------------------------------//
  loadProduct() {
    if(this.productIn) this.product = JSON.parse(JSON.stringify(this.productIn));
  }

  //------------------------------ process the changes in form ------------------//
  chooseGroup(groupID:string) {
    if(groupID!=="") this.categories = this.productCategories.filter(ele => ele.groupId==groupID)[0].children;
    else {
      this.categories = null;
    }      
  }
  chooseCategory(category:string) {
    if(category!=="") this.brands = this.categories.filter(ele => ele.id==category)[0].brands;
    else {
      this.categories = null;
    }
  }
  // For description
  customTrackBy(index: number, obj: any): any {
    return index;
  }
  addDescription(){
    let len = this.product.description.length;
    this.product.description[len] = "";
  }
  deleteDescription(index:number) {
    if(this.product.description.length>1) this.product.description.splice(index,1);    
  }
  deleteImageURL(index:number) {
    if(this.product.imageURL.length>1) this.product.imageURL.splice(index,1);    
  }
  
  onFileName(event){
    var input = event.target.files[0].name;
    let result = ""
    for (let i=0; i<input.length; i++) {
      if (input[i] == '-') {
        result += '/';
      }
      else result += input[i];
    }
    console.log(result);
    this.bigImage = result;
    this.product.imageURL.push(this.bigImage);
  }
  submit(isSubmit:boolean) {
    if (isSubmit===true){
      this.submitProduct.emit(this.product);
    }
    else this.submitProduct.emit(false);
    
  }  
  resetForm() {
    this.loadProduct();
  }
  
}