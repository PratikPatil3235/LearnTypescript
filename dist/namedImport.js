"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const namedExport_1 = require("./namedExport");
console.log((0, namedExport_1.greetWithExports)("Pratik"));
let count = 0;
for (let i = 1; i < 1000; i++) {
    if ((0, namedExport_1.primeFunction)(i)) {
        count++;
        console.log(`This number ${i} is Prime number`);
    }
}
console.log(count);
