// https://leetcode.com/problems/two-sum/
// https://leetcode.com/submissions/detail/675149364/
// Runtime: 82 ms, faster than 80.03% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.9 MB, less than 41.16% of JavaScript online submissions for Two Sum.
// O(n) time, O(n) space, where n === nums.length

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    leftVal = nums[i];
    rightVal = target - nums[i];

    if (seen.hasOwnProperty(rightVal)) return [i, seen[rightVal]];
    seen[leftVal] = i;
  }
};

module.exports = twoSum;
