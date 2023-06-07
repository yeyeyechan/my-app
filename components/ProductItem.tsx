import Cart from '../model/cart';
import Product from '../model/product';
import coupons from '../data/coupon';

const ProductItem: React.FC<{ product: Product; handleClick: (ele: Cart) => void }> = ({
  product,
  handleClick
}) => {
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
        <button
          onClick={() => {
            let cart = {
              ...product,
              count: 0,
              coupon: { type: '', title: '', discountRate: 0, discountAmount: 0 }
            };
            handleClick(cart);
          }}
        >
          장바구니
        </button>
      </div>
    </li>
  );
};
export default ProductItem;
