"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, price, isbn) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.isbn = isbn;
    }
    getDetails() {
        return `Book Title ${this.title} Written By ${this.author} of price ${this.price} have isbn: ${this.isbn}`;
    }
    setTitle(newTitle) {
        if (newTitle != "") {
            newTitle = newTitle.toUpperCase();
            this.title = newTitle;
            console.log(`New Title has been set for the Book ${this.title}`);
        }
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(newAuthor) {
        if (newAuthor != "") {
            newAuthor = newAuthor.toLocaleLowerCase();
            this.author = newAuthor;
            console.log(`New Author has been set for the Book ${this.author}`);
        }
    }
    getPrice() {
        return this.price;
    }
    getISBN() {
        return this.isbn;
    }
    setPrice(newPrice) {
        if (newPrice <= 0)
            throw new Error("Invalid Price");
        else {
            console.log(`old Price of Book ${this.title} is ${this.price}`);
            this.price = newPrice;
            console.log("New Price is set Succesfully for Book", this.title, `of Rs. ${this.price}`);
        }
    }
}
exports.Book = Book;
Book.libraryName = "My Library";
