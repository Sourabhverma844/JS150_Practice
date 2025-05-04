/*
Finding the Greatest Common Divisor (GCD)
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to find the GCD of two numbers.
Example:
Input: a = 48, b = 18
Output: 6
Explanation: The GCD of 48 and 18 is 6.
*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter The Value of a : ", function(a){
    rl.question("Enter The Value of b : ", function(b){
        let GreatestDivision = 1;
        let limit = 1;
        if(a>b){
            limit = b;
        }
        else{
            limit = a;
        }
        for(let i = 1; i <= limit; i++){
            if((a%i==0) && (b%i==0)){
                GreatestDivision = i;
            }
        }
        console.log(GreatestDivision);
        rl.close();
    });
});