import { ObjectShape } from "./abstractClasses";

class Square extends ObjectShape{
    constructor(side: number) {
        if (side > 0) {
            super(side, side,null)
        }
    }

    public override getArea(): number {
        return (this.side ?? 0) ** 2;
    }

    public override getPerimeter(): number {
        return 4 * (this.side ?? 0)
    }
}


let newSquare: Square = new Square(5);

console.log(newSquare.getPerimeter());
console.log(newSquare.getArea());
