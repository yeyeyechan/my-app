import {
  divStyle,
  innerDiv,
  crossButtonStyle,
  contentDiv,
  buttonWrap,
  confirmButton
} from './Modalcss';

const Modal: React.FC<{
  text: string;
  isCancel: boolean;
  isCancelClick: () => void;
  onClick: () => void;
}> = (props) => {
  return (
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
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
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
  );
};

export default Modal;
