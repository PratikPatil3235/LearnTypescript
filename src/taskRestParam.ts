function totalLength(...str: string[]): number{
   return str.join("").length
}
console.log(totalLength("hi", "There"));
console.log(totalLength("TypeScript", "is", "fun"))