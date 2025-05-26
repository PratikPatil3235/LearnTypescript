"use strict";
let userName = "Pratik";
let userAge = 24;
let isMarried = false;
function displayDetail(userName, userAge, isMarried) {
    return `Name:${userName} is of Age ${userAge} having Status of ${isMarried ? "Married" : "Not Married"}`;
}
console.log(displayDetail(userName, userAge, isMarried));
