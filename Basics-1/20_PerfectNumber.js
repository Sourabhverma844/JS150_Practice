/*
Checking for Perfect Numbers
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to determine if a number is a perfect number.
Example:
Input: number = 28
Output: Perfect Number
Explanation: 28 is a perfect number because its divisors (1, 2, 4, 7, 14) sum up to 28.
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter The Number You Want To Check, Is a Perfect Number Or Not: ", function(input){
    const number = Number(input);
    if(isNaN (number)){
        console.log("Please Enter Valid Integer Number");
        rl.close();
        return;
    }
    let sum = 0;
    for(let i = 1; i < number; i++){
        if(number%i === 0){
            sum += i;
        }
    }
    if(number === sum){
        console.log(`${number} is a perfect number !`);
    }
    else{
        console.log(`${number} is "not" a perfect number !`);
    }
    rl.close();
});