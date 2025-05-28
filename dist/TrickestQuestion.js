var Persona = /** @class */ (function () {
  function Persona() {
    this.secret = "I love TypeScript!";
  }
  Persona.prototype.reveal = function () {
    return "No secrets here.";
  };
  return Persona;
})();
var p = new Persona();
console.log(p["secret"]);
