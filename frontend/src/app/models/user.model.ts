export class User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    cart: [];

    constructor() {
        this.uid = new Date().getTime().toString();
    }
}
