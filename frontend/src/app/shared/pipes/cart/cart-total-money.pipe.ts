import { Pipe, PipeTransform } from '@angular/core';

import { Cart } from '../../../models/cart.model';

@Pipe({name: 'cartTotalMoney'})
export class CartTotalMoney implements PipeTransform {
  transform(cart: Cart[]): string {
    return cart.reduce((prev, curr) => prev += Number(curr.product.price) * Number(curr.quantityPurchased), 0).toString();    
  }
}
