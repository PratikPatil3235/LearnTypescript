function getLength<T extends  { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("hello")); 
console.log(getLength([1, 2, 3]));
// console.log(getLength(123)); 