/*
Finding the Count of Specific Digits in a Number
Difficulty: Easy
Topics: Basic Programming, String Manipulation
Description: Write a program to count the occurrences of a specific digit in a number.
Example:
Input: number = 122333, digit = 3
Output: 3
Explanation: The digit 3 occurs 3 times in the number 122333.
*/

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter The Number : ", function(input1){
    rl.question("Enter The Digit Who's no of occurence you want to find from number : ", function(input2){
        let sum = 0;
        for(let i = 0; i < input1.length; i++){
            if(Number(input1[i]) === Number(input2)){
                sum++;
            }
        }
        console.log(sum);
        rl.close();
    })
})