"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isHappy_1 = require("../types/isHappy");
for (let i = 1; i < 300; i++) {
    if ((0, isHappy_1.isHappy)(i)) {
        console.log(i);
    }
}
