/*
 ** 7. Create a function that filters out negative numbers
 ** In this challenge, you'll have a function that takes an array as an input and returns an array.
 ** But if all goes according to plan, it'll remove the negative numbers. This is another example of
 ** a task that'll be useful when combing through data and looking for clever ways to eliminate
 ** "bad data."
 */
export function removeNegativeNumbers(numbers) {
  return numbers.filter((number) => number >= 0);
}
