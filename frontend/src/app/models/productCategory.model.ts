// export class ProductCategory{
//     constructor(
//         public id: string,
//         public group: string,
//         public name: string,
//         public quantity: string,
//         public url: string,
//         public icon: string        
//     ){}
// }

export class ProductCategory{
    constructor(
        public groupId: string,       
        public name: string,
        public children: []      
    ){}
}
