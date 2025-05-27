function addTen(input: string | number) {
    if (typeof (input) == "number")
    {
        return input + 10;    
    }
};

console.log(addTen(20));