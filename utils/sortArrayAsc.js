/*
 ** 6. Sort an array from lowest to highest
 ** You could create a function for this solution as well, but be sure to try your program with
 ** varying lengths and types of arrays. Try one with all integers, another with negative numbers,
 ** and another with decimals.
 */

/**
 *
 * @param {number[]} numbers Array of numbers. Can be positive, negative or decimals.
 * @returns A new array with same elements of `numbers` but sorted from lowest to highest
 */
export function sortArrayAsc(numbers) {
  const numbersCopy = [...numbers];
  return numbersCopy.sort((a, b) => a - b);
}
