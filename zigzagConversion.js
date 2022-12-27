//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

// P   A   H   N
// A P L S I I G
// Y   I   R

//And then read line by line: "PAHNAPLSIIGYIR"
//Write the code that will take a string and make this conversion given a number of rows:
//string convert(string s, int numRows);
var convert = function (s, numRows) {
  // return original string if it's not possible to zigzag
  if (numRows === 1 || s.length < numRows) return s;

  let rows = []
  let converted = '';
  let reverse = false;
  let count = 0

  // prepare rows
  for (let i = 0; i < numRows; i++) rows[i] = [];
  // reverse the push flow when reaching turning points
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;

  }

};

