
export class ProductProcessor {    

    constructor() {       

    }

    nomalizeStarRating(star:string, lightStars:string[], darkStars:string[]) {        
        let starNum = parseInt(star);
        for (let index = 0; index < starNum; index++) {
          lightStars.push('s');      
        }
        for (let index = 0; index < 5-starNum; index++) {
          darkStars.push('s');
        }
    }

    nomalizeProductPrice(price:string) {
        let nomalizedPrice = '';
        for (let i = price.length; i>0; i=i-3) {
          let tripleNum = (i>2) ? price.substring(i-3, i) : price.substring(0,i);
          nomalizedPrice = (i!=price.length) ? (tripleNum + '.' + nomalizedPrice) : (tripleNum + nomalizedPrice);      
        }   
        return nomalizedPrice;     
    }
}