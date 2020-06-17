import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { ProductCategory, CategoryChild } from '../../../../models/productCategory.model';
import { ProductCategoryServiceAPI } from '../../../../services/productCategory-api.service';

// Model
import { User } from '../../../../models/user.model';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-admin-adding-product',
  templateUrl: './admin-adding-product.component.html'
})
export class AdminAddingProductComponent {

    productCategorySubs: Subscription;
      
    productCategories: ProductCategory[];
    categories: CategoryChild[];
    brands: string[];
    product: Product = {
      groupID: "",
      groupName: "",
      category: "",
      name: "",
      link: "",
      brand: "",
      imageURL: [],
      price: "",            
      description: [],
      quantity: 1, 
      star: 0,   
      soldNumber: 0,
    };
    
    constructor(
      private productCategoryApi: ProductCategoryServiceAPI
    ) { }
  
    ngOnInit() {            
      this.load();  
    }
  
    ngOnDestroy() {
      this.productCategorySubs.unsubscribe();
    }     
  
    load() {            
      this.productCategorySubs = this.productCategoryApi.getProductCategories().subscribe(res => {
        let result = JSON.parse(res);
        this.productCategories = result.data;
        this.chooseGroup(this.product.groupID);
        this.chooseCategory(this.product.category);
      });
    }

    submit() {
      console.log(this.product);
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

}