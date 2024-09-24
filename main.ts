import { reverseString, countCharacters , toUpperCase } from "./stringUtils";
import * as fs from 'fs';
import * as path from 'path';


const sentence: string = "If you want to do cool stuff in web development, you gotta learn Node.js!";

const reversedSentence: string = reverseString(sentence);
const characterCount: number = countCharacters(sentence);
const uppercased: string = toUpperCase(sentence);

console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversedSentence);
console.log("Character Count:", characterCount);
console.log("Uppercased Sentence:", uppercased);

const fileName = 'reversed.txt';
fs.writeFileSync(fileName, reversedSentence, 'utf8');

const fullPath = path.resolve(fileName);

console.log("Full path of reversed.txt:", fullPath);
