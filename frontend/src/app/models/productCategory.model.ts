export class ProductCategory{
    constructor(
        public id: string,
        public name: string,
        public quantity: string,
        public url: string,
        public icon: string,
        public children: {
            
        }
    ){}
}