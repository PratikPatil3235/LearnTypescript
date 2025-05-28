"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, price, isbn) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.isbn = isbn;
    }
    Book.prototype.getDetails = function () {
        return "Book Title ".concat(this.title, " Written By ").concat(this.author, " of price ").concat(this.price, " have isbn: ").concat(this.isbn);
    };
    Book.prototype.setTitle = function (newTitle) {
        if (newTitle != "") {
            newTitle = newTitle.toUpperCase();
            this.title = newTitle;
            console.log("New Title has been set for the Book ".concat(this.title));
        }
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        if (newAuthor != "") {
            newAuthor = newAuthor.toLocaleLowerCase();
            this.author = newAuthor;
            console.log("New Author has been set for the Book ".concat(this.author));
        }
    };
    Book.prototype.getPrice = function () {
        return this.price;
    };
    Book.prototype.getISBN = function () {
        return this.isbn;
    };
    Book.prototype.setPrice = function (newPrice) {
        if (newPrice <= 0)
            throw new Error("Invalid Price");
        else {
            console.log("old Price of Book ".concat(this.title, " is ").concat(this.price));
            this.price = newPrice;
            console.log("New Price is set Succesfully for Book", this.title, "of Rs. ".concat(this.price));
        }
    };
    Book.libraryName = "My Library";
    return Book;
}());
exports.Book = Book;
