import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ItemCartService } from '../../../services/item-cart.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartComponent implements OnInit, OnDestroy {

  user: User;

  constructor(
    public icService: ItemCartService,
    private route: Router, 
    private authService: AuthService
  ) { }
 
  listItemSub: Subscription;
  
  ngOnInit() {
    this.load()
  }
  ngOnDestroy() {
    this.listItemSub.unsubscribe();
  }
  load(){
    this.authService.user$.subscribe(user => {
      this.user = user;
      this.listItemSub = this.icService.loadItemCart(user.uid).subscribe();
    });
  }


  proceedToCheckout() {            
    this.route.navigate(['/thanh-toan/dia-chi-giao-hang']);
  }
}

