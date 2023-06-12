interface Coupon {
  type: string;
  title: string;
  [key: string]: number | string | boolean | undefined;
}

export interface CouponList extends Array<Coupon> {}

export default Coupon;
