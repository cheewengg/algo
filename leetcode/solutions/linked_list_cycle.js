// https://leetcode.com/problems/linked-list-cycle/
// https://leetcode.com/submissions/detail/677112625/
// Runtime: 72 ms, faster than 95.21% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 44.6 MB, less than 86.76% of JavaScript online submissions for Linked List Cycle.
// O(n) time, O(1) space where n === no. of nodes

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head) return false;
  const limit = 10 ** 4;
  let node = head;

  for (let i = 0; i <= limit; i++) {
    node = node.next;
    if (!node) return false;
  }
  return true;
};
