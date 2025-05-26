let userName: string = "Pratik";
let userAge: Number = 24;
let isMarried: boolean = false;

function displayDetail(userName:string,userAge:Number,isMarried:boolean):string {
    return `Name:${userName} is of Age ${userAge} having Status of ${isMarried?"Married":"Not Married"}`
}

console.log(displayDetail(userName, userAge, isMarried));