interface Box<T>{
    value: T
}

const numberBox: Box<number> = {
    value: 10
}

const stringBox: Box<string> = {
    value: "stringBox"
}
console.log(numberBox.value);
console.log(stringBox);