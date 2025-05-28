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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = this;
        if (side > 0) {
            _this = _super.call(this, side, side, null) || this;
        }
        return _this;
    }
    Square.prototype.getArea = function () {
        var _a;
        return Math.pow(((_a = this.side) !== null && _a !== void 0 ? _a : 0), 2);
    };
    Square.prototype.getPerimeter = function () {
        var _a;
        return 4 * ((_a = this.side) !== null && _a !== void 0 ? _a : 0);
    };
    return Square;
}(abstractClasses_1.ObjectShape));
var newSquare = new Square(5);
console.log(newSquare.getPerimeter());
console.log(newSquare.getArea());
