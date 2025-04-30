/*
Determining the Length of a String Without Using Built-In Functions
Difficulty: Medium
Topics: String Manipulation
Description: Write a program to determine the length of a string without using built-in functions.
Example:
Input: string = "hello"
Output: 5
Explanation: The length of the string "hello" is determined without using built-in functions.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter a string : ", function(input){
    let word = input.split("");
    word.push(1);
    let length = word.indexOf(1);
    console.log(`Length of This String is : ${length}`);
    rl.close();
})