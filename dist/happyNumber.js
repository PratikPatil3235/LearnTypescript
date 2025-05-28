"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isHappy_1 = require("../types/isHappy");
for (var i = 1; i < 300; i++) {
    if ((0, isHappy_1.isHappy)(i)) {
        console.log(i);
    }
}
