import { Cart } from './cart.model';

export interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    emailVerified: boolean;
    roles: Roles;
    cart?: Cart[];
    infor?: UserInfor;    
}

export interface UserInfor  {         
    name: string;
    phoneNumber: string;
    address: Address;
}

export interface Address {
    province: string;
    district: string;
    subDistrict: string;
    details: string;
}

export interface Roles {
    customer?: boolean;
    admin?: boolean;
}
