/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useContext, useEffect } from 'react';
import Cart from '../model/cart';
import { UiContext } from '../store/uiContext';
import {
  tableWrap,
  table,
  tableCell,
  productDetail,
  buttonCss,
  buttonTableCell,
  middelCountButton,
  rightCountButton,
  leftCountButton,
  buttonWrap
} from './CartItemCss';
const CartItem: React.FC<{
  idx: number;
  cart: Cart;
  onClickDelete: (idx: number) => void;
  onCickCheckBox: (idx: number) => void;
  onClickCount: (idx: number, type: string, count: number) => void;
  clickSelect: (productIdx: number) => void;
  selectItem: React.ReactElement;
}> = ({ idx, cart, onClickDelete, onCickCheckBox, onClickCount, clickSelect, selectItem }) => {
  const { select, setSelect } = useContext(UiContext);

  return (
    <div css={tableWrap}>
      <div css={table}>
        <div css={[tableCell, { width: '4.3%' }]}>
          <span>
            <input
              type="checkbox"
              onClick={() => {
                onCickCheckBox(idx);
              }}
              checked={cart.checked}
              readOnly
            />
          </span>
        </div>
        <div css={[productDetail]}>
          <div css={{ display: 'flex', boxSizing: 'border-box' }}>
            <a>
              <img
                css={{
                  margin: '3px 25px 0px 0px',
                  width: 110,
                  height: 110,
                  objectFit: 'cover'
                }}
                src={cart.detail_image_url}
              />
            </a>
            <div>
              <div>{cart.item_name}</div>
              <div>{cart.price}</div>
            </div>
          </div>
          <button
            css={buttonCss}
            onClick={() => {
              onClickDelete(idx);
            }}
          >
            삭제
          </button>
        </div>
        <div css={[buttonTableCell]}>
          <div css={{ display: 'inline-block', width: '108px', boxSizing: 'border-box' }}>
            <div css={buttonWrap}>
              <button
                css={leftCountButton}
                onClick={() => {
                  onClickCount(idx, '-', cart.count);
                }}
              >
                {'-'}
              </button>
              <input
                css={middelCountButton}
                type="text"
                inputMode="numeric"
                value={cart.count}
                readOnly
              />
              <button
                css={rightCountButton}
                onClick={() => {
                  onClickCount(idx, '+', cart.count);
                }}
              >
                {'+'}
              </button>
            </div>
          </div>
        </div>
        <div
          css={[
            tableCell,
            {
              width: 200,
              borderColor: 'rgb(228, 228, 228)',
              borderImage: 'initial',
              borderWidth: '1px 1px 0px'
            }
          ]}
        >
          <div>
            <span>{cart.price * cart.count}</span>원
          </div>
        </div>
        {/*<div css={[tableCell, { width: '15%', borderLeft: ' 1px solid rgb(228, 228, 228)' }]}>
          <div css={divWrap}>
            <div css={divInner}>
              <div role="button" css={couponButton}>
                <input
                  placeholder={
                    cart.coupon.title
                      ? cart.coupon.title
                      : cart.availableCoupon
                      ? '사용 가능한 쿠폰 2개'
                      : '사용 가능 쿠폰 없음'
                  }
                  type="text"
                  value=""
                  css={inputCss}
                  onClick={() => {
                    clickSelect(cart.idx);
                  }}
                  readOnly
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 16" css={svgCss}>
                  <g fill="none" fillRule="evenodd" stroke="rgb(212, 212, 212)" strokeWidth="3">
                    <path d="M28 1L13.97 15 0 1.058"></path>
                  </g>
                </svg>
              </div>
              {selectItem}{' '}
            </div>
          </div>
                </div>{' '}*/}
      </div>
    </div>
  );
};
export default CartItem;
