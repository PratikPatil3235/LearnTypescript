"use strict";
class Thing {
    constructor() {
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    set setSize(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
let newThing = new Thing();
newThing.setSize = 30;
console.log(newThing._size);
