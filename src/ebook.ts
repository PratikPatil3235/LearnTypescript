
import { Book } from './book';

export class EBook extends Book{
    private fileSizeMB: number;
    constructor(title: string, author: string, price: number, isbn: string, fileSizeMB: number) {
        super(title, author, price, isbn);
        this.fileSizeMB = fileSizeMB;
    }

    public override getDetails(): string {
        return `${super.getDetails()}, Having FileSize of ${this.fileSizeMB}`;
    }

    public download(): string{
        return `Downloading... ${super.getTitle()}`;
    }
}

