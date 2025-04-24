/*
Summing Digits of a Number
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to calculate the sum of digits of a number.
Example:
Input: number = 1234
Output: 10
Explanation: The sum of the digits 1 + 2 + 3 + 4 = 10
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter The Number : ", function(input){
    const numbers = input.split("").map(Number);
    let sum = 0;
    for(let i = 0;i<numbers.length;i++){
        sum += numbers[i];
    }
    console.log(sum);
    rl.close();
});