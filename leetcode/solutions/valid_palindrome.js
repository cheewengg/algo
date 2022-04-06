// https://leetcode.com/problems/valid-palindrome/
// https://leetcode.com/submissions/detail/675214124/
// Runtime: 87 ms, faster than 71.08% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 44.4 MB, less than 79.42% of JavaScript online submissions for Valid Palindrome.
// O(n) time, O(1) space, where n === cleanedS.length

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const cleanedS = s.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  let leftIdx = 0;
  let rightIdx = cleanedS.length - 1;

  while (leftIdx < rightIdx) {
    if (cleanedS[leftIdx] !== cleanedS[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }

  return true;
};
