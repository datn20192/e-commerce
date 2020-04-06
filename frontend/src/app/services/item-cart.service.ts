import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs/';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ItemCartService {
  listItemCart = [];
  showItemCart = new Array();
  isEmpty: boolean = true;
  listAfterRemove = [];
  lengthCart: number = 0; //length cart
  quantityPurchased: number = 1; // quantity want to buy
  constructor() { }

  addToCart(product) {
    if (this.showItemCart === null) this.listItemCart = [];
    else this.listItemCart = this.showItemCart;
    if (!this.listItemCart.length) {
      product['quantityPurchased'] = this.quantityPurchased;
      this.listItemCart.push(product);
      localStorage.setItem('item', JSON.stringify(this.listItemCart));      
    }
    else {
      let count = 0;
      this.listItemCart.forEach(element => {
        if (element.id["$oid"] === product.id["$oid"]) {
          element.quantityPurchased += 1;
          localStorage.removeItem('item');
          localStorage.setItem('item', JSON.stringify(this.listItemCart));          
        }
        else {
          count += 1;
        }
        if (count == this.listItemCart.length) {
          product['quantityPurchased'] = this.quantityPurchased;
          this.listItemCart.push(product);
          localStorage.setItem('item', JSON.stringify(this.listItemCart));          
        }
      }
      );
    }
    this.isEmpty = false;
    this.lengthCart = this.listItemCart.reduce((prev, cur) => prev += cur.quantityPurchased, 0);
    this.loadItemCart();
  }

  loadItemCart(): Observable<any> {
    return of(this.showItemCart = JSON.parse(localStorage.getItem('item')));
  }

  remove(product): Observable<Product[]> {
    return of(this.listAfterRemove = this.showItemCart.filter(item => item.id["$oid"] !== product.id["$oid"]))
  }
}
