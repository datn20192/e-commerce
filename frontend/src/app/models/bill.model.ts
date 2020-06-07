import { Product } from './product.model';

export interface Bill {
    id?: string,
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
    bill: Bill | Bill[];
    
}