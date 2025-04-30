/*
Finding the Sum of Prime Factors of a Number
Difficulty: Medium
Topics: Number Theory, Mathematical Computations
Description: Write a program to find the sum of the prime factors of a given number.
Example:
Input: number = 12
Output: 5
Explanation: The prime factors of 12 are 2 and 3, and their sum is 2 + 3 = 5.
*/

const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter The Number, I will Provide You sum of prime factors of that number : ", function(input){
    let GivenNumber = Number(input);
    let FactorsofGivenNumber = [];
    let isPrime = true;
    let PrimeNumber = [];
    let sum = 0;

    for(let i = 2; i < input; i++){
        if(input%i == 0){
            FactorsofGivenNumber.push(i);
        }
    }
    for(let i = 0 ; i < FactorsofGivenNumber.length ; i++){
        for(let j = 2; j < FactorsofGivenNumber[i]; j++){
            if(FactorsofGivenNumber[i]%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            PrimeNumber.push(FactorsofGivenNumber[i]);
        }
    }
    for(let i = 0; i < PrimeNumber.length; i++){
        sum += PrimeNumber[i];
    }
    console.log(sum);
    rl.close();
});
