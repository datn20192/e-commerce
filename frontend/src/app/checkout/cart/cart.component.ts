import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ItemCartService } from '../../services/item-cart.service';
import { ProductProcessor } from '../../functions/product.function';
import { Cart } from '../../models/bill.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(
    private icService: ItemCartService,
    private route: Router
  ) { }
  productProcessor = new ProductProcessor();
  listItemSub: Subscription;
  
  ngOnInit() {
    this.load()
  }
  ngOnDestroy() {
    this.listItemSub.unsubscribe();
  }
  load(){
    this.listItemSub = this.icService.loadItemCart().subscribe();
  }


  proceedToCheckout() {            
    this.route.navigate(['/checkout/shipping']);
  }
}

