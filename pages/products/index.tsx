import ProductItem from '../../components/ProductItem';
import axios from 'axios';
import Product from '../../model/product';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef } from 'react';
import { PageContext } from '../../store/pagination';
import { CartContext } from '../../store/cartContext';
import Cart from '../../model/cart';
import { css } from '@emotion/react';
import { ProductContext } from '../../store/productContext';
import { NextApiRequest } from 'next';
import Modal from '../../components/ui/Modal';
import { UiContext } from '../../store/uiContext';
import ulcss, {
  divIcon,
  divIconWrap,
  aLinkIcon,
  paginationcss,
  spancss
} from '../../components/productcss';

const Products: React.FC<{ products: Product[] }> = (props) => {
  const { page, setCurrentPage } = useContext(PageContext);
  const { cartList, setCarts } = useContext(CartContext);
  const { products, setAllProduct } = useContext(ProductContext);
  const { modal, setModal } = useContext(UiContext);

  const router = useRouter();
  let _products: Product[] = [];
  let pageCount = Math.ceil(props.products.length / 5);
  let paginations = Array.from({ length: pageCount }, (ele, index) => index + 1);

  useEffect(() => {
    //초기 랜더링, 페이지 변경, cartList 변경시 상품목록 화면 상태값 변경.
    _products = props.products; //우선 전체목록을 불러온다.
    _products.sort((a, b) => b.score - a.score); // 정렬
    _products.forEach((ele) => (ele.cart = false));
    cartList.forEach((ele) => (_products[ele.index].cart = true)); //장바구니 목록에있는 항목은 장바구니 여부 true로 설정
    _products = _products.slice(5 * (page.currentPageNo - 1), 5 * page.currentPageNo); //보여줄 부분 파싱
    setAllProduct(_products); //state 저장
  }, [cartList, page]);

  const handleDeleteCart = (index: number) => {
    let _cartList = cartList.filter((ele) => ele.index !== index); // 상품 인덱스 값으로 필터

    setCarts(_cartList);

    setModal(
      <Modal
        isCancelClick={() => {
          setModal(null);
        }}
        isCancel={false}
        onClick={() => {
          setModal(null);
        }}
        text={'장바구니에서 상품이 삭제되었습니다.'}
      />
    );
    localStorage.setItem('cartList', JSON.stringify(_cartList));
  };
  const handleAddCart = (cart: Cart, index: number) => {
    //index 는 전체 상품배열에서의 인덱스
    cart.cart = true; // 장바구니 등록여부
    cart.index = index; // 실제 인덱스
    cart.checked = false; // 선택여뷰
    cart.count = 1; //장바구니 추가시 기본 추가갯수
    cart.coupon = { type: '', title: '', discountRate: 0, discountAmount: 0 }; //적용한 쿠폰정보
    cart.availableCoupon = cart.availableCoupon === undefined ? true : false; //쿠폰 사용가능여부
    let newCartList = cartList.map((ele) => ele);

    newCartList.push(cart);
    if (newCartList.length > 3) {
      setModal(
        <Modal
          isCancelClick={() => {
            setModal(null);
          }}
          isCancel={false}
          onClick={() => {
            setModal(null);
          }}
          text={'장바구니에는 최대 세 가지의 상품이 담길 수 있습니다'}
        />
      );
      return;
    } else {
      setCarts(newCartList);
      localStorage.setItem('cartList', JSON.stringify(newCartList)); //장바구니 정보는 로컬스토리지에 저장해둔다.
      //장바구니 클릭시 보여줄 알림 모달 창.
      setModal(
        <Modal
          isCancelClick={() => {
            setModal(null);
          }}
          isCancel={true}
          onClick={() => {
            setModal(null);
            router.push('/cart');
          }}
          text={'장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까?'}
        />
      );
    }
  };

  return (
    <div>
      {modal}
      <div css={divIcon}>
        <div css={divIconWrap}>
          <a css={aLinkIcon} href="https://www.29cm.co.kr/home/">
            29CM
          </a>
        </div>
      </div>
      <ul css={ulcss}>
        {/** index 는 page값을 사용해 실제 전체 배열에서의 값을 넘겨준다. 전체 배열에서의 인덱스로
        접근해 수정하기 위함. */}
        {products.map((ele, index) => (
          <ProductItem
            key={ele.item_no}
            index={index + 5 * (page.currentPageNo - 1)}
            product={ele}
            handleAddCart={handleAddCart}
            handleDeleteCart={handleDeleteCart}
          />
        ))}
      </ul>
      <div css={paginationcss}>
        <span css={spancss}>&larr;</span>
        {paginations.map((ele, index) => {
          return (
            <span
              css={spancss}
              key={index}
              onClick={() => {
                setCurrentPage(ele);
                router.replace(`/products?page=${ele}
                `);
              }}
            >
              {ele}
            </span>
          );
        })}
        <span css={spancss}>&rarr;</span>
      </div>
    </div>
  );
};
export async function getServerSideProps(req: NextApiRequest) {
  console.log('getServerSideProps');
  const res = await axios.get<Product[]>('http://localhost:3000/api/goods');
  console.log(res.data);

  return {
    props: {
      products: res.data
    }
  };
}
export default Products;
