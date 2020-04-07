export class Product {
    constructor(
        public id: object,
        public groupID: string,
        public groupName: string,
        public category: string,
        public name: string,
        public link: string,
        public brand: string,
        public imageURL: string[],
        public price: string,            
        public description: string[],
        public quantity: string,  
        public star: string
    ){}
}