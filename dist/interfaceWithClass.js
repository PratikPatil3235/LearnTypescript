"use strict";
class CellPhone {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(`${this.name}`);
    }
}
const myDevice = new CellPhone("Asus");
myDevice.display();
