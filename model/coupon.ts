interface Coupon {
  type: string;
  title: string;
  [key: string]: number | string | undefined;
}

export interface CouponList extends Array<Coupon> {}

export default Coupon;
