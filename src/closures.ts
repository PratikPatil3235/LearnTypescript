
function outer(): ()=>number {
    let num1:number = 10;
    function inner():number
    {
        let num2: number = 20;
        return num1 + num2;
    }

    return inner;
}

let output = outer();
console.log(output());