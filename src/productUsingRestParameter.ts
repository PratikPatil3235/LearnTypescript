const productUsingRestParameter = (...nums: number[]): number => {
  return nums.reduce((acc, el) => acc * el, 1);
};
console.log(productUsingRestParameter(2, 3, 4, 5, 6, 7, 8, 9));
