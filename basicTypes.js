var userName = "Pratik";
var userAge = 24;
var isMarried = false;
function displayDetails(userName, userAge, isMarried) {
    return "Name:".concat(userName, " is of Age ").concat(userAge, " having Status of ").concat(isMarried ? "Married" : "Not Married");
}
console.log(displayDetails(userName, userAge, isMarried));
