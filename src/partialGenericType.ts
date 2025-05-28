type UserData = { name: string; age: number };
type PartialUser = Partial<UserData>;

const userData: PartialUser = {
  name: "jarvis",
};
console.log(userData);
