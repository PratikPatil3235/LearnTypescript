interface System{
    name: string;
    osType: string;
    id: number;
}

let lenovoObject: System = {
    name: "Lenobo Ryzen 3",
    osType: "ideapad 3",
    id: 68473363868234837
}

interface MobileSystem extends System{
    screenSize:number
}

let mobileSystemObj: MobileSystem = {
    name: "Asus",
    osType: "Android",
    id: 12345,
    screenSize: 6.5
};
console.log(lenovoObject, mobileSystemObj);