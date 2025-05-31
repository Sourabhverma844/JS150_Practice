/*
Sorting an Array
Difficulty: Easy
Topics: Basic Programming, Sorting Algorithms
Description: Write a program to sort an array of numbers in ascending order.
Example:
Input: array = [3, 1, 4, 1, 5, 9]
Output: [1, 1, 3, 4, 5, 9]
Explanation: The array sorted in ascending order is [1, 1, 3, 4, 5, 9].
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("Enter the numbers separated by commas: ", function(input) {
    let array = input.split(",").map(val => Number(val.trim()));
    
    // Check for NaN values
    if (array.some(val => isNaN(val))) {
        console.log("Please enter only valid integers.");
        rl.close();
        return;
    }

    array.sort((a, b) => a - b);
    console.log("Sorted array:", array);
    rl.close();
});
