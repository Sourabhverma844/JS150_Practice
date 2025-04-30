/*
Finding the Average of Numbers in an Array
Difficulty: Easy
Topics: Arrays, Mathematical Computations
Description: Write a program to calculate the average of numbers in an array.
Example:
Input: array = [1, 2, 3, 4, 5]
Output: 3
Explanation: The average of the numbers is (1 + 2 + 3 + 4 + 5) / 5 = 3.
*/

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter The Elements of Array Seprated By comma , and I will Give You Avg of That Numbers : ", function(input){
    AllNumbers = input.split(",").map(Number);
    let sum = 0;
    for(let i = 0; i < AllNumbers.length; i++){
        sum += Number(AllNumbers[i]);
    }
    console.log(sum / AllNumbers.length);

    rl.close();
});