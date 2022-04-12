// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// https://leetcode.com/submissions/detail/679165952/
// Runtime: 130 ms, faster than 32.25% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 52.2 MB, less than 68.63% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// O(n) time, O(log n) space where n === no. of nodes in BST

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;
  const p_left = p.val < root.val;
  const q_left = q.val < root.val;

  if ((p_left && !q_left) || (!p_left && q_left)) return root;
  if (p_left && q_left) return lowestCommonAncestor(root.left, p, q);
  return lowestCommonAncestor(root.right, p, q);
};
