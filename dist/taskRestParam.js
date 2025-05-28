"use strict";
function totalLength(...str) {
    return str.join("").length;
}
console.log(totalLength("hi", "There"));
console.log(totalLength("TypeScript", "is", "fun"));
