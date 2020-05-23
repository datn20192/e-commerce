import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs/';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { Cart } from '../models/cart.model';
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
  //quantityPurchased: number = 1; // quantity want to buy 
  
  private userUID: string = '';     // Save uid of user in local storage

  item: Cart = { product: null, quantityPurchased: 1 };

  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
  ) { }

  //----------------------- temporary product ------------------//
  setProductToLocalStorage(product: Product) {
    localStorage.setItem('tmpProduct', JSON.stringify(product));
  }

  addTmpProductToCart() {
    let tmpProduct = localStorage.getItem('tmpProduct');  
    if(tmpProduct) {
      this.addToCart(JSON.parse(tmpProduct));
      localStorage.removeItem('tmpProduct');
    }
    else return;
  }


  addToCart(product) {        
    this.listItemCart = this.showItemCart;
    if (!this.listItemCart.length) {
      this.item.quantityPurchased = 1;
      this.item.product = product;
      this.listItemCart.push(this.item);

      // save items into cart
      this.addCart(this.listItemCart, this.userUID);
    }
    else {
      let count = 0;
      this.listItemCart.forEach(
        element => {
              if (element.product.id["$oid"] === product.id["$oid"]) {
                element.quantityPurchased += 1;
                // save items into cart
                this.addCart(this.listItemCart, this.userUID);
                } else {
                count += 1;
              }
            
            if (count == this.listItemCart.length) {
              //this.item.product = [];
              this.item.product = product;
              this.item.quantityPurchased = 1;
              this.listItemCart.push(this.item);
              // save items into cart
              this.addCart(this.listItemCart, this.userUID);
              }
          })
      this.isEmpty = false;
      this.loadItemCart();
    }
  }

  /* Adding cart depends on login status */
  private addCart(cart: any[], userUID: string) {
    if(userUID !== '') {
      const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userUID}`);
      cartRef.set({ 'cart': cart }, { merge: true });
    } 
  }

  loadItemCart(): Observable<any> {
    let cartRef: AngularFirestoreDocument<any>;
    this.userUID = JSON.parse(localStorage.getItem('user')).uid;
    if (this.userUID !== '') {
      cartRef = this.afs.doc(`users/${this.userUID}`);      
      return of(cartRef.snapshotChanges().subscribe(res => {
        this.showItemCart = res.payload.data().cart;
        this.lengthCart = this.showItemCart.reduce((prev, curr) => prev += curr.quantityPurchased, 0);        
        this.isEmpty = (this.showItemCart.length) ? false : true;        
      }))
    } else {
      return;
    }
  }

  remove(product) {
    const userUID = JSON.parse(localStorage.getItem('user'));
    const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userUID.uid}`);
    this.listAfterRemove = this.showItemCart.filter(item => item.product.id["$oid"] !== product.id["$oid"]);
    cartRef.set({ "cart": this.listAfterRemove }, { merge: true });
    this.loadItemCart();
  }

  onIncrease(product) {
    const userUID = JSON.parse(localStorage.getItem('user')).uid;
    const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userUID}`);
    this.listItemCart = this.showItemCart;
    this.listItemCart.forEach(element => {
      if (element.product.id["$oid"] === product.id["$oid"]) {
        element.quantityPurchased += 1;
        cartRef.set({ "cart": this.listItemCart }, { merge: true });
      }
    })
    this.loadItemCart();
  }

  onDecrease(product) {
    const userUID = JSON.parse(localStorage.getItem('user')).uid;
    const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userUID}`);
    this.listItemCart = this.showItemCart;
    this.listItemCart.forEach(element => {
      if (element.product.id["$oid"] === product.id["$oid"]) {
        if (element.quantityPurchased) {
          element.quantityPurchased -= 1;
          cartRef.set({ "cart": this.listItemCart }, { merge: true });
        }
      }
    })
    this.loadItemCart();
  }   
 
}
