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

const ProductProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const setAllProductHandler = (products: Product[]) => {
    setProducts(products);
  };

  const value = {
    products: products,
    setAllProduct: setAllProductHandler
  };
  return <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>;
};
export default ProductProvider;
