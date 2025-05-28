"use strict";
function restParameter(...nums) {
    return nums.reduce((acc, el) => {
        return acc + el;
    }, 0);
}
;
console.log(restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9));
const stringParamenter = (...str) => {
    return str.join(" ");
};
console.log(stringParamenter("I", "Love", "India"));
