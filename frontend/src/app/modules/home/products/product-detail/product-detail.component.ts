import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

import { Product } from '../../../../models/product.model';

import { ItemCartService } from '../../../../services/item-cart.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  @Input() product: Product;

  @Output() onClose = new EventEmitter();  
  
  constructor(
    private route: Router,
    private authService: AuthService,
    private icService: ItemCartService,  
  ) { }


  ngOnInit() {
    
  }

  closeModal(){
    this.icService.addToCart(this.product);
    if(this.authService.isLoggedIn===false) this.route.navigate(['/signin-signup']);      
    this.onClose.emit(null);
  }
}