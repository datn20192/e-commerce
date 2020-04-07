import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs/';
import { Product } from '../models/product.model';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { compileInjectable } from '@angular/compiler';
import { User } from '../models/user.model';
import { ProductProcessor } from '../functions/product.function';
import { Cart } from '../models/cart.model';

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
  totalPrice: any; // total price
  nomalizedTotalPrice: string;// total price had converted VND


  productProcessor = new ProductProcessor(); // call function convert price

  item: Cart = { product: null, quantityPurchased: 1 };
  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase,
  ) { }

  addToCart(product) {
    const userUID = JSON.parse(localStorage.getItem('user')).uid;
    const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userUID}`);
    this.listItemCart = this.showItemCart;
    if (!this.listItemCart.length) {
      this.item.quantityPurchased = 1;
      this.item.product = product;
      this.listItemCart.push(this.item);
      cartRef.set({ "cart": this.listItemCart }, { merge: true });
      console.log("Buoc 1");
    }
    else {
      let count = 0;
      this.listItemCart.forEach(
        element => {
              if (element.product.id["$oid"] === product.id["$oid"]) {
                element.quantityPurchased += 1;
                console.log(this.listItemCart)
                cartRef.set({ "cart": this.listItemCart }, { merge: true });
                console.log("Buoc 2");
              } else {
                count += 1;
              }
            
            if (count == this.listItemCart.length) {
              //this.item.product = [];
              this.item.product = product;
              this.item.quantityPurchased = 1;
              this.listItemCart.push(this.item);
              cartRef.set({ "cart": this.listItemCart }, { merge: true });
              console.log("Buoc 3")
            }
          })
      this.isEmpty = false;
      this.loadItemCart();
    }
  }

  loadItemCart(): Observable<any> {
    let cartRef: AngularFirestoreDocument<any>;
    const userUID = JSON.parse(localStorage.getItem('user')).uid;
    if (userUID !== '') {
      cartRef = this.afs.doc(`users/${userUID}`);
      return of(cartRef.snapshotChanges().subscribe(res => {
        this.showItemCart = res.payload.data().cart;
        this.lengthCart = this.showItemCart.reduce((prev, curr) => prev += curr.quantityPurchased, 0);
        this.totalPrice = this.showItemCart.reduce((prev, curr) => prev += Number(curr.product.price) * Number(curr.quantityPurchased), 0);
        this.nomalizedTotalPrice = this.productProcessor.nomalizeProductPrice(this.totalPrice.toString());
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
