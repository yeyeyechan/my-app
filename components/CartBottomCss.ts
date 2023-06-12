import { css } from '@emotion/react';
const tableBottom = css`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(228, 228, 228);
`;
export const tableCellBottom = css`
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
export const tableBodyBottom = css`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(228, 228, 228);
`;
export const tableBodyCellBottom = css`
  display: table-cell;
  position: relative;
  height: 149px;
  padding: 55px 2% 0px;
  width: 36%;
  text-align: center;
  vertical-align: top;
  box-sizing: border-box;
`;

export default tableBottom;
