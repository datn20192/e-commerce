import { Product } from './product.model';
import { Customer } from './user.model';

export class Bill {
    constructor(        
        public cart: Cart[],
        public customer: Customer,
        public date: string,
        public totalMoney: number,
        public status: boolean,
        public typeOfPayment: string    
    ) { }
}

export class Cart {
    constructor(
        public product: Product,
        public quantity: number,        
    ) {}
}