import { css } from '@emotion/react';
export const sectionCss = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const table = css`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
  margin: 0;
  padding: 0;
`;

export const tableCell = css`
  display: table-cell;
  padding: 0px;
  border: 0px;
  height: 74px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: rgb(0, 0, 0);
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
export const bottomCss = css`
  margin-top: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export const selectDelete = css`
  isplay: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 40px;
  min-height: 25px;
  margin-right: 10px;
  width: 130px;
  height: 42px;
  border: 1px solid rgb(160, 160, 160);
  color: rgb(48, 48, 51);
  font-size: 15px;
`;
export const pCss = css`
  color: rgb(0, 0, 0);
  font-size: 15px;
`;
export const divWrap = css`
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
`;
export const divInner = css`
  position: relative;
  width: 100%;
`;
export const couponButton = css`
  position: relative;
`;
export const inputCss = css`
  border: 1px solid rgb(228, 228, 228);
  display: block;
  width: 70%;
  outline: none;
  height: 42px;
  padding: 0px 30px 0px 14px;
  font-size: 13px;
  background: transparent;
  color: rgb(48, 48, 51);
  cursor: pointer;
`;
export const svgCss = css`
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
export const ulCss = css`
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
export const licss = css`
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
