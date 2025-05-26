var fruitArray = ["Mango", "Apple", "Banana", "Strawberry"];
var integerArrray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var booleanArray = [true, false];
var displayFruits = function (array) {
    array.forEach(function (el) {
        console.log(el);
    });
};
var displaySumOfArray = function (array) {
    var out = array.reduce(function (acc, el) { return (acc + el); }, 0);
    return out;
};
displayFruits(fruitArray);
console.log(displaySumOfArray(integerArrray));
