/*
 ** 1. Print all even numbers from zero to a given number
 ** Try to make the solution to this problem as efficiently as possible.
 ** Consider using loops that would allow you to type the fewest characters/commands.
 ** While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10
 ** or even up to 10,000 with little extra effort.
 */

array.reduce((i) => i + 2, 0);

export function printEvenNumbers(num) {
  for (let i = 0; i <= num; i += 2) {
    console.log(i);
  }
}

printEvenNumbers(100);
