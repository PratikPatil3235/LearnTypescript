function greeting(name: string): string{
    return `hello ${name}`;
}
//console.log(greeting())  Not allowed
console.log(greeting("Pratik"));


function greetingUser(name: string) :void{
    console.log(`Hello ${name}`);
}
greetingUser("Shyam");

function greetingUserWithDefaultParameter(name: string = "Guest"): void{
    console.log(`Hello ${name}`);
}
greetingUserWithDefaultParameter();

function greetingWithOptionalParameter(name: string="Guest", age?: number):string
{
    return age ? `welcome ${name}, age ${age}` : `Welcome ${name}`;
}
console.log(greetingWithOptionalParameter());
console.log(greetingWithOptionalParameter("Raj"));
console.log(greetingWithOptionalParameter("Shubham", 25));