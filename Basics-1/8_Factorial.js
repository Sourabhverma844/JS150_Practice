/*
Finding the Factorial of a Number
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to compute the factorial of a given number.
Example:
Input: number = 5
Output: 120
Explanation: 5! (factorial) is 5 × 4 × 3 × 2 × 1 = 120./
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter The Number : ", function(input){
    number = Number(input);
    let sum = 1;
    for (let i=1; i<=number;i++){
        sum = sum*i;
    }
    console.log(sum);
    rl.close();
});