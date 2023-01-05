/**
 * @param {number} x
 * @return {number}
 */
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
//Any built-in exponent function or operator cannot be used.

var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  for (let y = 1; y <= x; y++) {
    if (y * y === x) {
      return y;
    }
    else if (y * y < x && (y + 1) * (y + 1) > x) {
      return y;

    }

  }
};

console.log(mySqrt(4));