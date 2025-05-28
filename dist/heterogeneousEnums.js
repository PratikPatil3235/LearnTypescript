"use strict";
var Mixed;
(function (Mixed) {
    Mixed[Mixed["number"] = 0] = "number";
    Mixed["string"] = "StringEnum";
})(Mixed || (Mixed = {}));
let en = Mixed.number;
console.log(typeof en);
