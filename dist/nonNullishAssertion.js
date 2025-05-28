"use strict";
const id = "container";
function getElement(id) {
    const el = document.getElementById(id);
    el.innerHTML = "Updated!";
    console.log("done");
}
getElement(id);
// Use with caution — if the value is null at runtime, it will throw an error.
