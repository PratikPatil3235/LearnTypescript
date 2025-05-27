var id = "container";
function getElement(id) {
    var el = document.getElementById(id);
    el.innerHTML = "Updated!";
    console.log("done");
}
getElement(id);
// Use with caution — if the value is null at runtime, it will throw an error.
