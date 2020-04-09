import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productPrice'})
export class ProductPrice implements PipeTransform {
  transform(price: string): string {
    let nomalizedPrice = '';
    for (let i = price.length; i>0; i=i-3) {
      let tripleNum = (i>2) ? price.substring(i-3, i) : price.substring(0,i);
      nomalizedPrice = (i!=price.length) ? (tripleNum + '.' + nomalizedPrice) : (tripleNum + nomalizedPrice);      
    }   
    return nomalizedPrice + 'đ';    
  }
}