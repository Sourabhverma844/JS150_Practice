/*
Determining Even/Odd Numbers
Description: Write a program to check whether a number is even or odd.
Example:
Input: number = 4
Output: Even
Explanation: Since 4 is divisible by 2, it is an even number.
*/ 

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter number : ",function(input){
    let value = Number(input);
    if(value%2==0){
        console.log("No is even");
    }
    else{
        console.log("no is odd");
    }
    rl.close();
});