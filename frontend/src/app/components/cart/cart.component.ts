import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { ItemCartService } from '../../services/item-cart.service';
import { Product } from '../../models/product.model';
import { ProductProcessor } from '../../functions/product.function';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartComponent implements OnInit, OnDestroy {
  totalPrice: any;
  nomalizedTotalPrice: string;
  loadItemSub: Subscription[] = [];
  onIncreaseQuantity: Subscription;
  constructor(
    private icService: ItemCartService
  ) { }
  productProcessor = new ProductProcessor();

  ngOnInit() {
    this.icService.loadItemCart();
    this.loadCart();
  }
  ngOnDestroy() {
    this.loadItemSub.forEach(sub => sub.unsubscribe());
  }


  loadCart(): void {
    this.loadItemSub.push(this.icService.loadItemCart().subscribe((
      res => {
        //Khi có add to cart thì show tổng tiền qua isEmpty
        if (res !== null) {
          this.totalPrice = res.reduce((prev, cur) => prev += Number(cur.price) * Number(cur.quantityPurchased), 0);
          this.nomalizedTotalPrice = this.productProcessor.nomalizeProductPrice(this.totalPrice.toString());
          if (res.length) this.icService.isEmpty = false;
          this.icService.lengthCart = res.reduce((prev, cur) => prev += cur.quantityPurchased, 0); // tong so san pham trong cart
        }
        else {
          this.icService.isEmpty = true;
        }
      }
    ))
    )
  }

  removeItem(product): void {
    this.icService.remove(product).subscribe((res) => {
      this.icService.listItemCart = res;
      localStorage.setItem('item', JSON.stringify(res));
      if (!res.length) this.icService.isEmpty = true;
      this.loadCart();
    })
  }

  onIncrease(product) {
    this.loadItemSub.push(this.icService.loadItemCart().subscribe(
      res => {
        res.forEach(element => {
          if (element.id["$oid"] === product.id["$oid"]) {
            element.quantityPurchased += 1;
            localStorage.removeItem('item');
            localStorage.setItem('item', JSON.stringify(res))
          }
        })
      })
    )
    this.loadCart();
  }

  onDecrease(product) {
    this.loadItemSub.push(this.icService.loadItemCart().subscribe(
      res => {
        res.forEach(element => {
          if (element.id["$oid"] === product.id["$oid"]) {
            if (element.quantityPurchased) {
              element.quantityPurchased -= 1;
              localStorage.removeItem('item');
              localStorage.setItem('item', JSON.stringify(res))
            }
          }
        })
      })
    )
    this.loadCart();
  }
}
