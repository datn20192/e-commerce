import { Cart } from '../../models/cart.model';

export class CartFunction {
    static totalMoney(cart: Cart[]): number{
        return cart.reduce((prev, curr) => prev += Number(curr.product.price) * Number(curr.quantityPurchased), 0);
    }
}