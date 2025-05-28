"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractClasses_1 = require("./abstractClasses");
class Circle extends abstractClasses_1.ObjectShape {
    constructor(diameter) {
        super(diameter, null, null);
    }
    getArea() {
        var _a;
        return Number(((Math.PI / 4) * ((_a = this.width) !== null && _a !== void 0 ? _a : 0) ** 2).toFixed(4));
    }
    getPerimeter() {
        let myRadius = Number((this.width / 2).toFixed(2));
        return Number((2 * Math.PI * myRadius).toFixed(4));
    }
}
let myCircle = new Circle(6);
console.log(myCircle.getArea());
console.log(myCircle.getPerimeter());
