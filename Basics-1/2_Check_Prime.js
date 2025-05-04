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
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter Your Number : ", function(input){
    let number = Number(input);

    if(isNaN(number)){
        console.log("Enter a Valid Number.");
        rl.close();
        return;
    }
    else if(number <= 1){
        console.log(`${number} is Not a Prime Number`);
    }
    else{
        let isprime = true;
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number%i === 0){
                isprime = false;
                break;
            }
        }
        console.log(isprime ? `${number} is a prime number` : `${number} is not a prime number`);
    }
    rl.close();
});
