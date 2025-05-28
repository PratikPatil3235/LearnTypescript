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
exports.EBook = void 0;
var book_1 = require("./book");
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(title, author, price, isbn, fileSizeMB) {
        var _this = _super.call(this, title, author, price, isbn) || this;
        _this.fileSizeMB = fileSizeMB;
        return _this;
    }
    EBook.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Having FileSize of ").concat(this.fileSizeMB);
    };
    EBook.prototype.download = function () {
        return "Downloading... ".concat(_super.prototype.getTitle.call(this));
    };
    return EBook;
}(book_1.Book));
exports.EBook = EBook;
