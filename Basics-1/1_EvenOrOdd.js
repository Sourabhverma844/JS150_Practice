/*
Determining Even/Odd Numbers
Description: Write a program to check whether a number is even or odd.
Example:
Input: number = 4
Output: Even
Explanation: Since 4 is divisible by 2, it is an even number.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter Your Number : ", function(num){
    let number = Number(num);
    if(isNaN(number)){
        console.log("Please Enter a Valid Number.");
    }
    if(number%2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
    r1.close();
} );
