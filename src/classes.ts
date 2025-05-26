class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greeting(): void {
    console.log(`My Name is ${this.name}. My age is ${this.age}`);
  }
}

const person2 = new PersonClass("Pratik", 24);
person2.greeting();