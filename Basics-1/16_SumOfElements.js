/*
Finding the Sum of Elements in an Array
Difficulty: Easy
Topics: Basic Programming, Arrays
Description: Write a program to find the sum of elements in an array.
Example:
Input: array = [1, 2, 3, 4, 5]
Output: 15
Explanation: The sum of the elements in the array is 15.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter The Numbers Seprated By Comma(,) : ", (input) => {
    const sum = input.split(',').map(val => Number(val.trim())).reduce((acc,curr) => acc+curr,0);
    console.log(`The Sum of Values is : ${sum}`);
    rl.close();
});