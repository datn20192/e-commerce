import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { HomeApiService } from '../../../home/home.service';

// Model
import { CategoryChild } from '../../../../models/productCategory.model';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-admin-home-product',
  templateUrl: './admin-product-list.component.html'
})
export class AdminProductListComponent {

    user: User;
    productCategoryList: CategoryChild[];
    categoryListSubs: Subscription;
    
    constructor(
      private categoryService: HomeApiService,
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
      },
        console.error
      );         
    }

}