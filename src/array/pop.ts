function myPop<T>(
  this: T[]
): T | undefined {
  if (this.length === 0) {
    return undefined;
  } 
  let res = this[this.length - 1];
  delete this[this.length - 1];
  this.length = this.length - 1;

  return res;
}

module.exports = myPop;
