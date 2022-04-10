// Runtime: 60 ms, faster than 97.35% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.1 MB, less than 80.90% of JavaScript online submissions for Reverse Linked List.
// O(n) time, O(1) space where n === total no. of nodes

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function (head) {
  if (!head || !head.next) return head;

  let prevN = head;
  let currentN = head.next;
  let nextN = head.next.next;

  while (nextN) {
    currentN.next = prevN;
    prevN = currentN;
    currentN = nextN;
    nextN = nextN.next;
  }

  currentN.next = prevN;
  head.next = null;

  return currentN;
};

// const reverseList = function (head) {
//   if (!head) return head;

//   let newHead;
//   const reverseRecursive = (node) => {
//     if (!node.next) {
//       newHead = node;
//       return node;
//     }
//     const newParent = reverseRecursive(node.next);
//     newParent.next = node;
//     return node;
//   };

//   reverseRecursive(head);
//   head.next = null;
//   return newHead;
// };
