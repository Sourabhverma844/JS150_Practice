/*
Printing Prime Numbers Less Than a Given Number
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to print all prime numbers less than a given number.
Example:
Input: number = 20
Output: 2, 3, 5, 7, 11, 13, 17, 19
Explanation: The prime numbers less than 20 are 2, 3, 5, 7, 11, 13, 17, and 19.
*/ 

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter The Value Till You Want Prime Numbers : ", function(input){
    let limit = Number(input);
    if(isNaN(limit) || limit < 2){
        console.log("Enter a Valid Positive Integer Grater Than 1.");
        rl.close();
        return;
    }

    
    let allprime = [];

    for(let i = 2; i <= limit; i++){
        let isPrime = true;
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i%j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            allprime.push(i)
        }
    }
    console.log(allprime);
    rl.close();
});