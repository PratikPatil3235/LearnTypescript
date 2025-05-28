"use strict";
var ConstEnum;
(function (ConstEnum) {
    ConstEnum[ConstEnum["A"] = 1] = "A";
    ConstEnum[ConstEnum["B"] = 2] = "B";
    ConstEnum[ConstEnum["C"] = 10] = "C";
})(ConstEnum || (ConstEnum = {}));
let valueOf = ConstEnum.B;
console.log(valueOf);
