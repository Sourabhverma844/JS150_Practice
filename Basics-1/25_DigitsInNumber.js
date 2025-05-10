/*
Finding the Number of Digits in a Number
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to count the number of digits in a given number.
Example:
Input: number = 12345
Output: 5
Explanation: The number 12345 has 5 digits.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter The Number : ", function(input){
    let number = Number(input);
    if(isNaN(number) || !Number.isInteger(number)){
        console.log("please enter a valid integer");
        rl.close();
        return;
    }
    let absstring = Math.abs(number).toString();
    console.log(`The length of digits is : ${absstring.length}`)
    rl.close();
});