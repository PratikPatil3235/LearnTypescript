"use strict";
function outer() {
    let num1 = 10;
    function inner() {
        let num2 = 20;
        return num1 + num2;
    }
    return inner;
}
let output = outer();
console.log(output());
