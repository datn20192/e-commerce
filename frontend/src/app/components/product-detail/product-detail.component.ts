import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

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
  
  ) { }


  ngOnInit() {
    console.log(this.product.imageURL);
  }

  closeModal(){
    this.onClose.emit(null);
  }
}