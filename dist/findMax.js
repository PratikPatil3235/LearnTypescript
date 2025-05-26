function findMax() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return Math.max.apply(Math, num);
}
console.log(findMax(3, 9, 4, 1));
