import { css } from '@emotion/react';
import tableBottom, { tableBodyBottom, tableCellBottom, couponCell } from './CartBottomcss';

const CartBottom: React.FC<{
  orderPrice: number;
  couponAmount: number;
}> = (props) => {
  const minusIcon = 'minus';
  return (
    <div>
      <div css={tableBottom}>
        <div css={tableCellBottom}>총주문금액</div>
        <div css={couponCell}>쿠폰금액</div>
        <div css={tableCellBottom}>총결제금액</div>
      </div>
      <div css={tableBodyBottom}>
        <div css={tableCellBottom}>
          <span>
            <strong>{props.orderPrice}</strong>원
          </span>
          {/*<span>( 총 {props.totalCount}개)</span>*/}
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
        <div css={couponCell}>
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
            <strong>
              {props.orderPrice - props.couponAmount < 0
                ? 0
                : props.orderPrice - props.couponAmount}
            </strong>
            원
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
