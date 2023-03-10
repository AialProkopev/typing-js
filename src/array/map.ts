function myMap<T>(
  this: T[],
  someCallback: (el: T, index?: number, array?: T[]) => T
): T[] {
  let arr: T[] = [];
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      arr.push(someCallback(this[i], i, this));
    } 
  }
  return arr;
}
