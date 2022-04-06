const isValid = require("../solutions/valid_parentheses");

test(`isValid("()") returns true`, () => {
  const actualOutput = isValid("()");
  const expectedOutput = true;
  expect(actualOutput).toEqual(expectedOutput);
});

test(`isValid("()") returns true`, () => {
  const actualOutput = isValid("()[]{}");
  const expectedOutput = true;
  expect(actualOutput).toEqual(expectedOutput);
});

test(`isValid("(]") returns false`, () => {
  const actualOutput = isValid("(]");
  const expectedOutput = false;
  expect(actualOutput).toEqual(expectedOutput);
});

test(`isValid("]") returns false`, () => {
  const actualOutput = isValid("]");
  const expectedOutput = false;
  expect(actualOutput).toEqual(expectedOutput);
});
