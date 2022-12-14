/**
 * @param {number} x
 * @return {boolean}
 */
//Returns true if the input is a palindrome meaning the number reads the same whether reading from left to right OR from right to left.
const isPalindrome = function (x) {
  //Converts string to a number.
  let myFunc = x => Number(x);

  //Converts the input number into an array after a temporary converstion to string first as Arry.from can only read from a string.
  let intArr = Array.from(String(x), myFunc);

  //Reverses the order of the array.
  let tempArr = intArr.reverse();

  //Converts the reversed array to a string.
  let tempString = tempArr.join('');

  let tempNumber = Number(tempString);
  if (x === tempNumber) {
    return true;
  }
  return false;

};

console.log(isPalindrome(-121));

console.log(isPalindrome(121));

console.log(isPalindrome(353));

console.log(isPalindrome(302));