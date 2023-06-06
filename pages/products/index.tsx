import ProductList from '../../components/ProductList';
import axios from 'axios';
import Product from '../../model/product';
const Products: React.FC = () => {
  return (
    <div>
      <ul>
        <ProductList />
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<Product[]>('http://localhost:3000/api/goods');
  console.log(res.data);
  return {
    props: {}
  };
}
export default Products;
