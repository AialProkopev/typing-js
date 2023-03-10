function myFilter<T>(
  this: T[],
  callback: (item: T, index: number, array: T[]) => T[]
): T[] {
  let res: T[] = [];
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        res.push(this[i]);
      } 
    }
  }
  return res;
}

module.exports = myFilter;
