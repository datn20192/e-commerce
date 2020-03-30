import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeApiService } from '../../home.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-list-product-grid',
  templateUrl: './list-product-grid.component.html',
  styleUrls: ['./list-product-grid.component.css']
})
export class ListProductGridComponent implements OnInit {
  
  @Input() category: string; 

  private productsListSubs: Subscription;

  private productsList: Product[];  
  private page:number = 0;
  private pages:number[]; 

  constructor(
    private productApi : HomeApiService
  ) { }

  ngOnInit() {        
    this.load();
  }

  ngOndestroy() {
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

  load() {    
    this.productsListSubs = this.productApi.getProductByCategoryPage(this.category, this.page, 12).subscribe(res => {      
      let result = JSON.parse(res);      
      this.productsList = result.data['content'];      
      this.pages = new Array(result.data['totalPages']);     
    },
      console.error
    );
  }

}
