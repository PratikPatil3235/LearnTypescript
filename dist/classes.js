"use strict";
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My Name is ${this.name}. My age is ${this.age}`);
    }
}
const person2 = new PersonClass("Pratik", 24);
person2.greeting();
