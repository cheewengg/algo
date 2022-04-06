// https://leetcode.com/problems/valid-parentheses/
// https://leetcode.com/submissions/detail/675171210/
// Runtime: 90 ms, faster than 57.07% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 44.1 MB, less than 74.73% of JavaScript online submissions for Merge Two Sorted Lists.
// O(n) time, O(n) space where n === min(list1.length, list2.length)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
};
