import { css } from '@emotion/react';

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
  totalCount: number;
}
const CartBottom: React.FC<propsModel> = (props) => {
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
          <span>층 {props.totalCount}개</span>
        </div>
        <div css={[tableCellBottom, { width: '28%' }]}>
          <i>{'+'}</i>
          <span>
            <strong>금액</strong>원
          </span>
        </div>
        <div css={tableCellBottom}>
          <i>{'='}</i>
          <span>
            <strong>금액</strong>원
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
