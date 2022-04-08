const updateMatrix = require("../solutions/01_matrix");

test("updateMatrix([[1, 1, 1], [1, 1, 1], [1, 1, 0]]) returns [[4, 3, 2 ], [3, 2, 1 ], [2, 1, 0 ]]", () => {
  const actualOutput = updateMatrix([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 0],
  ]);
  const expectedOutput = [
    [4, 3, 2],
    [3, 2, 1],
    [2, 1, 0],
  ];

  expect(actualOutput).toEqual(expectedOutput);
});
