let fruitArray: string[] = ["Mango", "Apple", "Banana", "Strawberry"];

let integerArrray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let booleanArray: boolean[] = [true, false];

let displayFruits = (array: Array<string>): void => {
  array.forEach((el: string): void => {
    console.log(el);
  });
};

let displaySumOfArray = (array: number[]): number => {
  let out = array.reduce((acc, el: number): number => acc + el, 0);
  return out;
};

displayFruits(fruitArray);

console.log(displaySumOfArray(integerArrray));
