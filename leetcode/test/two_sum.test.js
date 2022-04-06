const twoSum = require("../solutions/two_sum");

test("twoSum([2, 7, 11, 15], 9) returns [0, 1]", () => {
  const actualOutput = twoSum([2, 7, 11, 15], 9);
  const expectedOutput = [0, 1];
  expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  expect(actualOutput.length).toEqual(expectedOutput.length);
});

test("twoSum([3, 2, 4], 6) returns [1, 2]", () => {
  const actualOutput = twoSum([3, 2, 4], 6);
  const expectedOutput = [1, 2];
  expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  expect(actualOutput.length).toEqual(expectedOutput.length);
});

test("twoSum([3, 3], 6) returns [0, 1]", () => {
  const actualOutput = twoSum([3, 3], 6);
  const expectedOutput = [0, 1];
  expect(actualOutput).toEqual(expect.arrayContaining(expectedOutput));
  expect(actualOutput.length).toEqual(expectedOutput.length);
});
