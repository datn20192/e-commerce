import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsApiService } from '../../../../services/product-api.service';
import { Product } from '../../../../models/product.model';

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
    private productApi : ProductsApiService
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
