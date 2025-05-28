"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeFunction = exports.greetWithExports = void 0;
var greetWithExports = function (name) { return "Hello ".concat(name); };
exports.greetWithExports = greetWithExports;
var primeFunction = function (num) {
    if (num == 1)
        return false;
    else {
        for (var i = 2; i <= Math.floor(num / 2); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
};
exports.primeFunction = primeFunction;
