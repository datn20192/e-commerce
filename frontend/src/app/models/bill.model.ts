import { Product } from './product.model';

// export class Bill {
//     constructor(        
//         public cart: Cart[],
//         public infor: {},
//         public date: Date,
//         public totalMoney: number,
//         public status: boolean,
//         public typeOfPayment: string    
//     ) { }
// }

export interface Bill {
    cart: Cart[];
    infor: {};
    date: string;
    totalMoney: number;
    status: boolean;
    typeOfPayment: string;
}

export class Cart {
    constructor(
        public product: Product,
        public quantityPurchased: number,        
    ) {}
}

export class Card {
    constructor(
        public name: string,
        public cardNumber: string,
        public validThru: string,
        public securityCode: string
    ) {}
}

export class TypeOfPayment {
    constructor(
        public value: string,
        public name: string
    ) {}
}

export interface Customer{
    uid: string;
    email: string;
    bill: Bill;
    
}