import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const licss = css`
  width: 50%;
`;
export const DynamicCss = styled.li<{ idx: number }>`
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
`;
export const imgCss = css`
  opacity: 1 !important;
  height: 100%;
  max-width: 100%;
  width: 50%;
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
