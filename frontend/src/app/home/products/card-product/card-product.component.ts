import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: Product;

  modalRef: BsModalRef; 

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {  
    
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