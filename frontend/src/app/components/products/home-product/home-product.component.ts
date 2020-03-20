import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  constructor(
    
    ) { }

  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {

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
