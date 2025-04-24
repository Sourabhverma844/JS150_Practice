/*
Checking for Prime Numbers
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to determine if a number is prime.
Example:
Input: number = 7
Output: Prime
Explanation: 7 has no divisors other than 1 and itself, so it is a prime number.
*/

const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
let isprime = true;
r1.question("Enter Your Number : ", function(input){
    number = Number(input);
    for(let i = 2; i < number; i++){
        if(number%i === 0){
            console.log("not prime");
            isprime = false;
            break;
        }
    }
    if(isprime){
        console.log("prime");
    }
    r1.close();
});
