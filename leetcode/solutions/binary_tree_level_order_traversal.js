// https://leetcode.com/problems/binary-tree-level-order-traversal/
// https://leetcode.com/submissions/detail/677016002/
// Runtime: 74 ms, faster than 74.20% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 44 MB, less than 87.61% of JavaScript online submissions for Binary Tree Level Order Traversal.
// O(n) time, O(n) space where n === no. of nodes

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const trace = {};
  const traverseHelper = (node, level) => {
    if (!node) return;
    if (trace[level] === undefined) trace[level] = [];
    trace[level].push(node.val);

    const nextLvl = level + 1;
    traverseHelper(node.left, nextLvl);
    traverseHelper(node.right, nextLvl);
  };

  traverseHelper(root, 0);
  const res = [];
  let i = 0;

  while (trace[i]) {
    res.push(trace[i]);
    i++;
  }

  return res;
};
