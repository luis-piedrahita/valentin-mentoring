/*
 ** 10. Return the number of vowels in a string
 ** Create a function that'll return an integer of the number of vowels found in a string.
 ** This is a great way to practice determining the features of a dataset. If you use JavaScript later
 ** in your career, you'll be well-prepared to determine what datasets (or just strings) consist of.
 ** If you feel like an extra challenge, consider returning the number of characters.
 */

export function numberOfVowels(str) {
  const nonVowelRegex = /[^aeiou]/gi;
  return str.replace(nonVowelRegex, "").length;
}

export function numberOfVowelsPro(str) {
  const nonVowelRegex = /[^aeiou]/gi;
  const vowels = str.replace(nonVowelRegex, "").toLowerCase();
  const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (const vowel of vowels) {
    result[vowel]++;
  }
  return result;
}
