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
var solution = function (isBadVersion) {
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
