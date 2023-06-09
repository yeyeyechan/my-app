import Product from './product';

interface Cart extends Product {
  count: number;
  checked: boolean;
  coupon: {
    type: string;
    title: string;
    discountAmount: number;
    discountRate: number;
  };
}
export interface CartList extends Array<Cart> {}

export default Cart;
