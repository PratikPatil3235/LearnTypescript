let detailsArray: [string, number] = ["Pratik", 24];
console.log(detailsArray);

interface Details{
    name: string;
    age:number
}
let person: Details = {
    name: "Shyam",
    age: 23
};
let array: [Details] = [person];

let person1 :Details= {
    name: "Raj",
    age: 24
}

array.push(person1);

console.log(array);