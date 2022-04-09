// https://leetcode.com/problems/3sum/
// Runtime: 499 ms, faster than 22.93% of JavaScript online submissions for 3Sum.
// Memory Usage: 61.4 MB, less than 16.90% of JavaScript online submissions for 3Sum.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const arrLength = nums.length;

  if (arrLength < 3) return [];
  const numsSorted = [...nums].sort((a, b) => a - b);
  const res = new Set();

  for (let i = 0; i < arrLength - 2; i++) {
    let left = i + 1;
    let right = arrLength - 1;

    const currentNum = numsSorted[i];
    const remainder = 0 - currentNum;

    while (left < right) {
      const leftNum = numsSorted[left];
      const rightNum = numsSorted[right];

      const sum = leftNum + rightNum;
      if (sum === remainder) {
        res.add(`${currentNum},${leftNum},${rightNum}`);
        left++;
        right--;
      } else if (sum < remainder) left++;
      else right--;
    }
  }
  return [...res].map((str) =>
    str.split(",").map((numStr) => parseInt(numStr))
  );
};
