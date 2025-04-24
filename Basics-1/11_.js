/*
Finding the Least Common Multiple (LCM)
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to find the LCM of two numbers.
Example:
Input: a = 12, b = 15
Output: 60
Explanation: The LCM of 12 and 15 is 60
*/
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter The Value of a : ", function(inputa){
    a = Number(inputa);
    rl.question("Enter The Value of b : ",function(inputb){
        b = Number(inputb);
        
        
        rl.close();
    });
});