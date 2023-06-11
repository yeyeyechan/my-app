/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useContext, useEffect } from 'react';
import { CartContext } from '../store/cartContext';
import Cart from '../model/cart';
import Select from './ui/Select';
import { UiContext } from '../store/uiContext';
import Coupon from '../model/coupon';
const buttonCss = css`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 25px;
  display: block;
  overflow: hidden;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  min-width: initial;
  background: url(//img.29cm.co.kr/next29cm/order/icon-remove.png) 0px 0px / 24px 24px no-repeat;
  line-height: 100em;
`;
const tableWrap = css`
  position: relative;
  box-sizing: border-box;
`;
const table = css`
  position: relative;
  display: table;
  width: 100%;
  table-layout: fixed;
  box-sizing: border-box;
`;
const couponCell = css`
  position: absolute;
  padding: 0px 10px;
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  -webkit-box-pack: center;
  top: 1px;
  right: 1px;
  bottom: 0px;
  width: 15%;
  z-index: 5;
  border-left: 1px solid rgb(228, 228, 228);
  background: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 600;
  color: rgb(0, 0, 0);
`;
const tableCell = css`
  display: table-cell;
  padding: 30px 0px;
  border-top: 1px solid rgb(228, 228, 228);
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: middle;
`;

const buttonTableCell = css`
  display: table-cell;
  padding: 30px 0px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: middle;
  width: 200px;
  border-style: solid;
  border-color: rgb(228, 228, 228);
  border-image: initial;
  border-width: 1px 1px 0px;
  box-sizing: border-box;
`;
const productDetail = css`
  display: table-cell;
  border-top: 1px solid rgb(228, 228, 228);
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  vertical-align: middle;
  position: relative;
  padding: 27px 60px 30px 0px;
  text-align: left;
  box-sizing: border-box;
`;
const rightCountButton = css`
  isplay: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 25px;
  width: 36px;
  height: 36px;
  min-width: initial;
  border-width: 1px 1px 1px 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-bottom-color: rgb(228, 228, 228);
  border-image: initial;
  border-radius: 0px;
  background: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 400;
  color: rgb(160, 160, 160);
  border-left-style: initial;
  border-left-color: initial;
  box-sizing: border-box;
`;
const middelCountButton = css`
  display: block;
  color: rgb(26, 26, 26);
  outline: none;
  margin: 0px;
  padding: 0px;
  width: 37px;
  height: 36px;
  border: 1px solid rgb(228, 228, 228);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;
const leftCountButton = css`
  box-sizing: border-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-height: 25px;
  width: 36px;
  height: 36px;
  min-width: initial;
  border-width: 1px 0px 1px 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: rgb(228, 228, 228);
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-image: initial;
  border-radius: 0px;
  background: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 400;
  color: rgb(160, 160, 160);
  border-right-style: initial;
  border-right-color: initial;
`;
const buttonWrap = css`display: flex;',ont-size: 18px;
line-height: 24px;
color: rgb(0, 0, 0);
text-align: center;`;
const divWrap = css`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
`;
const divInner = css`
  position: relative;
  width: 100%;
`;
const couponButton = css`
  position: relative;
`;
const inputCss = css`
  border: 1px solid rgb(228, 228, 228);
  display: block;
  width: 100%;
  outline: none;
  height: 42px;
  padding: 0px 30px 0px 14px;
  font-size: 13px;
  background: transparent;
  color: rgb(48, 48, 51);
  cursor: pointer;
`;
const svgCss = css`
  position: absolute;
  top: 50%;
  right: 14px;
  width: 12px;
  height: 6px;
  margin-top: -4px;
  line-height: 6px;
  vertical-align: top;
  pointer-events: none;
`;
const ulCss = css`
  position: absolute;
  left: 0px;
  z-index: 20;
  width: 100%;
  border-right: 1px solid rgb(212, 212, 212);
  border-bottom: 1px solid rgb(212, 212, 212);
  border-left: 1px solid rgb(212, 212, 212);
  border-image: initial;
  max-height: 400px;
  overflow: auto;
  background: rgb(255, 255, 255);
  border-top: none;
  top: 100%;
`;
const licss = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 11px 13px;
  font-size: 13px;
  line-height: 20px;
  color: rgb(93, 93, 93);
  letter-spacing: -0.5px;
  text-align: left;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
`;
const CartItem: React.FC<{
  idx: number;
  cart: Cart;
  onClickDelete: (idx: number) => void;
  handleCheckBox: (idx: number) => void;
  onClickCount: (idx: number, type: string, count: number) => void;
  clickInput: (productIdx: number) => void;
  selectItem: React.ReactElement;
}> = ({ idx, cart, onClickDelete, handleCheckBox, onClickCount, clickInput, selectItem }) => {
  const { select, setSelect } = useContext(UiContext);

  return (
    <div css={tableWrap}>
      <div css={table}>
        <div css={[tableCell, { width: '4.3%' }]}>
          <span>
            <input
              type="checkbox"
              onClick={() => {
                handleCheckBox(idx);
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
        <div css={[tableCell, { width: '15%', borderLeft: ' 1px solid rgb(228, 228, 228)' }]}>
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
                    clickInput(cart.idx);
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
        </div>{' '}
      </div>
    </div>
  );
};
export default CartItem;
