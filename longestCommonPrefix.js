/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  let sortedArray = strs.sort();
  let string = "";
  let commonPrefix = true;
  for (let i = 0; i < sortedArray[0].length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (commonPrefix) {

        if (sortedArray[0].charAt(i) === sortedArray[j].charAt(i) && sortedArray[j].charAt(i) === sortedArray[sortedArray.length - 1].charAt(i)) {

          commonPrefix = true;


        }
        else {
          commonPrefix = false;
        }
      }

    }
    if (commonPrefix) {
      string += sortedArray[0].charAt(i)
    }

  }


  return string;
};

console.log(longestCommonPrefix(["strong", "stroll", "stroller"]))