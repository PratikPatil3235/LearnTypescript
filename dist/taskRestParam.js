function totalLength() {
    var str = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str[_i] = arguments[_i];
    }
    return str.join("").length;
}
console.log(totalLength("hi", "There"));
