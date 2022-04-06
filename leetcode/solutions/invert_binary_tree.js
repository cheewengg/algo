// https://leetcode.com/problems/invert-binary-tree/
// https://leetcode.com/submissions/detail/675202289/
// Runtime: 68 ms, faster than 76.00% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 42.5 MB, less than 51.72% of JavaScript online submissions for Invert Binary Tree.
// O(n) time, O(h) space where n === no. of nodes, h === height of binary tree

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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (root) {
    invertTree(root.left);
    invertTree(root.right);

    const prevLeft = root.left;
    root.left = root.right;
    root.right = prevLeft;
  }

  return root;
};
