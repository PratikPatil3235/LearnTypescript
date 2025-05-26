"use strict";
function greeting(name) {
    return `hello ${name}`;
}
//console.log(greeting())  Not allowed
console.log(greeting("Pratik"));
function greetingUser(name) {
    console.log(`Hello ${name}`);
}
greetingUser("Shyam");
function greetingUserWithDefaultParameter(name = "Guest") {
    console.log(`Hello ${name}`);
}
greetingUserWithDefaultParameter();
function greetingWithOptionalParameter(name = "Guest", age) {
    return age ? `welcome ${name}, age ${age}` : `Welcome ${name}`;
}
console.log(greetingWithOptionalParameter());
console.log(greetingWithOptionalParameter("Raj"));
console.log(greetingWithOptionalParameter("Shubham", 25));
