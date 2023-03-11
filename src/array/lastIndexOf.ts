function myLastIndexOf<T>(
  this: T[],
  searchElement: T,
  fromIndex?: number
): number {
  let res = -1;
  let index = fromIndex ? fromIndex : this.length - 1;
  for (let i = index; i >= 0; i--) {
    if (this[i] === searchElement) {
      res = i;
    }
  }
  return res;
}

module.exports = myLastIndexOf;
