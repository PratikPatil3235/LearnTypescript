function addTen(input: string | number) {
    if (typeof (input) == "number")
    {
        return input + 10;    
    }
};

console.log(addTen(20));

function getLength(value: string | number): number {
    if (typeof (value) == "string") {
        return value.length;
    }
    else {
        return value;
    }
}

console.log(getLength("helllow worldd......."));
console.log(getLength(5));