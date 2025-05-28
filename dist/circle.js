"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractClasses_1 = require("./abstractClasses");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(diameter) {
        return _super.call(this, diameter, null, null) || this;
    }
    Circle.prototype.getArea = function () {
        var _a;
        return Number(((Math.PI / 4) * (Math.pow(((_a = this.width) !== null && _a !== void 0 ? _a : 0), 2))).toFixed(4));
    };
    Circle.prototype.getPerimeter = function () {
        var myRadius = Number((this.width / 2).toFixed(2));
        return Number((2 * Math.PI * myRadius).toFixed(4));
    };
    return Circle;
}(abstractClasses_1.ObjectShape));
var myCircle = new Circle(6);
console.log(myCircle.getArea());
console.log(myCircle.getPerimeter());
