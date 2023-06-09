/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useContext, useEffect } from 'react';
import { CartContext } from '../store/cartContext';
import Cart from '../model/cart';

const tableWrap = css`
  position: relative;
`;
const table = css`
  position: relative;
  display: table;
  width: 100%;
  table-layout: fixed;
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
  width: 4.3%;
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
const CartItem: React.FC<{
  idx: number;
  cart: Cart;
  onClickDelete: (idx: number) => void;
  handleCheckBox: (idx: number) => void;
  onClickCount: (idx: number, type: string, count: number) => void;
}> = ({ idx, cart, onClickDelete, handleCheckBox, onClickCount }) => {
  return (
    <div>
      <div css={tableWrap}>
        <div css={table}>
          <div css={tableCell}>
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
            <div css={{ display: 'flex' }}>
              <a>
                <img
                  css={{
                    margin: '3px 25px 0px 0px',
                    width: 110,
                    height: 110,
                    objecvtit: 'cover'
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
          <div css={tableCell}>
            <div>
              <span>{cart.price * cart.count}</span>원
            </div>
            <button> buy now</button>
          </div>
          <div css={tableCell}>
            <div>
              <span>쿠폰내용</span>
            </div>
            <button>셀렉창</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
