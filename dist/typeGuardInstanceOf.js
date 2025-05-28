"use strict";
class Car {
    drive() {
        console.log("Driving");
    }
}
class Bike {
    ride() {
        console.log("Riding...");
    }
}
function moveing(Vehical) {
    if (Vehical instanceof Car) {
        Vehical.drive();
    }
    else {
        Vehical.ride();
    }
}
let bike = new Bike();
moveing(bike);
