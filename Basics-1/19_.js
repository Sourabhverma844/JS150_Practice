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
        AllNumbers = [];
        for(let i = Initial; i = Last; i++){
            AllNumbers.push(i);
        }
        for(let i = 0; i < AllNumbers.length; i++){
            let isprime = true;
            for(let j = 2; j < AllNumbers[i]; j++){
                if(AllNumbers[i]%j === 0){
                    isprime = false;
                    break;
                }
            }
            if(isprime){
                console.log(AllNumbers[i]);
            }
        }
        rl.close();
    });
});