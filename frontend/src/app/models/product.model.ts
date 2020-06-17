export interface Product {    
    id: string;
    groupID: string;
    groupName: string;
    category: string;
    name: string;
    link: string;
    brand: string;
    imageURL: string[];
    price: string;            
    description: string[];
    quantity: number; 
    star: number;   
    soldNumber?: number; 
}