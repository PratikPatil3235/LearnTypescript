type userProfile = {
    name: string;
    age: number;
}

type AgeType = userProfile["age"];

const age: AgeType = 48;

console.log(age);