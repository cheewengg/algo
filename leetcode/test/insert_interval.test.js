const insert = require("../solutions/insert_interval");

test("insert([[1,3],[6,9]], [2,5]) returns [[1,5],[6,9]]", () => {
  const actualOutput = insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  );
  const expectedOutput = [
    [1, 5],
    [6, 9],
  ];

  expect(actualOutput).toEqual(expectedOutput);
});

test("insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]) returns [[1,2],[3,10],[12,16]]", () => {
  const actualOutput = insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  );
  const expectedOutput = [
    [1, 2],
    [3, 10],
    [12, 16],
  ];

  expect(actualOutput).toEqual(expectedOutput);
});

test("insert([[0,0],[0,0],[0,0]], [0, 100]) returns [[0, 100]]", () => {
  const actualOutput = insert(
    [
      [0, 0],
      [0, 0],
      [0, 0],
    ],
    [0, 100]
  );

  const expectedOutput = [[0, 100]];

  expect(actualOutput).toEqual(expectedOutput);
});

test("insert([], [4,8]) returns [[4,8]]", () => {
  const actualOutput = insert([], [4, 8]);
  const expectedOutput = [[4, 8]];

  expect(actualOutput).toEqual(expectedOutput);
});
