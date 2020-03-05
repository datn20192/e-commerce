export class Product {
    constructor(
        public product_id: string,
        public name: string,
        public price: string,
        public category: string,
        public description: string,
        public imageURL: string
    ){}
}