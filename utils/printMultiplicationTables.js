/*
 ** 2. Print a table containing multiplication tables
 ** Let's start with the tables that many of us had to memorize in school.
 ** Can you print a table that contains all the answers to the multiplication tables from 1 through 10?
 */
export function printMultiplicationTables() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const tables = {};
  numbers.forEach((num1, index) => {
    if (!tables[num1]) tables[num1] = {};
    numbers.slice(index).forEach((num2) => {
      const result = num1 * num2;
      if (!tables[num2]) tables[num2] = {};
      tables[num1][num2] = result;
      tables[num2][num1] = result;
    });
  });
  console.table(tables);
}

printMultiplicationTables();

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < numbers.length; i += 1) {
//   console.log(`${i} x ${numbers[i - 1]} = ${i * numbers[i - 1]}`);
// }
// }
// printMultiplicationTables();
