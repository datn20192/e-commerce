export class Product {
    constructor(
        public product_id: number,
        public name: string,
        public price: number,
        public category: string,
        public description: string,
        public imageURL: string
    ){}
}