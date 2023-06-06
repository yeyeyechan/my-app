import React, { createContext, useState } from 'react';
import { produce } from 'immer';
import Product from '../model/product';
type productObj = {
  products: Product[];
  setAllProduct: (products: Product[]) => void;
};

export const ProductContext = createContext<productObj>({
  products: [],
  setAllProduct: (products: Product[]) => {}
});

const ProductProvider: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const setAllProductHandler = (products: Product[]) => {
    setProducts(products);
  };
  const value = {
    products: products,
    setAllProduct: setAllProductHandler
  };
  return <ProductContext.Provider value={value}></ProductContext.Provider>;
};
export default ProductProvider;
