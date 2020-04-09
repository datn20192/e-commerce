import { Product } from './product.model';
import { UserInfor } from './user.model';

export class Bill {
    constructor(        
        public cart: Cart[],
        public userInfor: UserInfor,
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