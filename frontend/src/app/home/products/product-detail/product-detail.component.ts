import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

import { ItemCartService } from '../../../services/item-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  @Input() product: Product;

  @Output() onClose = new EventEmitter();  
  
  constructor(
    private icService: ItemCartService,
  
  ) { }


  ngOnInit() {
    
  }

  closeModal(){
    this.icService.addToCart(this.product);
    this.onClose.emit(null);
  }
}