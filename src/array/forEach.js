"use strict";
function myForEach(callback) {
    if (Array.isArray(this)) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}
module.exports = myForEach;
