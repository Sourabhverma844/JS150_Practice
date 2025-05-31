/*
Finding Prime Numbers in a Range
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to find all prime numbers within a given range.
Example:
Input: range = [10, 30]
Output: [11, 13, 17, 19, 23, 29]
Explanation: Prime numbers between 10 and 30 are 11, 13, 17, 19, 23, and 29.
*/ 
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter The \"Initial Value\" Of Range Under Which You Want Prime Number : ", function(input1){
    let Initial = Number(input1);
    rl.question("Enter The \"Last Value\" Of Range Under Which You Want Prime Number : ", function(input2){
        let Last = Number(input2);
        let AllPrime = [];

        if(isNaN(Initial) || isNaN(Last)){
            console.log("Please Enater Valid Integer Value.");
            rl.close();
            return;
        }
        for(let i = Initial; i <= Last; i++){
            if(i < 2) continue;
            let isPrime = true;
            for(let j = 2; j < i; j++){
                if(i%j == 0){
                    isPrime = false;
                }
            }
            if(isPrime){
                AllPrime.push(i);
            }
        }
        console.log(AllPrime);
        rl.close();
    });
});