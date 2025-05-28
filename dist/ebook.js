"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBook = void 0;
const book_1 = require("./book");
class EBook extends book_1.Book {
    constructor(title, author, price, isbn, fileSizeMB) {
        super(title, author, price, isbn);
        this.fileSizeMB = fileSizeMB;
    }
    getDetails() {
        return `${super.getDetails()}, Having FileSize of ${this.fileSizeMB}`;
    }
    download() {
        return `Downloading... ${super.getTitle()}`;
    }
}
exports.EBook = EBook;
