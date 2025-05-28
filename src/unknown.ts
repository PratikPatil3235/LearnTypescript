let something: unknown = true;

something = "namingConvention";

something = 30;

if (typeof something === "number") {
  console.log(something);
}
