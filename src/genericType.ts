type Bottle<T> = {
    madeOf: T;
    storage: number;
}

const bottle: Bottle<string> = {
    madeOf: "steel",
    storage:2
}

console.log(bottle.madeOf);