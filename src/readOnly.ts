interface Electronics {
  name: string;
  readonly id: number;
  purpose: string;
}

let mobile: Electronics = {
  name: "Iphone",
  id: 4738,
  purpose: "entairtenment",
};

mobile.name = "asus";
// mobile.id = 12643; not possible only for reading purpose

console.log(mobile);
