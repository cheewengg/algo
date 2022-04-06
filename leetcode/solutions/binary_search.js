// https://leetcode.com/problems/binary-search/
// https://leetcode.com/submissions/detail/675245396/
// Runtime: 68 ms, faster than 85.99% of JavaScript online submissions for Binary Search.
// Memory Usage: 45.5 MB, less than 10.51% of JavaScript online submissions for Binary Search.
// O(log n) time, O(1) space, where n === nums.length
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (nums[start] === target) return start;
  if (nums[end] === target) return end;
  if (nums[start] > target || nums[end] < target) return -1;

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);
    const midVal = nums[mid];

    if (midVal === target) return mid;
    else if (midVal < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};
