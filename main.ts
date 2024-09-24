import { reverseString, countCharacters, toUpperCase } from "./stringUtils";

const sentence = "Learning Node.js is important because it lets you use JavaScript for both front-end and back-end development, making it easier to build full-stack applications with a single language."


const reverse = reverseString (sentence);
const charCount = countCharacters (sentence);
const uppercase = toUpperCase (sentence);

console.log("Original sentence:", sentence);
console.log("Reversed sentence:", reverse);
console.log("Character count:", charCount);
console.log("Uppercased sentence:", uppercase);
