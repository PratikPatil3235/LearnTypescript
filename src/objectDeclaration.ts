interface Person{
    name: string,
    age: number,
    isMarried: boolean,
    gender:string
}

let personObject:Person = {
    name: "Pratik",
    age: 20,
    isMarried: false,
    gender: "male",
}

function displayPersonDetails(object: Person): void{
    console.log(`Name ${object.name}, Age: ${object.age}, Marriatel Status: ${object.isMarried ? "Married" : "Not Married"}, Gender: ${object.gender}.`);
}

displayPersonDetails(personObject);