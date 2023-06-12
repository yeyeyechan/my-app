/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../../store/cartContext';
import CartItem from '../../components/CartItem';
import CartBottom from '../../components/CartBottom';
import axios from 'axios';
import Coupon, { CouponList } from '../../model/coupon';
import Modal from '../../components/ui/Modal';
import LocalStorage from '../../model/LocalStorage';
import { UiContext } from '../../store/uiContext';
import SelectItem from '../../components/ui/SelectItem';
import {
  sectionCss,
  table,
  tableCell,
  bottomCss,
  pCss,
  selectDelete,
  divWrap,
  inputCss,
  svgCss,
  divInner,
  couponButton
} from './indexCss';

const Cart: React.FC<{ coupons: Coupon[] }> = (props) => {
  const { cartList, setCarts } = useContext(CartContext);
  const defaultCoupon: Coupon = { type: '', title: '', discountRate: 0, discountAmount: 0 };
  const [coupon, setCoupon] = useState(defaultCoupon);
  const { select, setSelect } = useContext(UiContext);
  const { modal, setModal } = useContext(UiContext);
  const couponData = props.coupons; //쿠폰 데이터를 가져온다.

  const clickSelect = () => {
    let _coupon: Coupon[] = [
      {
        type: '',
        title: '사용 안함'
      }
    ];
    _coupon = _coupon.concat(couponData); //선택 안함 case도 넣어주기 위해.
    setSelect(<SelectItem couponList={_coupon} onClickCoupon={onClickCoupon} />);
  };
  //쿠폰선택 함수
  const onClickCoupon = (coupon: Coupon) => {
    setCoupon(coupon); //쿠폰정보 state
    setSelect(null); //셀렉트창 올리기
  };
  //장바구니 목록에서 삭제
  const onClickDelete = (idx: number) => {
    let newCartList = cartList.filter((ele, index) => index !== idx);
    setCarts(newCartList);
    LocalStorage.setItem('cartList', JSON.stringify(newCartList));
  };
  //선택상품 전체 삭제
  const handleSelectedDelete = () => {
    let newCartList = cartList.filter((ele) => !ele.checked);
    setCarts(newCartList);
  };
  //물품갯수 카운트
  const onClickCount = (idx: number, type: string, count: number) => {
    if (count === 2 && type === '+') {
      //2개이상 추가시 보여줄 모달 팝업
      setModal(
        <Modal
          isCancelClick={() => {
            setModal(null);
          }}
          isCancel={false}
          onClick={() => {
            setModal(null);
          }}
          text={'해당 옵션의 구매 가능 수량은 2개 입니다.'}
        />
      );
      return;
    } else if (count === 1 && type === '-') {
      //1개 미만으로 줄일시 보여줄 모달
      setModal(
        <Modal
          isCancelClick={() => {
            setModal(null);
          }}
          isCancel={false}
          onClick={() => {
            setModal(null);
          }}
          text={'해당 옵션의 최소 구매 가능 수량은 1개 입니다.'}
        />
      );
      return;
    }
    let newCartList = cartList.map((ele, index) => {
      if (index === idx) {
        if (type === '+') {
          ele.count += 1;
        } else {
          ele.count -= 1;
        }
      } else {
        return ele;
      }
      return ele;
    });

    setCarts(newCartList);
    LocalStorage.setItem('cartList', JSON.stringify(newCartList));
  };
  const onClickCheckAll = () => {
    let newCartList = cartList.map((ele) => {
      ele.checked = !ele.checked;
      return ele;
    });
    setCarts(newCartList);
    LocalStorage.setItem('cartList', JSON.stringify(newCartList));
  };
  //체크 하는 함수.
  const onCickCheckBox = (idx: number) => {
    //idx는 장바구니 리스트의 인덱스
    let newCartList = cartList.map((ele, index) => {
      if (index === idx) {
        ele.checked = !ele.checked;
      }
      return ele;
    });
    setCarts(newCartList);
    LocalStorage.setItem('cartList', JSON.stringify(newCartList));
  };

  //주문금액
  const orderPrice = useMemo(() => {
    let totalPrice = 0;
    cartList.forEach((ele) => {
      if (ele.checked) {
        totalPrice += ele.count * ele.price;
      }
    });
    return Math.floor(totalPrice);
  }, [cartList]);
  //선택상품갯수
  const totalCount = useMemo(() => {
    let count = 0;
    cartList.forEach((ele) => {
      if (ele.checked) {
        count += ele.count;
      }
    });
    return count;
  }, [cartList, coupon]);
  //쿠폰 할인 금액
  const couponAmount = useMemo(() => {
    let couponAmount = 0;
    cartList.forEach((ele) => {
      if (ele.checked && ele.availableCoupon) {
        couponAmount += ele.count * ele.price;
      }
    });
    if (coupon.type === 'rate') {
      let rate = coupon.discountRate as number;
      return Math.floor(((couponAmount * rate) as number) / 100);
    } else if (coupon.type === 'amount') {
      let amount = coupon.discountAmount as number;
      return Math.floor(amount);
    }
    return 0;
  }, [cartList, coupon]);

  const totalPrice = useMemo(() => Math.floor(orderPrice - couponAmount), [cartList, coupon]);
  return (
    <div>
      {modal}
      <section css={sectionCss}>
        <div css={{ boxSizing: 'border-box', borderBottom: '1px solid rgb(0, 0, 0)' }}>
          <div css={table}>
            <div css={[tableCell, { width: '4.3%' }]}>
              <span>
                <input
                  type="checkbox"
                  onClick={() => {
                    onClickCheckAll();
                  }}
                />
              </span>
            </div>

            <div css={[tableCell]}>상품정보</div>
            <div css={[tableCell, { width: 200 }]}>수량</div>
            <div css={[tableCell, { width: 200 }]}>주문금액</div>
          </div>
          {cartList.map((ele, index) => (
            <CartItem
              key={index}
              idx={index}
              cart={ele}
              onClickDelete={onClickDelete}
              onCickCheckBox={onCickCheckBox}
              onClickCount={onClickCount}
              clickSelect={clickSelect}
              selectItem={select}
            />
          ))}
        </div>
        <div css={bottomCss}>
          <div style={{ display: 'flex' }}>
            <button css={selectDelete} onClick={handleSelectedDelete}>
              선택상품 삭제
            </button>
            <div css={divWrap}>
              <div css={divInner}>
                <div role="button" css={couponButton}>
                  <input
                    placeholder={coupon.type === '' ? '사용 가능한 쿠폰 2개' : coupon.title}
                    type="text"
                    value=""
                    css={inputCss}
                    onClick={() => {
                      clickSelect();
                    }}
                    readOnly
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 16" css={svgCss}>
                    <g fill="none" fillRule="evenodd" stroke="rgb(212, 212, 212)" strokeWidth="3">
                      <path d="M28 1L13.97 15 0 1.058"></path>
                    </g>
                  </svg>
                </div>
                {select}
              </div>
            </div>
          </div>

          <p css={pCss}>장바구니는 캐시 삭제 전까지 저장됩니다.</p>
        </div>
      </section>
      <section>
        <CartBottom
          orderPrice={orderPrice}
          couponAmount={couponAmount}
          totalCount={totalCount}
          totalPrice={totalPrice}
        />
      </section>
    </div>
  );
};
export default Cart;

export async function getServerSideProps() {
  const res = await axios.get<Coupon[]>('http://localhost:3000/api/coupons');

  return {
    props: {
      coupons: res.data
    }
  };
}
