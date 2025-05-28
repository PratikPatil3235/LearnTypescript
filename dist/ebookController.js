"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ebook_1 = require("./ebook");
const harryPotterSecreatChamber = new ebook_1.EBook("Harry Potter", "JK Rolling", 700, "978-3-16-148410-0", 33.5);
console.log(harryPotterSecreatChamber.download());
console.log(ebook_1.EBook.libraryName);
console.log(harryPotterSecreatChamber.getAuthor());
harryPotterSecreatChamber.setAuthor("JK Rolling");
// harryPotterSecreatChamber.libraryName; not possible due to static member accessability
