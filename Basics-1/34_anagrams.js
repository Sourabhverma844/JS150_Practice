/*
Checking for an Anagram
Difficulty: Easy
Topics: String Manipulation
Description: Write a program to check if two strings are anagrams.
Example:
Input: string1 = "listen", string2 = "silent"
Output: True
Explanation: "listen" and "silent" are anagrams of each other.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter First String : ", function(input1){
    rl.question("Enter Second String : ", function(input2){
        if (input1.length !== input2.length){
            console.log("Both Strings lengths are diffrent please input both the strings with same length");
        }
        let anagrams = true;
        for(let i = 0; i < input2.length; i++){
            if(!input1.includes(input2[i])){
                anagrams = false;
            }
        }
        if(anagrams){
            console.log(`"${input1}" and "${input2}" are anagrams of each other`);
        }
        else{
            console.log(`"${input1}" and "${input2}" are "not" anagrams of each other`);
        }
        rl.close();
    });
});