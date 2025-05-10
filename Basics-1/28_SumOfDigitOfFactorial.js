/*
Finding the Sum of the Digits of the Factorial of a Number
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to find the sum of the digits of the factorial of a given number.
Example:
Input: number = 4
Output: 9
Explanation: The factorial of 4 is 24, and the sum of the digits (2 + 4) is 6.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter The Number : ", function(input){
    number = Number(input);
    
    let fact = 1;
    let sum = 0;
    for(let i = 1; i <= input; i++){
        fact *= i;
    };
    factS = fact.toString();
    for(let i=0; i<factS.length;i++){
        sum += Number(factS[i]);
    }
    console.log(sum)
    rl.close();
});