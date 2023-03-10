function myForEach<T>(
  this: T[],
  callback: (item: T, index?: number, array?: T[]) => void
): void {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
}

module.exports = myForEach;
