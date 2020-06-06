import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { HomeApiService } from '../../../home/home.service';

// Model
import { CategoryChild } from '../../../../models/productCategory.model';
import { ItemCartService } from '../../../../services/item-cart.service';
import { AuthService } from '../../../../services/auth.service';
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
      private icService: ItemCartService, 
      private authService: AuthService
    ) { 
      this.authService.user$.subscribe(user => this.user=user);
    }
  
    ngOnInit() {      
      
      this.load();  
    }
  
    ngOnDestroy() {
      this.categoryListSubs.unsubscribe();
    }     
  
    load() {
      if(this.user) this.icService.loadItemCart(this.user.uid);               
      this.categoryListSubs = this.categoryService.getProductCategoriesNonGroup().subscribe(res => {
        let result = JSON.parse(res);
        this.productCategoryList = result.data.filter(category => category.quantity>0);        
      },
        console.error
      );         
    }

}