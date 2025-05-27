class Car{
    drive() {
        console.log("Driving")
    }
}

class Bike{
    ride() {
        console.log("Riding...");
    }
}

function moveing(Vehical: Car | Bike): void{
    if (Vehical instanceof Car)
    {
        Vehical.drive()
    } else {
        Vehical.ride();
    }
}

let bike = new Bike()

moveing(bike);