import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const licss = css`
  width: 50%;
`;
export const DynamicCss = styled.li<{ idx: number }>`
  display: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? 'table' : '')};
  width: ${(props) => (props.idx !== 0 && (props.idx + 1) % 5 === 0 ? '50%' : '50%')};
`;
