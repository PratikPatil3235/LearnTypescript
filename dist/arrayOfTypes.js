"use strict";
let fruitArray = ["Mango", "Apple", "Banana", "Strawberry"];
let integerArrray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let booleanArray = [true, false];
let displayFruits = (array) => {
    array.forEach((el) => {
        console.log(el);
    });
};
let displaySumOfArray = (array) => {
    let out = array.reduce((acc, el) => (acc + el), 0);
    return out;
};
displayFruits(fruitArray);
console.log(displaySumOfArray(integerArrray));
