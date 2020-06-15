import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs/';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from './auth.service';

import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ItemCartService {
  listItemCart = [];
  showItemCart = new Array();
  isEmpty: boolean = true;
  listAfterRemove = [];
  lengthCart: number = 0; //length cart  

  item: Cart = { product: null, quantityPurchased: 1 };

  constructor(
    private afs: AngularFirestore
  ) { }

  //----------------------- temporary product ------------------//
  setProductToLocalStorage(product: Product) {
    localStorage.setItem('tmpProduct', JSON.stringify(product));
  }

  addTmpProductToCart(uid: string) {
    let tmpProduct = localStorage.getItem('tmpProduct');  
    if(tmpProduct) {
      this.addToCart(JSON.parse(tmpProduct), uid);
      localStorage.removeItem('tmpProduct');
    }
    else return;
  }


  addToCart(product: Product, uid: string) {      
    this.listItemCart = this.showItemCart;
    if (!this.listItemCart.length) {
      this.item.quantityPurchased = 1;
      this.item.product = product;
      this.listItemCart.push(this.item);      
      // save items into cart
      this.addCart(this.listItemCart, uid);
    }
    else {
      let count = 0;
      this.listItemCart.forEach(
        element => {
              if (element.product.id === product.id) {
                element.quantityPurchased += 1;
                // save items into cart
                this.addCart(this.listItemCart, uid);
                } else {
                count += 1;
              }
            
            if (count == this.listItemCart.length) {
              //this.item.product = [];
              this.item.product = product;
              this.item.quantityPurchased = 1;
              this.listItemCart.push(this.item);
              // save items into cart
              this.addCart(this.listItemCart, uid);
              }
          })
      this.isEmpty = false;
      this.loadItemCart(uid);
    }
  }

  /* Adding cart depends on login status */
  private addCart(cart: any[], userUID: string) {
    if(userUID !== '') {
      const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userUID}`);
      cartRef.set({ 'cart': cart }, { merge: true });
    } 
  }

  loadItemCart(uid: string): Observable<any> {
    let cartRef: AngularFirestoreDocument<any>;  
    if (uid) {
      cartRef = this.afs.doc(`users/${uid}`);      
      return of(cartRef.snapshotChanges().subscribe(res => {
        if(res.payload.data().cart) {
          this.showItemCart = res.payload.data().cart;
          this.lengthCart = this.showItemCart.reduce((prev, curr) => prev += curr.quantityPurchased, 0);        
          this.isEmpty = (this.showItemCart.length) ? false : true;
        }        
        else {
          this.showItemCart = [];
          this.lengthCart = 0;
          this.isEmpty = false;
        }
      }))
    } else {
      return;
    }

  }

  remove(product, uid: string) {
    const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    this.listAfterRemove = this.showItemCart.filter(item => item.product.id !== product.id);
    cartRef.set({ "cart": this.listAfterRemove }, { merge: true });
    this.loadItemCart(uid);
  }

  onIncrease(product: Product, uid: string) {
    const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    this.listItemCart = this.showItemCart;
    this.listItemCart.forEach(element => {
      if (element.product.id === product.id) {
        element.quantityPurchased += 1;
        cartRef.set({ "cart": this.listItemCart }, { merge: true });
      }
    })
    this.loadItemCart(uid);
  }

  onDecrease(product: Product, uid: string) {
    const cartRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    this.listItemCart = this.showItemCart;
    this.listItemCart.forEach(element => {
      if (element.product.id === product.id) {
        if (element.quantityPurchased >1) {
          element.quantityPurchased --;
          cartRef.set({ "cart": this.listItemCart }, { merge: true });
        }
      }
    })
    this.loadItemCart(uid);
  }     
 
}
