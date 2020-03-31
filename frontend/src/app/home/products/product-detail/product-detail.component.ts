import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ItemCartService } from '../../../services/item-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() stars: {};
  @Input() price: string;
  @Input() product: Product;

  @Output() onClose = new EventEmitter();  
  
  constructor(
    private icService: ItemCartService,
  
  ) { }


  ngOnInit() {
    localStorage.setItem('item',' ');
  }

  closeModal(){
    
    this.icService.addToCart(this.product);
    this.icService.loadItemCart();
    this.onClose.emit(null);
  }
}