var productUsingRestParameter = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, el) { return (acc * el); }, 1);
};
console.log(productUsingRestParameter(2, 3, 4, 5, 6, 7, 8, 9));
