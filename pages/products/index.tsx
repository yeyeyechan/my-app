import ProductItem from '../../components/ProductItem';
import axios from 'axios';
import Product from '../../model/product';
const Products: React.FC<{ products: Product[] }> = (props) => {
  let products = props.products;
  products = products.sort((a, b) => b.score - a.score);
  return (
    <div>
      <ul>
        {products.map((ele) => (
          <ProductItem key={ele.item_no} product={ele} />
        ))}
      </ul>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await axios.get<Product[]>('http://localhost:3000/api/goods');
  return {
    props: {
      products: res.data
    }
  };
}
export default Products;
