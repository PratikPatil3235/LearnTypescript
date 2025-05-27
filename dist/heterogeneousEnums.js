var Mixed;
(function (Mixed) {
    Mixed[Mixed["number"] = 0] = "number";
    Mixed["string"] = "StringEnum";
})(Mixed || (Mixed = {}));
;
var en = Mixed.number;
console.log(typeof (en));
