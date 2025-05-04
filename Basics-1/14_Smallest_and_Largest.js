/*
Finding the Largest and Smallest Numbers in an Array
Difficulty: Easy
Topics: Basic Programming, Arrays
Description: Write a program to find the largest and smallest numbers in an array.
Example:
Input: array = [4, 7, 1, 8, 5]
Output: Largest: 8, Smallest: 1
Explanation: The largest number in the array is 8 and the smallest is 1
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Your Numbers Seprated By comma: ", function(input){
    let array = input.split(",").map(val => Number(val.trim()));

    for(let i = 0; i < array.length; i++){
        if(isNaN(array[i])){
            console.log("Please Enter Integers Only.");
            rl.close();
            return;
        }
    }

    let Largest = Math.max(...array);
    let Smallest = Math.min(...array);

    console.log(`Largest : ${Largest} \nSmallest : ${Smallest} `);
    rl.close();
});