const myIndexOf = require('../array/indexOf.js');

Array.prototype.myindexof = myIndexOf;

test('IndexOf test 1', () => {
  const inputArr = [10, 11, 12];
  expect(inputArr.myindexof(12)).toEqual(2);
});

test('IndexOf test 2', () => {
  const inputArr = [12, 10, 11, 12];
  expect(inputArr.myindexof(12, 1)).toEqual(3);
});

test('IndexOf test 3', () => {
  const inputArr = [10, 11, 12];
  expect(inputArr.myindexof(13)).toEqual(-1);
});
