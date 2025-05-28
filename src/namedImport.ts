import { greetWithExports, primeFunction } from "./namedExport";

console.log(greetWithExports("Pratik"));
let count: number = 0;
for (let i = 1; i < 1000; i++) {
  if (primeFunction(i)) {
    count++;
    console.log(`This number ${i} is Prime number`);
  }
}
console.log(count);
