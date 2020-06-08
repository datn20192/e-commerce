import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

import { Product } from '../../../../models/product.model';

import { ItemCartService } from '../../../../services/item-cart.service';
import { AuthService } from '../../../../services/auth.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  @Input() product: Product;

  @Output() onClose = new EventEmitter();  
  
  user: User;
  allowAddCart: boolean = false;

  constructor(
    private route: Router,
    private authService: AuthService,
    private icService: ItemCartService,  
  ) { }


  ngOnInit() {
    this.load();
  }

  load() {
    this.authService.user$.subscribe(user => {
      this.user=user;
      if(!this.authService.isShipper(user)) this.allowAddCart=true;
    });
  }

  closeModal(){
    if(this.authService.isLogin(this.user)===true) this.icService.addToCart(this.product, this.user.uid);
    else {      
      this.icService.setProductToLocalStorage(this.product);
      this.route.navigate(['/dangnhap-dangky']);  
    } 
    this.onClose.emit(null);
  }
}