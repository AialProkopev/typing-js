const myMap = require('../array/map.js');

Array.prototype.mymap = myMap;

test('Simple number test 1', () => {
  const inputArr = [1, 2];
  const expectedArr = [2, 3];
  expect(inputArr.mymap(item => item + 1)).toEqual(expectedArr);
});

test('Simple number test 2', () => {
  const inputArr = [1, 2, 3];
  const expectedArr = [0, 0.2, 0.6];
  expect(inputArr.mymap((item, index) => {
    return index * item / 10
  })).toEqual(expectedArr);
});

test('Simple string test 1', () => {
  const inputArr = ['hello', 'world'];
  const expectedArr = ['h', 'w'];
  expect(inputArr.mymap(item => item[0])).toEqual(expectedArr);
});

test('Simple string test 2', () => {
  const inputArr = ['hello', 'world'];
  const expectedArr = ['0hellohelloworld', '1worldhelloworld'];
  expect(inputArr.mymap((item, index, array) => {
    return String(index) + item + array.join('');
  })).toEqual(expectedArr);
});

