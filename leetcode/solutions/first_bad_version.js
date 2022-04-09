//leetcode.com/problems/first-bad-version/
// https://leetcode.com/submissions/detail/677124737/
// Runtime: 93 ms, faster than 31.11% of JavaScript online submissions for First Bad Version.
// Memory Usage: 41.8 MB, less than 73.63% of JavaScript online submissions for First Bad Version.
// O(log n) time, O(1) space where n === no. of versions

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
https: var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const thisVersionBad = isBadVersion(mid);
      const prevVersionBad = isBadVersion(mid - 1);
      const nextVersionBad = isBadVersion(mid + 1);

      if (thisVersionBad && !prevVersionBad) return mid;
      if (!thisVersionBad && nextVersionBad) return mid + 1;
      if (thisVersionBad && prevVersionBad) {
        end = mid - 1;
        continue;
      }
      if (!thisVersionBad && !nextVersionBad) {
        start = mid + 1;
        continue;
      }
    }
  };
};
