import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { HomeApiService } from '../home.service';

// Model
import { CategoryChild } from '../../models/productCategory.model';

@Component({
  selector: 'app-customers',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    productCategoryList: CategoryChild[];
    categoryListSubs: Subscription;
    
    constructor(
      private categoryService: HomeApiService
    ) { 
      
    }
  
    ngOnInit() {      
      this.load();  
    }
  
    ngOnDestroy() {
      this.categoryListSubs.unsubscribe();
    }     
  
    load() {               
      this.categoryListSubs = this.categoryService.getProductCategoriesNonGroup().subscribe(res => {
        let result = JSON.parse(res);
        this.productCategoryList = result.data.filter(category => category.quantity>0);        
      });         
    }

}