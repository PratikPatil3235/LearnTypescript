var personObj = {
    name: "Pratik",
    age: 20,
    isMarried: false,
    gender: "male",
    userLocation: {
        city: "Pune",
        pincode: 416312
    }
};
function displayPersonDetailsWithLocation(object) {
    console.log("Name ".concat(object.name, ", Age: ").concat(object.age, ", Marriatel Status: ").concat(object.isMarried ? "Married" : "Not Married", ", Gender: ").concat(object.gender, "."));
    if (object.userLocation) {
        console.log("city: ".concat(object.userLocation.city, " Pincode: ").concat(object.userLocation.pincode));
    }
}
displayPersonDetailsWithLocation(personObj);
