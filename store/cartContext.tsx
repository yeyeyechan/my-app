import { createContext, useState } from 'react';
import { produce } from 'immer';
import Cart from '../model/cart';
import coupons from '../data/coupon';
interface CartList extends Array<Cart> {}

type cartObj = {
  cartList: CartList;
  setCarts: (cart: Cart) => void;
};
export const CartContext = createContext<cartObj>({
  cartList: [],
  setCarts: () => {}
});

const CartContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [carts, setCarts] = useState<CartList>([]);
  const setCartsHandler = (cart: Cart) => {
    setCarts(
      produce((draft) => {
        let findIndex = draft.findIndex((ele) => ele.item_no === cart.item_no);
        if (findIndex === -1) draft.concat(cart);
        else {
          draft[findIndex].count = cart.count;
          draft[findIndex].coupon = cart.coupon;
        }
      })
    );
  };
  const value = {
    cartList: carts,
    setCarts: setCartsHandler
  };
  return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>;
};
export default CartContextProvider;
