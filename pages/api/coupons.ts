import { NextApiRequest, NextApiResponse } from 'next';
import coupons from '../../data/coupon';
import Coupon from '../../model/coupon';

export default function handler(req: NextApiRequest, res: NextApiResponse<Coupon[]>) {
  res.status(200).json(coupons);
}
