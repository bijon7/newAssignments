// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        newArray.push(i);
        newArray.push(j);
        return newArray;

      }

    }
  }
};

console.log(twoSum([2, 7, 11, 5], 9))