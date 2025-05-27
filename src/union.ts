let el: string | number = 10;
el = "ten";
console.log(el);

function printDetails(id: number | string):void {
    console.log(`Id is: ${id}`);
}

printDetails("ticketId");
printDetails(1234);
// printDetails(true); not allowed