/*
Finding the Fibonacci Number at a Specific Position
Difficulty: Easy
Topics: Basic Programming, Sequences
Description: Write a program to find the Fibonacci number at a specific position.
Example:
Input: position = 5
Output: 5
Explanation: The Fibonacci number at position 5 is 5 (sequence: 0, 1, 1, 2, 3, 5).
*/ 

const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Enter The Position To Get The Fibonacci Number : ", function(input){
    const n = Number(input);
    let fibonum = [];
    if(isNaN(n) || n < 0){
        console.log("please enter valid +ve integer value.");
        rl.close();
        return;
    }
    if(n === 0){
        console.log(0);
        rl.close();
        return;
    }
    if(n === 1){
        console.log(1);
        rl.close();
        return;
    }

    let a = 0;
    let b = 1;

    for(let i = 2; i <=n; i++){
        [a,b] = [b,a+b];
    }
    console.log(b);
    rl.close();
});