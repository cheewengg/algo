// https://leetcode.com/problems/evaluate-reverse-polish-notation/
// https://leetcode.com/submissions/detail/677145885/
// Runtime: 64 ms, faster than 98.72% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// Memory Usage: 45.3 MB, less than 45.92% of JavaScript online submissions for Evaluate Reverse Polish Notation.
// O(n) time, O(n) space where n === tokens.length

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = [];
  const operands = new Set(["+", "-", "*", "/"]);

  for (op of tokens) {
    if (!operands.has(op)) stack.push(parseInt(op));
    else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      let res;
      if (op === "+") res = op1 + op2;
      if (op === "-") res = op1 - op2;
      if (op === "*") res = op1 * op2;
      if (op === "/") res = Math.trunc(op1 / op2);

      stack.push(res);
    }
  }
  return stack.pop();
};
