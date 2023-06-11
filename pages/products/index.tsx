import ProductItem from '../../components/ProductItem';
import axios from 'axios';
import Product from '../../model/product';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { PageContext } from '../../store/pagination';
import { CartContext } from '../../store/cartContext';
import Cart, { CartList } from '../../model/cart';
import { css } from '@emotion/react';
import { produce } from 'immer';
import { ProductContext } from '../../store/productContext';
import { NextApiRequest, NextApiResponse } from 'next';
import Modal from '../../components/ui/Modal';
import { UiContext } from '../../store/uiContext';

const ulcss = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -20px;
`;
const Products: React.FC<{ products: Product[] }> = (props) => {
  const { page, setCurrentPage } = useContext(PageContext);
  const { cartList, setCarts } = useContext(CartContext);
  const { products, setAllProduct } = useContext(ProductContext);
  const { modal, setModal } = useContext(UiContext);
  const [isShow, setIsShow] = useState(false);
  const [modalTxt, setModalText] = useState('');

  //setCurrentPage(pageNo);
  const router = useRouter();
  let _products: Product[] = [];

  let _page = router.query['page'] as string;
  console.log(_page);
  let pageCount = Math.ceil(props.products.length / 5);
  let paginations = Array.from({ length: pageCount }, (ele, index) => index + 1);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    _products = props.products;
    _products.sort((a, b) => b.score - a.score);
    cartList.forEach((ele) => (_products[ele.idx].cart = true));
    _products = _products.slice(5 * (page.currentPageNo - 1), 5 * page.currentPageNo);

    setAllProduct(_products);
    const node = modalRef.current;
    node?.focus();
    console.log(_products);
  }, [cartList, page]);

  const handleDeleteCart = (item_no: number, index: number) => {
    let _cartList = cartList.filter((ele) => ele.item_no !== item_no);
    let _products = products.map((ele) => ele);
    _products[index - 5 * (page.currentPageNo - 1)].cart = false;
    setCarts(_cartList);
    console.log('handleDelete');

    setModal(
      <Modal
        isCancelClick={() => {
          setModal(null);
        }}
        isCancel={false}
        isShow={true}
        onClick={() => {
          setModal(null);
        }}
        text={'장바구니에서 상품이 삭제되었습니다.'}
      />
    );
    localStorage.setItem('cartList', JSON.stringify(_cartList));
  };
  const handleClickCart = (cart: Cart, idx: number) => {
    let copy = { ...cart };
    copy.cart = true;
    copy.idx = idx;
    copy.checked = false;
    copy.count = 1;
    copy.coupon = { type: '', title: '', discountRate: 0, discountAmount: 0 };
    copy.availableCoupon = copy.availableCoupon === undefined ? true : false;
    let newCartList = cartList.map((ele) => ele);
    newCartList.push(copy);
    console.log('handleClick');
    setCarts(newCartList);
    localStorage.setItem('cartList', JSON.stringify(newCartList));
    setModal(
      <Modal
        isCancelClick={() => {
          setModal(null);
        }}
        isCancel={true}
        isShow={true}
        onClick={() => {
          setModal(null);
          router.push('/cart');
        }}
        text={'장바구니에 상품이 추가되었습니다. 장바구니로 이동하시겠습니까?'}
      />
    );
  };

  const cartConfirmClick = () => {
    router.push('/cart');
  };
  return (
    <div ref={modalRef}>
      {modal}
      <ul css={ulcss}>
        {products.map((ele, index) => (
          <ProductItem
            key={ele.item_no}
            index={index + 5 * (page.currentPageNo - 1)}
            product={ele}
            handleClick={handleClickCart}
            //cartConfirmClick={cartConfirmClick}
            handleDeleteCart={handleDeleteCart}
          />
        ))}
      </ul>
      <div>
        <span>{'<'}</span>
        {paginations.map((ele, index) => {
          return (
            <span
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
        <span>{'>'}</span>
      </div>
    </div>
  );
};
export async function getServerSideProps(req: NextApiRequest) {
  console.log('test');
  const res = await axios.get<Product[]>('http://localhost:3000/api/goods');
  console.log(res.data);

  return {
    props: {
      products: res.data
    }
  };
}
export default Products;
