/*
Crafting Star Patterns
Difficulty: Easy
Topics: Basic Programming, Patterns
Description: Write a program to create different star patterns (e.g., pyramid, diamond).
Example:
Input: patternType = "pyramid", height = 5
Output:
    *
   ***
  *****
 *******
*********
*/

let readline = require("readline");
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter The Line Height For Pyramid : ", function(input){
    let Height = Number(input);
    if(isNaN(Height) || Height <= 0){
        console.log("Please Enter a Valit +ve Number");
        rl.close();
        return;
    }
    for(let i = 1; i <= Height; i++){
        let Space = " ".repeat(Height-i);
        let Star = "*".repeat(2*i - 1);
        console.log(Space+Star);
    }

    rl.close();
});
