import { EBook } from "./ebook";

const harryPotterSecreatChamber: EBook = new EBook("Harry Potter", "JK Rolling", 700, "978-3-16-148410-0", 33.5);

console.log(harryPotterSecreatChamber.download())

console.log(EBook.libraryName);

console.log(harryPotterSecreatChamber.getAuthor());

harryPotterSecreatChamber.setAuthor("JK Rolling");

// harryPotterSecreatChamber.libraryName; not possible due to static member accessability