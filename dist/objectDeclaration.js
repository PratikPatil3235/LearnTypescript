var personObject = {
    name: "Pratik",
    age: 20,
    isMarried: false,
    gender: "male",
};
function displayPersonDetails(object) {
    console.log("Name ".concat(object.name, ", Age: ").concat(object.age, ", Marriatel Status: ").concat(object.isMarried ? "Married" : "Not Married", ", Gender: ").concat(object.gender, "."));
}
displayPersonDetails(personObject);
