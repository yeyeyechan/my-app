import Cart from '../model/cart';
import Product from '../model/product';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  licss,
  DynamicCss,
  divCss,
  imgCss,
  imgDiv,
  contentCss,
  ButtonImgCSS
} from './productItemcss';

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
              <span>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
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
                <ButtonImgCSS cart={'plus'}></ButtonImgCSS>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleDeleteCart(index);
                }}
              >
                <ButtonImgCSS cart={'minus'}></ButtonImgCSS>
              </button>
            )}
          </div>
        </div>
      </DynamicCss>
    </>
  );
};
export default ProductItem;
