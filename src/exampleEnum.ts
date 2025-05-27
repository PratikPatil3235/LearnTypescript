const example = (): number => {
    return 5;
}

enum Values{
    a = example(),
    b = 4,
    c = 8
};

const numen: Values = Values.a;
console.log(numen);