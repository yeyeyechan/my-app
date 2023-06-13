import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const licss = css`
  width: 50%;
`;
export const ButtonImgCSS = styled.img<{ cart: string }>`
  content: url(../../img/${(props) => (props.cart === 'plus' ? 'cartplus.svg' : 'cartminus.svg')});
`;
export const DynamicCss = styled.li<{ idx: number }>`
  margin-top: 20px;
  display: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? 'table' : '')};
  width: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? '50%' : '50%')};
  list-style: none;
`;

export const divCss = css`
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  position: relative;
  width: 70%;
  background: #f5f7f6;
`;
export const imgDiv = css`
  overflow: hidden;
  position: relative;
  width: 400px;
  height: 400px;
`;
export const imgCss = css`
  opacity: 1 !important;
  width: 100%;
  min-height: 1px;
  transition: opacity 0.2s ease-in-out;
  border: 0;
  vertical-align: top;
  border: 0;
  vertical-align: top;
`;
export const contentCss = css`
  margin-top: 15px;
  margin-bottom: 14px;
  line-height: 16px;
  font-size: 12px;
  color: #5d5d5d;
  word-break: break-all;
`;
