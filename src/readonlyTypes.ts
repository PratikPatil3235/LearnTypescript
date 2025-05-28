type DataType = {
  name: string;
  uses: string;
};

type ReadonlyDatatype = Readonly<DataType>;

const stringType = {
  name: "string",
  used: "to store group of characters",
};
console.log(stringType);
