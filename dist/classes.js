var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonClass.prototype.greeting = function () {
        console.log("My Name is ".concat(this.name, ". My age is ").concat(this.age));
    };
    return PersonClass;
}());
var person2 = new PersonClass("Pratik", 24);
person2.greeting();
