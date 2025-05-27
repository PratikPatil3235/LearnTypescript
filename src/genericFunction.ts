function displayId<T>(value: T): T {
    return value;
}

const numberVal = displayId(10);
console.log(displayId("ruiens"));
console.log(numberVal);