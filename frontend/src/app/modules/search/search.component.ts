import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { ProductsApiService } from '../../services/product-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  private productsListSubs: Subscription;

  private productsList: Product[];
  private page: number = 0;
  private pages: number[];
  private totalElement: number;
  private keyWordString: string;
  private modal: boolean;
  heading3: string;

  constructor(
    private share: SharedService,
    private productApiService: ProductsApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.load();
  }
  ngOndestroy() {
    this.productsListSubs.unsubscribe();
  }

  load() {
    this.authService.user$.subscribe(user => {
      this.modal = (user.roles.admin) ? false : true;
    });
    this.productsListSubs = this.share.currentSearchedString.subscribe(str => {
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
