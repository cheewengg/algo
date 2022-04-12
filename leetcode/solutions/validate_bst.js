// https://leetcode.com/problems/validate-binary-search-tree/
// https://leetcode.com/submissions/detail/678883266/
// Runtime: 56 ms, faster than 99.74% of JavaScript online submissions for Validate Binary Search Tree.
// Memory Usage: 47.4 MB, less than 9.42% of JavaScript online submissions for Validate Binary Search Tree.
// O(n) time, O(log n) space where n === no. of nodes in BST; note: log2 (n) = log n / log 2

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
 * @return {boolean}
 */
const traverseBST = function (node) {
  if (!node) return { isValid: true, minVal: Infinity, maxVal: -Infinity };

  const {
    isValid: isLeftSubTreeValid,
    minVal: leftMinVal,
    maxVal: leftMaxVal,
  } = traverseBST(node.left);

  const {
    isValid: isRightSubTreeValid,
    minVal: rightMinVal,
    maxVal: rightMaxVal,
  } = traverseBST(node.right);

  const isLeftKeySmaller = leftMaxVal < node.val;
  const isRightKeyBigger = rightMinVal > node.val;

  const isValid =
    isLeftSubTreeValid &&
    isRightSubTreeValid &&
    isLeftKeySmaller &&
    isRightKeyBigger;

  const maxVal = Math.max(
    leftMaxVal,
    rightMaxVal === Infinity ? leftMaxVal : rightMaxVal,
    node.val
  );
  const minVal = Math.min(
    leftMinVal === -Infinity ? rightMinVal : leftMinVal,
    rightMinVal,
    node.val
  );

  return { isValid, minVal, maxVal };
};

const isValidBST = function (root) {
  const { isValid } = traverseBST(root);

  return isValid;
};

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// const vals = [
//   120, 70, 140, 50, 100, 130, 160, 20, 55, 75, 110, 119, 135, 150, 200,
// ];
// const nodes = vals.map((val) => (val !== null ? new TreeNode(val) : undefined));

// for (let i = 0; i < vals.length; i++) {
//   if (nodes[i] === undefined) continue;
//   const left = i * 2 + 1;
//   const right = i * 2 + 2;

//   nodes[i].left = nodes[left];
//   nodes[i].right = nodes[right];
// }

// console.log(isValidBST(nodes[0]));
