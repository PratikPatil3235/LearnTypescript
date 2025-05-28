"use strict";
function accept(value) {
    if (typeof (value) == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
accept("hello world");
accept(3.1498534);
