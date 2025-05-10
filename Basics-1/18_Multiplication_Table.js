/*
Generating Multiplication Tables
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to generate multiplication tables for a given number.
Example:
Input: number = 4
Output:

4 x 1 = 4  
4 x 2 = 8  
4 x 3 = 12  
4 x 4 = 16  
4 x 5 = 20  
Explanation: The multiplication table for 4 up to 5 is generated.
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter The Number : ", function(input){
    let number = Number(input);

    if(isNaN(number)){
        console.log("Please Enter Valid Integar values.");
        rl.close();
        return;
    }
    for(let i = 1; i <= 10; i++){
        console.log(`${number} * ${i} =`,number*i);
    }
    rl.close();
});







