import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Product } from '../../../../models/product.model';
import { ViewChild , ViewChildren , QueryList , AfterViewInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { FeedbackService } from '../feedback/feedback.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  @Input() product: Product;

  modalRef: BsModalRef; 

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {  
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
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