import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Service
import { productCategoryServiceAPI } from '../../../services/productCategory-api.service';

// Model
import { CategoryChild } from '../../../models/productCategory.model';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {

  productCategoryList: CategoryChild[];
  categoryListSubs: Subscription;

  constructor(
    private categoryService: productCategoryServiceAPI
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
      this.productCategoryList = result.data;
      console.log(this.productCategoryList);
    });         
  }

}
