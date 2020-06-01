import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeApiService } from '../home.service';

// Model
import { CategoryChild } from '../../../models/productCategory.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-group-products',
  templateUrl: './group-products.component.html',
  styleUrls: ['./group-products.component.css']
})
export class GroupProductsComponent implements OnInit {

  private productCategoryList: CategoryChild[];
  private categoryListSubs: Subscription;
  private categoryListPageSubs: Subscription;
  
  private url:string = '';
  public category:CategoryChild;  
  quantity: number;

  /* product list for current page */
  private page:number = 0;    // show automatically products list in page 0
  private productsList: Product[];       // products in current page
  private pages: number[];    // total page with specific category selected      


  public showList: boolean = false;

  constructor(    
    private router: Router,
    private categoryApi: HomeApiService
  ) { }

  ngOnInit() {       
    this.load();    
  }

  ngOnDestroy() {
    this.categoryListSubs.unsubscribe();
    this.categoryListPageSubs.unsubscribe();
  }

  load() {    
    // get category from url
    this.url = this.router.url;
    this.categoryListSubs = this.categoryApi.getProductCategoriesNonGroup().subscribe(res => {
      let result = JSON.parse(res);
      this.productCategoryList = result.data;      
      this.category = this.productCategoryList.filter(element => element.url===this.url)[0];   
      this.categoryListPageSubs = this.categoryApi.getProductByCategoryPage(this.category.id, this.page, 12).subscribe(res => {      
        let result = JSON.parse(res);
        this.quantity = result.data['totalElement'];
        this.productsList = result.data['content'];     
        this.pages = new Array(result.data['totalPages']);   
        this.showList = true;    
      },
        console.error
      );
    },
      console.error
    );
  }

  showCurrentPage(currentPage) {
    this.categoryListPageSubs = this.categoryApi.getProductByCategoryPage(this.category.id, currentPage, 12).subscribe(res => {
      let result = JSON.parse(res);      
      this.productsList = result.data['content'];     
      this.pages = new Array(result.data['totalPages']);
      this.page = currentPage;
    },
      console.error
    );
  }

}