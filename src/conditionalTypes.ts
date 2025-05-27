// basic Example
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>;  
type B = IsString<number>; 


let checkString: IsString<boolean> = "No";
console.log(checkString);


//other example
type NonNullableType<T> = T extends null | undefined ? never : T;

type C= NonNullableType<string | null>; 
type D = NonNullableType<number | undefined>;

const check: C = "c";