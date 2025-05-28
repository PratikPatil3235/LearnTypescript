"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var namedExport_1 = require("./namedExport");
console.log((0, namedExport_1.greetWithExports)("Pratik"));
var count = 0;
for (var i = 1; i < 1000; i++) {
    if ((0, namedExport_1.primeFunction)(i)) {
        count++;
        console.log("This number ".concat(i, " is Prime number"));
    }
}
console.log(count);
