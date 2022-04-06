const maxProfit = require("../solutions/best_time_buy_sell_stock");

test("maxProfit([7, 1, 5, 3, 6, 4]) returns 5", () => {
  const actualOutput = maxProfit([7, 1, 5, 3, 6, 4]);
  const expectedOutput = 5;
  expect(actualOutput).toBe(expectedOutput);
});

test("maxProfit([7,6,4,3,1]) returns 0", () => {
  const actualOutput = maxProfit([7, 6, 4, 3, 1]);
  const expectedOutput = 0;
  expect(actualOutput).toBe(expectedOutput);
});
