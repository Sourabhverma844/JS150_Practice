/*
Calculating Armstrong Numbers
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to check if a number is an Armstrong number.
Example:
Input: number = 153
Output: Armstrong Number
Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.
*/

let readline = require("readline");
let r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


r1.question("Enter Your Number : ", function(input){
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        pow = input.length;
        sum += input[i] ** pow;
    }
    if(Number(input) === sum){
        console.log(`${input} is an armstrong number`);
    }
    else{
        console.log(`${input} is not an armstrong number`);
    }
    r1.close();
});
