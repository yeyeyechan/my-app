import Cart from '../model/cart';
import Product from '../model/product';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { licss, DynamicCss, divCss, imgCss, imgDiv, contentCss } from './productItemcss';

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
