import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-admin-product-information',
  templateUrl: './admin-product-information.component.html'
})
export class AdminProductInformationComponent implements OnInit {
 
  @Input() product: Product;
  @Input() allowSet: boolean; 
  @Output() submitProduct = new EventEmitter();

  descriptionStr: string;
  
  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
    this.descriptionStr =  this.convertDescriptionToString(this.product.description);
  }

  onSubmit() {
    this.submitProduct.emit(null);
  }

  convertDescriptionToString(descriptionArr:string[]):string{
    let result:string ='';
    descriptionArr.forEach((item, key)=>{
      result = (key==descriptionArr.length-1) ? (result+item) : (result+item+'\n');
    })
    return result;
  }
  
}