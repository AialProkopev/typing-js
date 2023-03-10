function myMap<T, K>(
  this: T[],
  someCallback: (el: T, index?: number, array?: T[]) => K
): K[] {
  let arr: K[] = [];
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      arr.push(someCallback(this[i], i, this));
    } 
  }
  return arr;
}

module.exports = myMap;
