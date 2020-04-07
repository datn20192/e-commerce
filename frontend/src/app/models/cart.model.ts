import { Product } from './product.model';
export class Cart{
    constructor(
        public product: Product,
        public quantityPurchased: number
    ){
        this.quantityPurchased = 1;
    }
}