import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Product } from '../../../models/product.model';
import { ProductProcessor } from '../../../functions/product.function';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: Product;

  modalRef: BsModalRef;

  //------------- nomalized value for presentation -------------------//
  productProcessor = new ProductProcessor();
    // star
  nomalizedStars = {
    lightStars: [],
    darkStars: [],
  };  
    // price
  nomalizedPrice: string; 

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {  
    this.productProcessor.nomalizeStarRating(this.product.star, this.nomalizedStars.lightStars, this.nomalizedStars.darkStars);
    this.nomalizedPrice = this.productProcessor.nomalizeProductPrice(this.product.price);      
  } 

  // Modal for detail product
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, 
      {
        backdrop:'static', 
        class:'modal-xl',
        keyboard: true
      });    
  }  
  
}
