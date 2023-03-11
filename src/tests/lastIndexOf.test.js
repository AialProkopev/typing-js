const myLastIndexOf = require('../array/lastIndexOf.js');

Array.prototype.mylastindexof = myLastIndexOf;

test('Simple first test', () => {
  const inputArray = [1, 2, 3, 4, 5];
  expect(inputArray.mylastindexof(4)).toEqual(3);
})

test('Second test with two arguments', () => {
  const inputArray = [1, 2, 3, 1, 1];
  expect(inputArray.mylastindexof(1, 2)).toEqual(0);
})
