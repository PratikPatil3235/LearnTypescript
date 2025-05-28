const user: {
  name: string;
  age: number;
  location: { city: string; pin: number };
} = {
  name: "Patik",
  age: 24,
  location: {
    city: "sangli",
    pin: 416312,
  },
};
console.log(user.name);
console.log(user.age);
console.log(user);
