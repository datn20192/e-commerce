export class ProductCategory{
    constructor(
        public groupId: string,       
        public name: string,
        public children: CategoryChild[]      
    ){}
}

export interface CategoryChild {
    id: string,
    name: string,
    quantity: string,
    url: string,
    icon: string
}
