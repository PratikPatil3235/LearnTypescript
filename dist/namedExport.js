"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeFunction = exports.greetWithExports = void 0;
const greetWithExports = (name) => `Hello ${name}`;
exports.greetWithExports = greetWithExports;
const primeFunction = (num) => {
    if (num == 1)
        return false;
    else {
        for (let i = 2; i <= Math.floor(num / 2); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
};
exports.primeFunction = primeFunction;
