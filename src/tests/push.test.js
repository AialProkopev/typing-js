const myPush = require('../array/push.js');

Array.prototype.mypush = myPush;

test('first test', () => {
  let inputArr = [];
  expect(inputArr.mypush(1, 1, 1)).toEqual(3);
})
