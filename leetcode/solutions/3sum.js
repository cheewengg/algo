// https://leetcode.com/problems/3sum/
// https://leetcode.com/submissions/detail/676881763/
// Runtime: 499 ms, faster than 22.93% of JavaScript online submissions for 3Sum.
// Memory Usage: 61.4 MB, less than 16.90% of JavaScript online submissions for 3Sum.
// O(n**2) time, O(n**3) space where n === nums.length
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const arrLength = nums.length;

  if (arrLength < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < arrLength - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = arrLength - 1;

    const currentNum = nums[i];
    const remainder = 0 - currentNum;

    while (left < right) {
      const leftNum = nums[left];
      const rightNum = nums[right];

      const sum = leftNum + rightNum;
      if (sum === remainder) {
        res.push([currentNum, leftNum, rightNum]);
        left++;
        right--;
        while (nums[left] === leftNum) left++;
        while (nums[right] === rightNum) right--;
      } else if (sum < remainder) left++;
      else right--;
    }
  }

  return res;
};
