/*
Calculating Armstrong Numbers
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to check if a number is an Armstrong number.
Example:
Input: number = 153
Output: Armstrong Number
Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.
*/
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question("Enter your number: ", function (input) {
  const number = Number(input);
  
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
    r1.close();
  }

  const numStr = input;
  const power = numStr.length;
  let sum = 0;

  for (let i = 0; i < power; i++) {
    sum += Number(numStr[i]) ** power;
  }

  if (sum === number) {
    console.log(`${number} is an Armstrong number.`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }

  r1.close();
});
