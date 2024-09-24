export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export function countCharacters(str: string): number {
  return str.replace(/\s/g,"").length;
}

export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

module.exports = { reverseString, countCharacters , toUpperCase};