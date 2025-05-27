enum ConstEnum {
  A = 1,
  B = A + 1,
  C = 10
}

let valueOf: ConstEnum = ConstEnum.B;
console.log(valueOf);