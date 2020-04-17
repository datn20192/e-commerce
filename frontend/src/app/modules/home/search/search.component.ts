import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../../../services/product-api.service';
import { Product } from '../../../models/product.model';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private productsListSubs: Subscription;

  private productsList: Product[];  
  private page:number = 0;
  private pages:number[];
  private totalElement: number;

  constructor(
    private pas: ProductsApiService,
    ) { }

  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {
    this.productsListSubs.unsubscribe();
  }
  setPage(i, event:any) {    
    event.preventDefault();
    this.page = i;
    this.load();    
  }

  scrollPageUp(event:any){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 22);
  }

  load(){
    this.productsListSubs = this.pas.searchedSubject.pipe(debounceTime(500)).subscribe(str => {
      this.pas.getProductByFilter(str, this.page, 12).subscribe(res => {      
      let result = JSON.parse(res);      
      this.productsList = result.data['content'];  
      this.pages = new Array(result.data['totalPages']);
      this.totalElement = result.data['totalElement'];
    },
      console.error
    );
    })
  }
}
