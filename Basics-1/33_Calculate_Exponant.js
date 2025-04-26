/*
Calculating the Power of a Number
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to calculate the power of a number.
Example:
Input: base = 2, exponent = 3
Output: 8
Explanation: 2 raised to the power of 3 is 8.
*/

let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter The Base value : ", function(input1){
    let base = Number(input1);
    rl.question("Enter The Exponant value : ", function(input2){
        let exponent = Number(input2);
        console.log(`The Answer is : ${base**exponent}`);
        rl.close();
    });
});