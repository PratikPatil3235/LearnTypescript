enum Mixed {
  number,
  string = "StringEnum",
}
let en: Mixed = Mixed.number;
console.log(typeof en);
