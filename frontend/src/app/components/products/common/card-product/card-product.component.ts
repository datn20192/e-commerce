import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductProcessor } from '../../../../functions/product.function';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: Product;

  //------------- nomalized value for presentation -------------------//
  productProcessor = new ProductProcessor();
    // star
  lightStars = [];
  darkStars = [];
    // price
  nomalizedPrice: string; 

  constructor() { }

  ngOnInit() {  
    this.productProcessor.nomalizeStarRating(this.product.star, this.lightStars, this.darkStars);
    this.nomalizedPrice = this.productProcessor.nomalizeProductPrice(this.product.price);      
  } 
  
}
