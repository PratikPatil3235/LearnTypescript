"use strict";
function isCircle(shape) {
    return shape.kind === "circle";
}
function getArea(shape) {
    if (isCircle(shape)) {
        return Number((Math.PI * shape.radius ** 2).toFixed(2));
    }
    else {
        return Number((shape.side * shape.side).toFixed(2));
    }
}
const shape = {
    kind: "square",
    side: 5,
};
console.log(getArea(shape));
