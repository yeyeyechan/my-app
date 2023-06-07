/*class Product {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;

  constructor(product: Product) {
    this.item_no = product.item_no;
    this.item_name = product.item_name;
    this.detail_image_url = product.detail_image_url;
    this.price = product.price;
    this.score = product.score;
    this.item_no = product.item_no;
  }
}
*/
interface Product {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
}
export default Product;
