"use strict";
class Base {
    greet() {
        console.log("Hello, world!");
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log("Hello".toLowerCase(), `${name.toLocaleLowerCase()}`);
        }
    }
}
const d = new Derived();
d.greet();
d.greet("Ma'am");
