function outer() {
    var num1 = 10;
    function inner() {
        var num2 = 20;
        return num1 + num2;
    }
    return inner;
}
var output = outer();
console.log(output());
