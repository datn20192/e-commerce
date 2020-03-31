import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCategory } from '../models/productCategory.model';
import { ProductCategoryServiceAPI } from '../services/productCategory-api.service';

@Component({
  selector: 'app-sidebar-d',
  templateUrl: './sidebar-d.component.html',
  styleUrls: ['./sidebar-d.component.css']
})
export class SidebarDComponent implements OnInit {

  productCategoriesListSubs: Subscription;   

  // Product categories list
  productCategoriesGroupList: ProductCategory[];  // Categories list is grouped by categories group
  productCategoryList = [];     // All product categories

  constructor(
    private productCategoryApi: ProductCategoryServiceAPI      
  ) { }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    this.productCategoriesListSubs.unsubscribe();
  }


  load() {
    this.productCategoriesListSubs = this.productCategoryApi.getProductCategories().subscribe(res => {
      let result = JSON.parse(res);
      this.productCategoriesGroupList = result.data;                                
    },
      console.error,      
    );
  }  

}
