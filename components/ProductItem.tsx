import Cart from '../model/cart';
import Product from '../model/product';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const licss = css`
  width: 50%;
`;
const DynamicCss = styled.li<{ idx: number }>`
  display: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? 'table' : '')};
  width: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? '' : '50%')};
  margin-left: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? 'auto' : '')};
  margin-right: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? 'auto' : '')};
`;

const ProductItem: React.FC<{
  product: Product;
  index: number;

  handleDeleteCart: (item_no: number, index: number) => void;
  handleClick: (ele: Cart, idx: number) => void;
}> = ({ index, product, handleClick, handleDeleteCart }) => {
  console.log(index);
  return (
    <DynamicCss idx={index}>
      <img src={product.detail_image_url} />
      <div>
        <div>{product.item_name}</div>
        <div>
          <span>{product.price}</span>
          <span>원</span>
        </div>
      </div>
      <div>
        {!product.cart ? (
          <button
            onClick={() => {
              let cart = {
                ...product,
                checked: false,
                count: 0,
                coupon: { type: '', title: '', discountRate: 0, discountAmount: 0 }
              };
              handleClick(cart, index);
              //setIsShow(true);
            }}
          >
            장바구니담기
          </button>
        ) : (
          <button
            onClick={() => {
              handleDeleteCart(product.item_no, index);
              //setIsShow(true);
            }}
          >
            장바구니빼기
          </button>
        )}
      </div>
    </DynamicCss>
  );
};
export default ProductItem;
