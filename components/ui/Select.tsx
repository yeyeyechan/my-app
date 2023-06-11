import Coupon from '../../model/coupon';
import { css } from '@emotion/react';
import Cart from '../../model/cart';
import SelectItem from './SelectItem';
import { useContext } from 'react';
import { UiContext } from '../../store/uiContext';
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
const Select: React.FC<{ couponList: Coupon[]; cart: Cart }> = ({ couponList, cart }) => {
  let _couponList: Coupon[] = [
    {
      type: '',
      title: '선택안함'
    }
  ];
  _couponList = _couponList.concat(couponList);

  return (
    <div css={[tableCell, { width: '15%', borderLeft: ' 1px solid rgb(228, 228, 228)' }]}>
      <div css={divWrap}>
        <div css={divInner}>
          <div role="button" css={couponButton}>
            <input
              placeholder={cart.availableCoupon ? '사용 가능한 쿠폰 2개' : '사용 가능 쿠폰 없음'}
              type="text"
              value=""
              css={inputCss}
              readOnly
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 16" css={svgCss}>
              <g fill="none" fillRule="evenodd" stroke="rgb(212, 212, 212)" strokeWidth="3">
                <path d="M28 1L13.97 15 0 1.058"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
