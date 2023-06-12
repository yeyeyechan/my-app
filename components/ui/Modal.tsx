import {
  divStyle,
  innerDiv,
  crossButtonStyle,
  contentDiv,
  buttonWrap,
  confirmButton
} from './Modalcss';
import styled from '@emotion/styled';
const ModalLayer = styled.div`
  z-index: 2000;
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
`;
const Modal: React.FC<{
  text: string;
  isCancel: boolean;
  isCancelClick: () => void;
  onClick: () => void;
}> = (props) => {
  return (
    <ModalLayer>
      <div css={divStyle}>
        <div css={innerDiv}>
          <button
            type="button"
            css={crossButtonStyle}
            onClick={() => {
              props.isCancelClick();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 82">
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M82.655.345L1.156 81.844M82.655 81.655L1.156.156"></path>
              </g>
            </svg>
          </button>
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
    </ModalLayer>
  );
};

export default Modal;
