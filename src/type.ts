type User = {
  name: string;
  age: number;
  isMarried: boolean | string;
};

let user1: User = {
  name: "Shyam",
  age: 20,
  isMarried: "Married",
};

console.log(user1);

type Admin = User & { role: string };

let admin1: Admin = {
  name: "Shyam",
  age: 20,
  isMarried: "Married",
  role: "admin",
};

console.log(admin1);
