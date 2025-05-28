function restParameter(...nums: number[]): number {
  return nums.reduce((acc, el: number): number => {
    return acc + el;
  }, 0);
}

console.log(restParameter(1, 2, 3, 4, 5, 6, 7, 8, 9));

const stringParamenter = (...str: string[]): string => {
  return str.join(" ");
};
console.log(stringParamenter("I", "Love", "India"));
