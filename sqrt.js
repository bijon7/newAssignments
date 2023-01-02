/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  for (let y = 1; y <= x; y++) {
    if (y * y === x) {
      return y;
    }

  }

};