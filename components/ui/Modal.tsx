import { css } from '@emotion/react';
import { Ref, useRef } from 'react';

const divStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 50px 40px 40px;
  min-width: 300px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.5) 20px 20px 80px 0px;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  transition: all 100ms ease-in 0s;
`;
const crossButtonStyle = css`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 40px;
  min-height: 25px;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 60px;
  height: 60px;
  padding: 20px;
`;
const innerDiv = css`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 50px 40px 40px;
  min-width: 300px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.5) 20px 20px 80px 0px;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  transition: all 100ms ease-in 0s;
`;
const contentDiv = css`
  font-size: 18px;
  color: rgb(0, 0, 0);
  word-break: keep-all;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.4em;
`;
const buttonWrap = css`
  margin: 24px -2px 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;
const confirmButton = css`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 40px;
  min-height: 25px;
  display: inline-block;
  margin: 0px 2px;
  flex: 1 1 0%;
  max-width: 161px;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 2px;
  font-size: 14px;
  color: rgb(93, 93, 93);
  background-color: rgb(255, 255, 255);
  line-height: 40px;
  text-align: center;
  box-sizing: border-box;
`;
const Modal: React.FC<{
  isShow: boolean;
  text: string;
  isCancel: boolean;
  isCancelClick: () => void;
  onClick: () => void;
}> = (props) => {
  return (
    <div css={divStyle} style={props.isShow ? { display: 'block' } : { display: 'none' }}>
      <div css={innerDiv}>
        <button css={crossButtonStyle} type="button"></button>
        <div css={contentDiv}>{props.text}</div>
        <div css={buttonWrap} className="">
          <button
            css={confirmButton}
            type="button"
            onClick={() => {
              props.onClick();
            }}
          >
            확인
          </button>
          {props.isCancel && (
            <button
              onClick={() => {
                props.isCancelClick();
              }}
              css={confirmButton}
            >
              취소
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
