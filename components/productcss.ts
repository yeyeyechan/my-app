import { css } from '@emotion/react';
export const cartimg = css`
  content: url('../../img/cart.svg');
  display: block;
  width: 24px;
  height: 36px;
`;
export const cartdiv = css`
  top: 0;
  left: 83%;
  width: 50px;
  height: 50px;
  padding: 20px 20px 0 0;
  box-sizing: border-box;
  position: absolute;

  vertical-align: top;
`;
const ulcss = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -20px;
`;
export const divIcon = css`
  position: relative;
  margin: 0;
  padding: 0;
`;
export const divIconWrap = css`
  padding: 29px 25px 0;
  width: 120px;
  height: 30px;
  margin: 0;
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
