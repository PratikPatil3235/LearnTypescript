var MathUtils;
(function (MathUtils) {
    function multiply(a, b) {
        return a * b;
    }
    MathUtils.multiply = multiply;
})(MathUtils || (MathUtils = {}));
console.log(MathUtils.multiply(3, 4));
