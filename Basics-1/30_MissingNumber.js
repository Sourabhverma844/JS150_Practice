/*
Finding Missing Numbers in a Sequence
Difficulty: Easy
Topics: Basic Programming, Arrays
Description: Write a program to find missing numbers in a sequence from 1 to n.
Example:
Input: sequence = [1, 2, 4, 5]
Output: [3]
Explanation: The missing number in the sequence from 1 to 5 is 3.
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter The numbers seprated by comma , : ", function(input){
    let sequence = input.split(",").map(Number);
    let max = Math.max(...sequence);
    let missing = [];
    
    for(let i = 1; i <= max; i++){
        if(!sequence.includes(i)){
            missing.push(i);
        }
    }
    console.log(missing);
    rl.close(); 
});
