import { Component, OnInit } from '@angular/core';
import { ProductsApiService} from '../../services/product-api.service';
import { Product } from '../../models/product.model'
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productsListSubs: Subscription;
  productsListDetail: Product[];
  id;
  constructor(
    private route: ActivatedRoute,
    private productsApiService: ProductsApiService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
     this.id = params['id'];

      this.productsApiService.getProductByID(this.id).subscribe(res => {
        this.productsListDetail = res;
        console.log(this.productsListDetail)
      },
      console.error
      );
    }

  

    )}
  }