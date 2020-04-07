import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { ItemCartService } from '../../services/item-cart.service';
import { ProductProcessor } from '../../functions/product.function';
import { Subscription } from 'rxjs';

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
    private icService: ItemCartService
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
}