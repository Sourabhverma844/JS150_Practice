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
    let vowels = 0;
    let consonants = 0;
    let cleanedInput = input.toLocaleLowerCase();

    for(let char of cleanedInput){
            if(/[a-z]/.test(char)){
                if("aeiou".includes(char)){
                    vowels++;
                }
                else{
                    consonants++;
                }
            }
    }
    console.log(`vowels : ${vowels} \n consonants : ${consonants}`);
    rl.close();
});