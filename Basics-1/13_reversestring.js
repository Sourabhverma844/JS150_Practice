/*
Reversing a String
Difficulty: Easy
Topics: Basic Programming, String Manipulation
Description: Write a program to reverse a given string.
Example:
Input: string = "programming"
Output: "gnimmargorp"
Explanation: The reversed string of "programming" is "gnimmargorp".
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter The String : ", function(input){
    str = "";
    for(let i = input.length-1; i >= 0; i--){
        str = str + input[i];
    }
    console.log(str);
    rl.close();
});