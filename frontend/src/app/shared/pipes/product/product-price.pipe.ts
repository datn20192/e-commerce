import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

@Pipe({name: 'productPrice'})
export class ProductPrice implements PipeTransform {
  transform(price: string | number): string {
    let nomalizedPrice = '';
    let priceStr: string = price.toString();
    for (let i = priceStr.length; i>0; i=i-3) {
      let tripleNum = (i>2) ? priceStr.substring(i-3, i) : priceStr.substring(0,i);
      nomalizedPrice = (i!=priceStr.length) ? (tripleNum + '.' + nomalizedPrice) : (tripleNum + nomalizedPrice);      
    }   
    return nomalizedPrice + ' đ';    
  }
}