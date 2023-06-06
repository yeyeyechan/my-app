import Product from '../model/product';

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <li>
      <img src={product.detail_image_url} />
      <div>
        <div>{product.item_name}</div>
        <div>
          <span>{product.price}</span>
          <span>원</span>
        </div>
      </div>
      <div>
        <button>장바구니</button>
      </div>
    </li>
  );
};
export default ProductItem;
