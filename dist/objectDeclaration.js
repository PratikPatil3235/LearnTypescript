"use strict";
let personObject = {
    name: "Pratik",
    age: 20,
    isMarried: false,
    gender: "male",
};
function displayPersonDetails(object) {
    console.log(`Name ${object.name}, Age: ${object.age}, Marriatel Status: ${object.isMarried ? "Married" : "Not Married"}, Gender: ${object.gender}.`);
}
displayPersonDetails(personObject);
