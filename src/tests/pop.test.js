const myPop = require('../array/pop.js');

Array.prototype.mypop = myPop;

test('First test', () => {
  const inputArr = [1, 2, 3];
  expect(inputArr.mypop()).toEqual(3);
});
