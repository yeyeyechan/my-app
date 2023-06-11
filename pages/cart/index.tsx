/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../../store/cartContext';
import CartItem from '../../components/CartItem';
import CartBottom from '../../components/CartBottom';
import axios from 'axios';
import Coupon from '../../model/coupon';
import Modal from '../../components/ui/Modal';
import LocalStorage from '../../model/LocalStorage';
import { UiContext } from '../../store/uiContext';
import SelectItem from '../../components/ui/SelectItem';
import { CouponList } from '../../model/coupon';
const sectionCss = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const table = css`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
  margin: 0;
  padding: 0;
`;

const tableCell = css`
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
const bottomCss = css`
  margin-top: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const selectDelete = css`
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
const pCss = css`
  color: rgb(0, 0, 0);
  font-size: 15px;
`;

const Cart: React.FC = () => {
  const { cartList, setCarts } = useContext(CartContext);
  const [isShow, setIsShow] = useState(false);
  const [coupon, setCoupon] = useState({ type: '', title: '' });
  const { select, setSelect } = useContext(UiContext);
  useEffect(() => {
    async function getCoupons() {
      let localdata = JSON.parse(LocalStorage.getItem('couponList') || '[]');
      if (localdata.length === 0) {
        let couponList = await axios.get<Coupon[]>('/api/coupons');
        couponList.data.forEach((ele) => (ele.idx = ''));
        LocalStorage.setItem('couponList', JSON.stringify(couponList.data));
      }
      setCoupon(localdata);
      console.log(localdata);
    }
    getCoupons();
  }, []);

  const clickInput = (productIdx: number) => {
    let _coupon: Coupon[] = [
      {
        type: '',
        title: '사용 안함'
      }
    ];
    _coupon = _coupon.concat(coupon);
    setSelect(
      <SelectItem couponList={_coupon} productIdx={productIdx} handleSetCoupon={handleSetCoupon} />
    );
  };
  const handleSetCoupon = (coupon: Coupon, idx: number) => {
    let _idx = coupon.idx;
    coupon.idx = '';
    let newCartList = cartList.map((ele) => ele);
    if (coupon.type === '') {
      newCartList.forEach((ele) => {
        if (ele.idx === _idx) {
          ele.coupon = { type: '', title: '', discountRate: 0, discountAmount: 0 };
        }
      });
      setCoupon(coupon);
      setCarts(newCartList);
      setSelect(null);
    } else {
      coupon.idx = idx;
      newCartList.forEach((ele) => {
        if (ele.idx === idx) {
          ele.coupon = {
            type: coupon.type,
            title: coupon.title,
            discountRate: coupon.discountRate as any,
            discountAmount: coupon.discountAmount as any
          };
        }
      });
      setCoupon(coupon);
      setCarts(newCartList);
      setSelect(null);
    }
  };
  const onClickDelete = (idx: number) => {
    let newCartList = cartList.filter((ele, index) => index !== idx);

    setCarts(newCartList);
    LocalStorage.setItem('cartList', JSON.stringify(newCartList));
  };
  const handleSelectedDelete = () => {
    let newCartList = cartList.filter((ele, index) => !ele.checked);
    setCarts(newCartList);
  };
  const onClickCount = (idx: number, type: string, count: number) => {
    if (count === 2 && type === '+') {
      setIsShow(true);
      return;
    } else if (count === 1 && type === '-') {
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
  };
  const handleCheckBox = (idx: number) => {
    let newCartList = cartList.map((ele, index) => {
      if (index === idx) {
        ele.checked = !ele.checked;
      }
      return ele;
    });
    console.log(newCartList);
    setCarts(newCartList);
  };
  const orderPrice = useMemo(() => {
    let totalPrice = 0;
    cartList.forEach((ele) => {
      if (ele.checked) {
        totalPrice += ele.count * ele.price;
      }
    });
    return totalPrice;
  }, [cartList]);
  const totalCount = useMemo(() => {
    let count = 0;
    cartList.forEach((ele) => {
      if (ele.checked) {
        count += ele.count;
      }
    });
    return count;
  }, [cartList]);
  const couponAmount = useMemo(() => {
    let couponAmount = 0;
    cartList.forEach((ele) => {
      if (ele.checked) {
        couponAmount += ele.count * ele.price;
      }
    });
    return couponAmount;
  }, [cartList]);
  return (
    <div>
      <Modal
        isShow={isShow}
        onClick={() => {
          setIsShow(false);
        }}
        isCancelClick={() => {
          setIsShow(false);
        }}
        isCancel={false}
        text={'해당 옵션의 구매 가능 수량은 2개 입니다.'}
      />

      <section css={sectionCss}>
        <div css={{ boxSizing: 'border-box', borderBottom: '1px solid rgb(0, 0, 0)' }}>
          <div css={table}>
            <div css={[tableCell, { width: '4.3%' }]}>
              <span>
                <input type="checkbox" />
              </span>
            </div>

            <div css={[tableCell]}>상품정보</div>
            <div css={[tableCell, { width: 200 }]}>수량</div>
            <div css={[tableCell, { width: 200 }]}>주문금액</div>
            <div css={[tableCell, { width: '15%' }]}>쿠폰</div>
          </div>
          {cartList.map((ele, index) => (
            <CartItem
              key={index}
              idx={index}
              cart={ele}
              onClickDelete={onClickDelete}
              handleCheckBox={handleCheckBox}
              onClickCount={onClickCount}
              clickInput={clickInput}
              selectItem={select}
            />
          ))}
        </div>
        <div css={bottomCss}>
          <button css={selectDelete} onClick={handleSelectedDelete}>
            선택상품 삭제
          </button>
          <p css={pCss}>새로고침할때까지 저장됩니다.</p>
        </div>
      </section>
      <section>
        <CartBottom orderPrice={orderPrice} totalCount={totalCount} />
      </section>
    </div>
  );
};
export default Cart;
