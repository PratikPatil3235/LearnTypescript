"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractClasses_1 = require("./abstractClasses");
class Square extends abstractClasses_1.ObjectShape {
    constructor(side) {
        if (side > 0) {
            super(side, side, null);
        }
    }
    getArea() {
        var _a;
        return ((_a = this.side) !== null && _a !== void 0 ? _a : 0) ** 2;
    }
    getPerimeter() {
        var _a;
        return 4 * ((_a = this.side) !== null && _a !== void 0 ? _a : 0);
    }
}
let newSquare = new Square(5);
console.log(newSquare.getPerimeter());
console.log(newSquare.getArea());
