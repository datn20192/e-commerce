import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.load();
  }

  // Product  
  listTitle: String;
  listContent: String;   
  

  load() {    
    this.listTitle = "Sản phẩm mới";
    this.listContent = "ALL";

    // Get product list
    
  }

}
