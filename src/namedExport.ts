export const greetWithExports = (name: string): string => `Hello ${name}`;

export const primeFunction = (num: number): boolean => {
  if (num == 1) return false;
  else {
    for (let i = 2; i <= Math.floor(num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
};
