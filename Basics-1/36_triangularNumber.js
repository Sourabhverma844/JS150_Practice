/*
Finding the N-th Triangular Number
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to find the N-th triangular number.
Example:
Input: N = 4
Output: 10
Explanation: The 4th triangular number is 10 (sum of the first 4 natural numbers).
*/

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Give a number place for knowing triangular number : ", function(input){
    number = Number(input);
    let triangularNumber = 0;
    for(let i = 1; i <= number; i++){
        triangularNumber += i;
    }
    console.log(triangularNumber);
});
