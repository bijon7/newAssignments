//Given a string s representing a valid expression, ////implement a basic calculator to evaluate it, and return the result of the evaluation.
//Example: Input: s = "1 + 1"
//Output: 2

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

  }
};


