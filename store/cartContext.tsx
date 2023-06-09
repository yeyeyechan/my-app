import { createContext, useState } from 'react';
import { produce } from 'immer';
import Cart from '../model/cart';
import coupons from '../data/coupon';
import { CartList } from '../model/cart';
type cartObj = {
  cartList: CartList;
  setCarts: (cartList: CartList) => void;
};
export const CartContext = createContext<cartObj>({
  cartList: [],
  setCarts: () => {}
});

const CartContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [carts, setCarts] = useState<CartList>([]);
  const setCartsHandler = (carts: CartList) => {
    setCarts(carts);
  };
  const value = {
    cartList: carts,
    setCarts: setCartsHandler
  };
  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
};
export default CartContextProvider;
