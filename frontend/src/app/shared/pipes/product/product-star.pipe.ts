import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productStar'})
export class ProductStar implements PipeTransform {
  transform(star: number, lightStar?: boolean): Array<string> {
    let starNum = Math.round(star);
    let stars: string[] = [];
    if(lightStar === true) {       
        for (let index = 0; index < starNum; index++) {
            stars.push('s');      
        }        
    }
    else {
        for (let index = 0; index < 5-starNum; index++) {
            stars.push('s');
        }
    }
    
    return stars;
  }
}