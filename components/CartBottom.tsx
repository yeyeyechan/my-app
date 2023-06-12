import { css } from '@emotion/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tableBottom = css`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(228, 228, 228);
`;
const tableCellBottom = css`
  display: table-cell;
  padding: 0px;
  border: 0px;
  width: 36%;
  height: 74px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: rgb(0, 0, 0);
  vertical-align: middle;
  text-align: center;
`;
const tableBodyBottom = css`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(228, 228, 228);
`;
const tableBodyCellBottom = css`
  display: table-cell;
  position: relative;
  height: 149px;
  padding: 55px 2% 0px;
  width: 36%;
  text-align: center;
  vertical-align: top;
  box-sizing: border-box;
`;
interface propsModel {
  orderPrice: number;
  couponAmount: number;
  totalCount: number;
  totalPrice: number;
}
const CartBottom: React.FC<propsModel> = (props) => {
  const minusIcon = 'minus';
  return (
    <div>
      <div css={tableBottom}>
        <div css={tableCellBottom}>총주문금액</div>
        <div css={[tableCellBottom, { width: '28%' }]}>쿠폰금액</div>
        <div css={tableCellBottom}>총결제금액</div>
      </div>
      <div css={tableBodyBottom}>
        <div css={tableCellBottom}>
          <span>
            <strong>{props.orderPrice}</strong>원
          </span>
          <span>( 층 {props.totalCount}개)</span>
        </div>
        <div>
          {' '}
          <svg
            style={{ textAlign: 'center', alignItems: 'center', padding: '40px 0' }}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>{' '}
        </div>
        <div css={[tableCellBottom, { width: '28%' }]}>
          <span>
            <strong>{props.couponAmount}</strong>원
          </span>
        </div>
        <div>
          <svg
            style={{ textAlign: 'center', alignItems: 'center', padding: '40px 0' }}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H48z" />
          </svg>
        </div>
        <div css={tableCellBottom}>
          <span>
            <strong>{props.totalPrice}</strong>원
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
