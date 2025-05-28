type ResponceType<T = string> = {
  data: T;
};

const defaultType: ResponceType = {
  data: "word",
};

console.log(defaultType.data);

const customeType: ResponceType<number> = {
  data: 10,
};

console.log(customeType.data);
