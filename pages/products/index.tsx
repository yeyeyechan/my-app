import ProductItem from '../../components/ProductItem';
import axios from 'axios';
import Product from '../../model/product';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { PageContext } from '../../store/pagination';
import { CartContext } from '../../store/cartContext';
import Cart, { CartList } from '../../model/cart';
import { produce } from 'immer';
const Products: React.FC<{ products: Product[] }> = (props) => {
  const { page, setCurrentPage } = useContext(PageContext);
  const { cartList, setCarts } = useContext(CartContext);

  //setCurrentPage(pageNo);
  console.log(page);
  const router = useRouter();
  let products = props.products;
  let pageCount = Math.ceil(products.length / 5);
  let paginations = Array.from({ length: pageCount }, (ele, index) => index + 1);
  products = products
    .sort((a, b) => b.score - a.score)
    .slice(5 * (page.currentPageNo - 1), 5 * page.currentPageNo);
  const handleClickCart = (cart: Cart) => {
    let copy = { ...cart };
    copy.checked = false;
    copy.count = 1;
    copy.coupon = { type: '', title: '', discountRate: 0, discountAmount: 0 };
    let newCartList = cartList.map((ele) => ele);
    newCartList.push(copy);
    setCarts(newCartList);
    router.push('/cart');
  };
  return (
    <div>
      <ul>
        {products.map((ele) => (
          <ProductItem key={ele.item_no} product={ele} handleClick={handleClickCart} />
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
export async function getServerSideProps() {
  console.log('test');
  const res = await axios.get<Product[]>('http://localhost:3000/api/goods');
  return {
    props: {
      products: res.data
    }
  };
}
export default Products;
