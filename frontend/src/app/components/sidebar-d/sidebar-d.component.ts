import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCategory } from '../../models/productCategory.model';
import { productCategoryServiceAPI } from '../../services/productCategory-api.service';

@Component({
  selector: 'app-sidebar-d',
  templateUrl: './sidebar-d.component.html',
  styleUrls: ['./sidebar-d.component.css']
})
export class SidebarDComponent implements OnInit {

  constructor(
    private productCategoryApi: productCategoryServiceAPI
  ) { }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    this.productCategoriesListSubs.unsubscribe();
  }

  productCategoriesListSubs: Subscription;

  // product categories list
  productCategoriesList: ProductCategory[];  

  icon = "fa-mobile";

  load(){
    this.productCategoriesListSubs = this.productCategoryApi.getProductCategories().subscribe(res => {
      let result = JSON.parse(res);
      this.productCategoriesList = result.data;      
      console.log(this.productCategoriesList[0].children);
    },
      console.error,      
    );
  }

}
