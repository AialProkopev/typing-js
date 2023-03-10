function myMap(
  this: number[],
  someCallback: (el: number, index: number, array: number[]) => number
): number[] {
  let arr: number[] = [];
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      arr.push(someCallback(this[i], i, this));
    } 
  }
  return arr;
}
