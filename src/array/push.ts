function myPush<T>(
  this: T[],
  ...args: T[]
): number {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }

  return this.length;
}

module.exports = myPush;
