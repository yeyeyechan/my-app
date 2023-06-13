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
} from './CartItemcss';
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
      </div>
    </div>
  );
};
export default CartItem;
