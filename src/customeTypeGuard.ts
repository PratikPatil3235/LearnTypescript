type Circle={
    kind: "circle";
    radius: number;
}

type Square = {
    kind: "square";
    side: number;
}

type Shape= Circle | Square;

function isCircle(shape: Shape): shape is Circle{
    return shape.kind === "circle";
}

function getArea(shape: Shape): number{
    if (isCircle(shape)) {
        return Number((Math.PI * shape.radius ** 2).toFixed(2));
    } else {
        return Number((shape.side * shape.side).toFixed(2));
    }
}


const shape:Shape = {
    kind:"square",
    side: 5,
}

console.log(getArea(shape));