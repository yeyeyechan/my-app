import { css } from '@emotion/react';
const ulcss = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
`;

export const cartimg = css`
  content: url('../../img/cart.svg');
  display: block;
  width: 24px;
  height: 36px;
`;
export const cartdiv = css`
  box-sizing: border-box;
  position: absolute;
  vertical-align: top;
  right: 10px;
  display: inline-block;
`;

export const divIcon = css`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 20px;
`;
export const divIconWrap = css`
  margin: 10px 0 0 0;
  width: 120px;
  height: 30px;
  display: inline-block;
`;
export const aLinkIcon = css`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  line-height: 100em;
  background: url(//img.29cm.co.kr/next-next_attach/2023/05/24/244dfcad0e1c4490b2a7d6fd85aa20fe_20230524160435.png);
  background-size: 60px 16px;
  width: 60px;
  height: 16px;
`;

export const paginationcss = css`
  margin-top: 30px;
  display: flex;
`;
export const spancss = css`
  width: 2.5%;
  font-style: bold;
  font-size: 25px;
`;
export default ulcss;
