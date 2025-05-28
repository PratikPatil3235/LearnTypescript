type UserTypes = {
  id: number;
  name: string;
};

type PartialUserTypes = {
  [K in keyof UserTypes]?: UserTypes[K];
};

const userTypes: PartialUserTypes = {
  id: 3437473,
  name: "pratik",
};

console.log(userTypes);
