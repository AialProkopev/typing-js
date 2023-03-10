const myMap = require('../array/map.js');

Array.prototype.mymap = myMap;

test('first test', () => {
  const inputArr = [1, 2];
  const expectedArr = [2, 3];
  expect(inputArr.mymap(item => item + 1)).toEqual(expectedArr);
});

