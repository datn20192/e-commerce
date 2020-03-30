import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductCategoryServiceAPI } from '../../services/productCategory-api.service';

// Model
import { CategoryChild } from '../../models/productCategory.model';

@Component({
  selector: 'app-group-products',
  templateUrl: './group-products.component.html',
  styleUrls: ['./group-products.component.css']
})
export class GroupProductsComponent implements OnInit {

  private productCategoryList: CategoryChild[];
  private categoryListSubs: Subscription;
  
  private url:string = '';
  private category = {};  

  private showList: boolean = false;

  constructor(    
    private router: Router,
    private categoryApi: ProductCategoryServiceAPI
  ) { }

  ngOnInit() {       
    this.load();    
  }

  ngOnDestroy() {
    this.categoryListSubs.unsubscribe();
  }

  load() {    
    // get category from url
    this.url = this.router.url;
    console.log(this.url);
    this.categoryListSubs = this.categoryApi.getProductCategoriesNonGroup().subscribe(res => {
      let result = JSON.parse(res);
      this.productCategoryList = result.data;      
      this.category = this.productCategoryList.filter(element => element.url===this.url)[0];
      this.showList = true;      
    },
      console.error
    );
  }

}
