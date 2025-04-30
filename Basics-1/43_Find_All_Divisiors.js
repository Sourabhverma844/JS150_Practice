/*
Finding All Divisors of a Number
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to find all divisors of a given number.
Example:
Input: number = 12
Output: 1, 2, 3, 4, 6, 12
Explanation: The divisors of 12 are 1, 2, 3, 4, 6, and 12.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter The Number : ", function(input){
    number = Number(input);
    let sum;
    Divisors = [];
    for(let i = 0; i <= number; i++){
        if(number%i === 0){
            Divisors.push(i);
        }
    }
    console.log("all The Divisiors are : ",Divisors);
})