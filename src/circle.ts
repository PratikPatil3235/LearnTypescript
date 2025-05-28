import { ObjectShape } from "./abstractClasses";

class Circle extends ObjectShape{
    constructor(diameter: number) {
        super(diameter, null, null);
    }
    public getArea(): number {
        return Number(((Math.PI / 4) * ((this.width ?? 0) ** 2)).toFixed(4));
    }

    public getPerimeter(): number {
        let myRadius = Number((this.width / 2).toFixed(2));
        return Number((2 * Math.PI * myRadius).toFixed(4));
    }
}
let myCircle: Circle = new Circle(6);
console.log(myCircle.getArea());
console.log(myCircle.getPerimeter());
