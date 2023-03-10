const myFilter = require('../array/filter.js');

Array.prototype.myfilter = myFilter;

test('First test', () => {
  const inputArray = [1, 2, 3];
  const outputArray = [3];

  expect(inputArray.myfilter(item => item > 2)).toEqual(outputArray);
});
