/*
Identifying Palindromes
Difficulty: Easy
Topics: Basic Programming, String Manipulation
Description: Write a program to check if a string or number is a palindrome.
Example:
Input: string = "radar"
Output: Palindrome
Explanation: "radar" reads the same backward as forward
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter Your String or Number : ", function(input){
    let str = "";
    for(let i = input.length-1; i >= 0 ; i--){
        str += input[i];
    }
    if(str === input){
        console.log(`${input} is a palindrome`);
    }
    else{
        console.log(`Not is a palindrome`);
    }
    rl.close();
});
