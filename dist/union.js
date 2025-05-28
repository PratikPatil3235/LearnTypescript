"use strict";
let el = 10;
el = "ten";
console.log(el);
function printDetails(id) {
    console.log(`Id is: ${id}`);
}
printDetails("ticketId");
printDetails(1234);
// printDetails(true); not allowed
