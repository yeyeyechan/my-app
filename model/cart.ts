import Product from './product';

interface Cart extends Product {
  count: number; //장바구니에 담긴갯수
  checked: boolean; //선택여부
  coupon: {
    type: string; //쿠폰타입
    title: string; // 쿠폰이름
    discountAmount: number; //할인금액
    discountRate: number; // 할인비율
  };
}
//쿠폰 배열 인터페이스
export interface CartList extends Array<Cart> {}

export default Cart;
