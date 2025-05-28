type PersonName = string;
//Premetive typing allowed
const myName: PersonName = "Pratik";
console.log(myName);

interface Animals {
  name: string;
  gender: string;
}
const maskot: Animals = {
  name: "sheru",
  gender: "male",
  sound: "bark",
};
console.log(maskot);

interface Animals {
  sound: string;
}

type LastName = string;

type NewName = PersonName & LastName;

const newName: NewName = "Pratik Patil";

console.log(newName);
