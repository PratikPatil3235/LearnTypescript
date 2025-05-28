class Persona {
  private secret: string = "I love TypeScript!";

  public reveal() {
    return "No secrets here.";
  }
}

const p = new Persona();

console.log((p as any)["secret"]); 
