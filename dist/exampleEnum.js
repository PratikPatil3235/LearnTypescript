"use strict";
const example = () => {
    return 5;
};
var Values;
(function (Values) {
    Values[Values["a"] = example()] = "a";
    Values[Values["b"] = 4] = "b";
    Values[Values["c"] = 8] = "c";
})(Values || (Values = {}));
const numen = Values.a;
console.log(numen);
