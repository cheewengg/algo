// https://leetcode.com/problems/search-in-rotated-sorted-array/
// https://leetcode.com/submissions/detail/679009252/
// Runtime: 86 ms, faster than 43.65% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 41.8 MB, less than 94.90% of JavaScript online submissions for Search in Rotated Sorted Array.
// O(log n) time, O(1) space where n = nums.length

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const correctIdx = (idx, arr) => {
  return idx < 0 ? arr.length + idx : idx;
};

const search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let k;

  if (nums[start] < nums[end] || nums.length == 1) k = 0;

  while (start <= end && k === undefined) {
    const mid = Math.floor((start + end) / 2);

    const startVal = nums[start];
    const endVal = nums[end];

    const midVal = nums[mid];
    const leftVal = nums[correctIdx(mid - 1, nums)];
    const rightVal = nums[mid + 1];

    if (midVal > leftVal && midVal > rightVal) k = nums.length - 1 - mid;
    else if (midVal < leftVal && midVal < rightVal) k = nums.length - mid;
    else {
      if (midVal > startVal && midVal > endVal) start = mid + 1;
      else if (midVal < startVal && midVal < endVal) end = mid - 1;
    }
  }

  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const rotatedMid = correctIdx(mid - k, nums);

    if (nums[rotatedMid] === target) return rotatedMid;
    else if (nums[rotatedMid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};
