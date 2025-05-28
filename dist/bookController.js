"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const harryPotter = new book_1.Book("Harry Potter", "JK Rolling", 700, "978-3-16-148410-0");
// console.log(harryPotter.getDetails());
// console.log(harryPotter.getPrice());
harryPotter.setPrice(600);
