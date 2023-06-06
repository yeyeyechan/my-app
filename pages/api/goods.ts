import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../model/product';
import productItems from '../../data/productItems';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).json(productItems);
}
