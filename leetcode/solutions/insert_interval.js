// https://leetcode.com/problems/insert-interval/
// https://leetcode.com/submissions/detail/676286095/
// Runtime: 60 ms, faster than 99.70% of JavaScript online submissions for Insert Interval.
// Memory Usage: 44.2 MB, less than 64.22% of JavaScript online submissions for Insert Interval.
// O(n) time, O(n) space where n === intervals.length

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

const insert = function (intervals, newInterval) {
  const mergedIntervals = [];
  let i = 0;
  const n = intervals.length;

  // push intervals[i] to mergedIntervals while intervals[i][1] < newInterval[0]
  while (i < n && intervals[i][1] < newInterval[0]) {
    mergedIntervals.push(intervals[i]);
    i++;
  }

  // foldleft intervals[i] to newInterval while intervals[i][0] <= newInterval[1]
  // newInterval[0] = min(newInterval[0], intervals[i][0]; newInterval[1] = max(newInterval[1], intervals[i][1])
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // push newInterval to mergedIntervals
  mergedIntervals.push(newInterval);

  // push in remaining intervals to mergedIntervals
  while (i < n) {
    mergedIntervals.push(intervals[i]);
    i++;
  }

  return mergedIntervals;
};

module.exports = insert;

// const insert = function (intervals, newInterval) {
//   const intervalsLength = intervals.length;
//   if (intervalsLength === 0) return [newInterval];

//   // insert on the left
//   let startIdx;
//   if (newInterval[0] <= intervals[0][0]) startIdx = 0;
//   else if (newInterval[0] > intervals[intervalsLength - 1][0])
//     startIdx = intervalsLength;
//   else {
//     // binary search
//     let left = 1;
//     let right = intervalsLength - 1;

//     while (left <= right && startIdx === undefined) {
//       const mid = Math.floor((left + right) / 2);
//       if (
//         newInterval[0] <= intervals[mid][0] &&
//         newInterval[0] > intervals[mid - 1][0]
//       )
//         startIdx = mid;
//       else if (newInterval[0] > intervals[mid][0]) left = mid + 1;
//       else right = mid - 1;
//     }
//   }
//   // collpase to the left
//   const insertInterval = [...newInterval];
//   startIdx =
//     startIdx > 0 && newInterval[0] <= intervals[startIdx - 1][1]
//       ? startIdx - 1
//       : startIdx;
//   let endIdx = startIdx;

//   for (let i = startIdx; i < intervalsLength; i++) {
//     const currentInterval = intervals[i];
//     if (newInterval[1] < currentInterval[0]) break;
//     insertInterval[0] = Math.min(insertInterval[0], currentInterval[0]);
//     insertInterval[1] = Math.max(insertInterval[1], currentInterval[1]);
//     endIdx++;
//   }

//   const res = [...intervals];
//   res.splice(startIdx, endIdx - startIdx, insertInterval);

//   return res;
// };
