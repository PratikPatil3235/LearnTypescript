type Lang = "en" | "fr";
type FileName = `message_${Lang}.json`;

const filename: FileName = `message_en.json`;
const secondFilename: FileName = `message_fr.json`;
console.log(filename);
console.log(secondFilename);
