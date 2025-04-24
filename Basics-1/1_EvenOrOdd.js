/*
Determining Even/Odd Numbers
Difficulty: Easy
Topics: Basic Programming
Description: Write a program to check whether a number is even or odd.
Example:
Input: number = 4
Output: Even
Explanation: Since 4 is divisible by 2, it is an even number.
*/

const line = require("readline");

const r1 = line.createInterface({
    input : process.stdin,
    output : process.stdout
})


r1.question("Enter Your Number : ", function(num){
    number = Number(num);
    if(number%2 == 0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
    r1.close();
} );
