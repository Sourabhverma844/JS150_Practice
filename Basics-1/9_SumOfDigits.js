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

rl.question("Enter a non-negative integer : ", function(input){
    if (!/^\d+$/.test(input)){
        console.log("Plese Enter a Valid Non-Negative Integer.")
        rl.close();
        return;
    }    
    let sum = 0;
    for(let char of input){
        sum += Number(char);
    }
    console.log("Sum of digits:", sum);
    rl.close();
});