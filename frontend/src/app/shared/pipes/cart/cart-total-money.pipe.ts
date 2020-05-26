import { Pipe, PipeTransform } from '@angular/core';

import { Cart } from '../../../models/cart.model';
import { CartFunction } from '../../functions/cart.function';

@Pipe({name: 'cartTotalMoney'})
export class CartTotalMoney implements PipeTransform {
  transform(cart: Cart[]): string {
    return CartFunction.totalMoney(cart).toString();    
  }
}
