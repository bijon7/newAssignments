/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  let myFunc = x => Number(x);
  let intArr = Array.from(String(x), myFunc);
  let tempArr = intArr.reverse();
  let tempString = tempArr.join('');
  let tempNumber = Number(tempString);
  if (x === tempNumber) {
    return true;
  }
  return false;

};

console.log(isPalindrome(-121));