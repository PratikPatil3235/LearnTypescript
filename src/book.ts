export class Book {
  private title: string;
  private author: string;
  protected price: number;
  public readonly isbn: string;
  static libraryName: string = "My Library";
  constructor(title: string, author: string, price: number, isbn: string) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.isbn = isbn;
  }

  public getDetails(): string {
    return `Book Title ${this.title} Written By ${this.author} of price ${this.price} have isbn: ${this.isbn}`;
  }

  public setTitle(newTitle: string) {
    if (newTitle != "") {
      newTitle = newTitle.toUpperCase();
      this.title = newTitle;
      console.log(`New Title has been set for the Book ${this.title}`);
    }
  }
  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public setAuthor(newAuthor: string) {
    if (newAuthor != "") {
      newAuthor = newAuthor.toLocaleLowerCase();
      this.author = newAuthor;
      console.log(`New Author has been set for the Book ${this.author}`);
    }
  }
  public getPrice(): number {
    return this.price;
  }

  public getISBN(): string {
    return this.isbn;
  }

  public setPrice(newPrice: number): Error | void {
    if (newPrice <= 0) throw new Error("Invalid Price");
    else {
      console.log(`old Price of Book ${this.title} is ${this.price}`);
      this.price = newPrice;
      console.log(
        "New Price is set Succesfully for Book",
        this.title,
        `of Rs. ${this.price}`
      );
    }
  }
}
