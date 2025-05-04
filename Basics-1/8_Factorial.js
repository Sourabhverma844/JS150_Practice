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
    let number = Number(input);
    if(isNaN(number) || number < 0 || !Number.isInteger(number)){
        console.log("Please enter a valid non-negative integer.");
        rl.close();
        return;
    }
    let Factorial = 1;
    for (let i=1; i<=number;i++){
        Factorial = Factorial*i;
    }
    console.log(Factorial);
    rl.close();
});