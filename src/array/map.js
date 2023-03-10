"use strict";
function myMap(someCallback) {
    let arr = [];
    if (Array.isArray(this)) {
        for (let i = 0; i < this.length; i++) {
            arr.push(someCallback(this[i], i, this));
        }
    }
    return arr;
}
module.exports = myMap;
