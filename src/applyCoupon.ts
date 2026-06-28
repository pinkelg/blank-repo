export function applyCoupon(subtotal, coupon) {
  if (!(subtotal >= 0)) throw new RangeError("subtotal must be >= 0");
  let total;
  if (coupon.type === "PERCENT") {
    if (coupon.value < 0 || coupon.value > 100) {
      throw new RangeError("percent must be between 0 and 100");
    }
    total = subtotal * (1 - coupon.value / 100);
  } else if (coupon.type === "FLAT") {
    total = subtotal - coupon.value;
  } else {
    throw new TypeError("unknown coupon type");
  }
  if (total < 0) total = 0;
  return Math.round(total * 100) / 100;
}
