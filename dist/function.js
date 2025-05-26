function greeting(name) {
    return "hello ".concat(name);
}
//console.log(greeting())  Not allowed
console.log(greeting("Pratik"));
function greetingUser(name) {
    console.log("Hello ".concat(name));
}
greetingUser("Shyam");
function greetingUserWithDefaultParameter(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello ".concat(name));
}
greetingUserWithDefaultParameter();
function greetingWithOptionalParameter(name, age) {
    if (name === void 0) { name = "Guest"; }
    return age ? "welcome ".concat(name, ", age ").concat(age) : "Welcome ".concat(name);
}
console.log(greetingWithOptionalParameter());
console.log(greetingWithOptionalParameter("Raj"));
console.log(greetingWithOptionalParameter("Shubham", 25));
