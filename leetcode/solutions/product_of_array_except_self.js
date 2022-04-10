// https://leetcode.com/problems/product-of-array-except-self/
// https://leetcode.com/submissions/detail/677544049/
// Runtime: 84 ms, faster than 99.76% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 55.9 MB, less than 25.20% of JavaScript online submissions for Product of Array Except Self.
// O(n) time, O(n) space where n === nums.length

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const product_before_n = new Array(nums.length).fill(1);
  const product_after_n = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    product_before_n[i] = product_before_n[i - 1] * nums[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    product_after_n[j] = product_after_n[j + 1] * nums[j + 1];
  }

  const res = product_before_n.map((num, idx) => num * product_after_n[idx]);

  return res;
};
