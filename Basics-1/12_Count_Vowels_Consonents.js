/*
Counting Vowels and Consonants in a String
Difficulty: Easy
Topics: Basic Programming, String Manipulation
Description: Write a program to count vowels and consonants in a given string.
Example:
Input: string = "hello world"
Output: Vowels: 3, Consonants: 7
Explanation: "hello world" contains 3 vowels (e, o, o) and 7 consonants (h, l, l, w, r, l, d).
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Your Word : ", function(input){
    let Vowels = 0;
    let Consonants = 0;
    for(let i=0; i < input.length; i++){
            let char = input[i];
            if(/[a-zA-Z]/.test(char)){
                if("aeiouAEIOU".includes(char)){
                    Vowels++;
                }
                else{
                    Consonants++;
                }
            }
    }
    console.log(Vowels);
    console.log(Consonants);
    rl.close();
});