type MyType = string | number;

let data: MyType = "hello";
let strLength = (data as string).length;
console.table(strLength);
