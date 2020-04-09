import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ItemCartService } from '../../services/item-cart.service';

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

