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

  for (let i = 0; i < numRows; i++) rows[i] = [];
  // reverse the direction of row when hitting the bottom and top row.
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) reverse = !reverse;

  }

};

