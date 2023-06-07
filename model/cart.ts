import Product from './product';

interface Cart extends Product {
  count: number;
  coupon: {
    type: string;
    title: string;
    discountAmount: number;
    discountRate: number;
  };
}
export default Cart;
