/*
Calculating the Sum of Digits of a Number Until Single Digit
Difficulty: Medium
Topics: Mathematical Computations
Description: Write a program to keep summing the digits of a number until a single digit is obtained.
Example:
Input: number = 9875
Output: 2
Explanation: The sum of digits is 9 + 8 + 7 + 5 = 29, and then 2 + 9 = 11, and finally 1 + 1 = 2.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Give me a number : ", function(input){
    Numbers = input.split("").map(Number);
    let sum;
    if(Numbers.length >= 0){
        for(let i = 0; i < Numbers.length; i++){
            sum = sum + Number(Numbers[i]);
        }
    }
    console.log(sum);
    rl.close();
});