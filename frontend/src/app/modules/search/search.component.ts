import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { debounceTime } from 'rxjs/operators';
import { ProductsApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private productsListSubs: Subscription;

  private productsList: Product[];
  private page: number = 0;
  private pages: number[];
  private totalElement: number;
  private keyWordString: string;
  heading3: string;

  constructor(
    private share: SharedService,
    private productApiService: ProductsApiService
  ) { }

  ngOnInit() {
    this.load();
  }
  ngOndestroy() {
    this.productsListSubs.unsubscribe();
  }

  load() {
    this.productsListSubs = this.share.currentSearchedString.pipe(debounceTime(1000)).subscribe(str => {
      this.productApiService.getProductByFilter(str, this.page, 12).subscribe(res => {
        this.keyWordString = str;
        let result = JSON.parse(res);
        this.productsList = result.data['content'];
        this.pages = new Array(result.data['totalPages']);
        this.totalElement = result.data['totalElement'];
        this.heading3 = `Kết quả tìm kiếm cho '${this.keyWordString}': ${this.totalElement} kết quả`;
      },
        console.error
      );
    })
  }
  showCurrentPage(currentPage) {
    this.page = currentPage;
    this.load();
  }

}
