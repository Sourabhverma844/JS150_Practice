/*
Finding the Sum of Squares of Digits
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to find the sum of the squares of the digits of a number.
Example:
Input: number = 123
Output: 14
Explanation: The sum of the squares of digits is 1^2 + 2^2 + 3^2 = 14.
*/

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter The Number Till You Want Sum of Squares : ", function(input){
    let number = Number(input);
    sum = 0;
    for(let i = 0; i <= number; i++){
        sum += i**2;
    }
    console.log(sum);
    rl.close();
});