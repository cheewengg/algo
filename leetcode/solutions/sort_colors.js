// https://leetcode.com/problems/sort-colors/
// https://leetcode.com/submissions/detail/692355497/
// Runtime: 98 ms, faster than 20.80% of JavaScript online submissions for Sort Colors.
// Memory Usage: 42 MB, less than 71.56% of JavaScript online submissions for Sort Colors.
// O(n) time, O(1) space where n === nums.length
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  const count = [0, 0, 0];
  for (const n of nums) {
    count[n]++;
  }

  let idx = 0;

  for (let n = 0; n < count.length; n++) {
    while (count[n] > 0) {
      nums[idx] = n;
      count[n]--;
      idx++;
    }
  }
};
