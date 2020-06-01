import { Component, TemplateRef, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-admin-card-product',
  templateUrl: './admin-card-product.component.html',
  styleUrls: ['./admin-card-product.component.css']
})
export class AdminCardProductComponent implements OnInit {

  @Input() product: Product;

  constructor( private router: Router
  ) { }

  ngOnInit() {  
    
  }   

  openDetails() {
    this.router.navigate(['/quan-ly/chi-tiet-san-pham', this.product.id]);
  }
  
}