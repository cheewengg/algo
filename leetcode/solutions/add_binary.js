/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let pointerA = a.length - 1;
  let pointerB = b.length - 1;

  const result = [];
  let carryOver = 0;

  while (pointerA >= 0 || pointerB >= 0) {
    const digitA = pointerA >= 0 ? parseInt(a[pointerA]) : 0;
    const digitB = pointerB >= 0 ? parseInt(b[pointerB]) : 0;

    const sum = digitA + digitB + carryOver;
    result.push(sum % 2);
    carryOver = Math.floor(sum / 2);

    pointerA--;
    pointerB--;
  }
  if (carryOver) result.push(carryOver);
  return result.reverse().join("");
};

const a = "1010";
const b = "1011";

console.log(addBinary(a, b));
