function restParameter() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, el) {
        return acc + el;
    }, 0);
}
;
console.log(restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9));
var stringParamenter = function () {
    var str = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str[_i] = arguments[_i];
    }
    return str.join(" ");
};
console.log(stringParamenter("I", "Love", "India"));
