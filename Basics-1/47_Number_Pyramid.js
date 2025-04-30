/*
Generating a Number Pyramid
Difficulty: Medium
Topics: Patterns, Basic Programming
Description: Write a program to generate a pyramid of numbers (e.g., 1, 12, 123, etc.).
Example:
Input: rows = 4
Output:

1  
12  
123  
1234  
Explanation: A number pyramid with 4 rows is generated
*/

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter Number for Number Pyramid : ",function(input){
    for(let i = 1; i <= input; i++){
        for(let j = 1; j<= i; j++){
            console.log("\n ",j);
        }
    }
    rl.close();
})