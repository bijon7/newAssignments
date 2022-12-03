// let integerArray = function (word) {
//   let myArray = word.split("");
//   let newArray = [];
//   for (let i = 0; i < myArray.length; i++) {
//     if (typeof myArray[i] === "string") {
//       newArray.push(Number(myArray[i]))
//     }
//     else { newArray.push(myArray[i]) }
//   }
//   return newArray;
// }

// let arr = integerArray("2+3");

// console.log(arr);

// let result = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  if (s.length === 0) return 0;

  // HANDLE SPACE
  s = s.replace(/\s/g, '');

  let i = 0;
  let sum = 0;
  let positive = true;
  let numStr = '';
  while (i < s.length) {
    if (s[i] === '(') {
      sum += positive ? Number(numStr) : 0 - Number(numStr); // summarize numbers
      numStr = '';
      // find close string, do recursion
      let openCount = 1;
      let j = i + 1;
      while (openCount > 0) {
        if (s[j] === "(") openCount++;
        if (s[j] === ")") openCount--;
        j++;
      }
      j--;
      let calculatedNum = calculate(s.substring(i + 1, j));
      sum += positive ? calculatedNum : 0 - calculatedNum;
      i = j;
    }
    if (s[i].match(/\d/)) numStr += s[i];
    if (s[i].match(/\+|\-/)) {
      sum += positive ? Number(numStr) : 0 - Number(numStr);
      numStr = '';
      positive = s[i] === '+';
    }
    i++;
  }
  if (numStr.length) sum += positive ? Number(numStr) : 0 - Number(numStr);

  return sum;
};

console.log(calculate("2 + 3"));
