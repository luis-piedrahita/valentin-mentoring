/*
 ** 5. Create a function that reverses an array
 ** This challenge is particularly helpful if you're planning to become a Data Scientist. Manipulating
 ** data is a significant part of the role, and building the foundations now will help you later down
 ** the road when you're working with large databases.
 ** Start small here and work your way up. Begin with an array of 5 numbers, and then try your program
 ** with a larger array to verify its success.
 */

export function reverseArray(items) {
  // Array.reverse is destructive thats why we need to make a copy
  const itemsCopy = [...items];
  return itemsCopy.reverse();
}
