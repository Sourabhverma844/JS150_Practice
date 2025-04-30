/*
Checking for Perfect Squares
Difficulty: Easy
Topics: Mathematical Computations
Description: Write a program to determine if a number is a perfect square.
Example:
Input: number = 16
Output: True
Explanation: 16 is a perfect square (4^2 = 16)
*/
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter The Number To it is perfect square of not : ", function(input){
    number = Number(input);
    let perfectSquare = false;
    for(let i = 1 ; i <= number/2 ; i++){
        if(number/i == i){
            console.log(`${number} is a perfect square number`);
            console.log(`square root of ${number} is ${i}`);
            perfectSquare = true;
            break;
        }
    }
    if(!perfectSquare){
        console.log(`${number} is "Not" a perfect square number`);
    }
    rl.close();
});