"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = reverseString;
exports.countCharacters = countCharacters;
exports.toUpperCase = toUpperCase;
function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.replace(/\s/g, "").length;
}
function toUpperCase(str) {
    return str.toUpperCase();
}
module.exports = { reverseString: reverseString, countCharacters: countCharacters, toUpperCase: toUpperCase };
