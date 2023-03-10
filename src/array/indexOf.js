"use strict";
function myIndexOf(searchElement, fromIndex) {
    let res = -1;
    let start = fromIndex ? fromIndex : 0;
    if (Array.isArray(this)) {
        for (let i = start; i < this.length; i++) {
            if (searchElement === this[i]) {
                return i;
            }
        }
    }
    return res;
}
module.exports = myIndexOf;
