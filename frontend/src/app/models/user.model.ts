export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    cart: [];
    infor: UserInfor;

    constructor() {
        this.uid = new Date().getTime().toString();
    }
}

export class UserInfor  {
    constructor(               
        public name: string,
        public phoneNumber: string,
        public address: Address
    ) {}
}

export class Address {
    constructor(
        public province: string,
        public district: string,
        public subDistrict: string,
        public details: string
    ) {}
}
