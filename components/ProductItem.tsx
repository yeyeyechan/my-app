import Cart from '../model/cart';
import Product from '../model/product';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { licss, DynamicCss } from './ProductItemCss';
const divCss = css`
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  position: relative;
  width: 70%;
  background: #f5f7f6;
`;
const imgDiv = css`
  overflow: hidden;
  position: relative;
`;
const imgCss = css`
  opacity: 1 !important;
  height: auto;
  max-width: 100%;
  width: 100%;
  min-height: 1px;
  transition: opacity 0.2s ease-in-out;
  border: 0;
  vertical-align: top;
  border: 0;
  vertical-align: top;
`;
const contentCss = css`
  margin-top: 15px;
  margin-bottom: 14px;
  line-height: 16px;
  font-size: 12px;
  color: #5d5d5d;
  word-break: break-all;
`;
const ProductItem: React.FC<{
  product: Product;
  index: number;

  handleDeleteCart: (index: number) => void;
  handleAddCart: (ele: Cart, idx: number) => void;
}> = ({ index, product, handleAddCart, handleDeleteCart }) => {
  return (
    <>
      <DynamicCss idx={index}>
        <div css={divCss}>
          <div css={imgDiv}>
            <img css={imgCss} src={product.detail_image_url} />
          </div>
          <div css={contentCss}>
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
                  handleAddCart(cart, index);
                }}
              >
                장바구니담기
              </button>
            ) : (
              <button
                onClick={() => {
                  handleDeleteCart(index);
                }}
              >
                장바구니빼기
              </button>
            )}
          </div>
        </div>
      </DynamicCss>
    </>
  );
};
export default ProductItem;
