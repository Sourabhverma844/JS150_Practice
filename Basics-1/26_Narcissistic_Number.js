/*
Checking if a Number is a Narcissistic Number
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to check if a number is a narcissistic number (where the sum of its digits raised to the power of the number of digits equals the number itself).
Example:
Input: number = 153
Output: Narcissistic Number
Explanation: 153 is a narcissistic number because 1^3 + 5^3 + 3^3 = 153
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter The Number : ", function(input){
    n = input.length;
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        sum = sum + input[i]**n;
    }
    if(Number(input) === sum){
        console.log(`${input} is Narcissistic Number`);
    }
    else{
        console.log(`${input} is "Not" Narcissistic Number`);
    }
});
