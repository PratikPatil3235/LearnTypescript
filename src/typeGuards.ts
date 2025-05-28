// typeof

function checkTypeOf(str: string | number): void {
  if (typeof str == "string") {
    console.log(str.length);
  }
}

checkTypeOf("typescript");
