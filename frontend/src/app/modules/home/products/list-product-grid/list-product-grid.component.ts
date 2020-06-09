import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-list-product-grid',
  templateUrl: './list-product-grid.component.html',
  styleUrls: ['./list-product-grid.component.css']
})
export class ListProductGridComponent implements OnInit {
  
  @Input() productsList: Product[]; 
  @Input() pages: number[];
  @Input() currentPage: number;
  @Input() modal: boolean;

  @Output() selectedPage = new EventEmitter();
  
  constructor(
  ) { }

  ngOnInit() {            
    
  }

  ngOndestroy() {
  }

  setPage(i, event:any) {    
    event.preventDefault();
    this.selectedPage.emit(i);    
  }

  scrollPageUp(event:any){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 22);
  }  

}