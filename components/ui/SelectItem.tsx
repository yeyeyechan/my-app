import { css } from '@emotion/react';
import Coupon, { CouponList } from '../../model/coupon';
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
const SelectItem: React.FC<{
  couponList: CouponList;
  handleSetCoupon: (coupon: Coupon, idx: number) => void;
  productIdx: number;
}> = (props) => {
  return (
    <ul css={[ulCss]}>
      {props.couponList.map((ele) => (
        <li
          key={ele.title}
          css={licss}
          role="button"
          onClick={() => {
            props.handleSetCoupon(ele, props.productIdx);
          }}
        >
          {ele.title}
        </li>
      ))}
    </ul>
  );
};

export default SelectItem;
