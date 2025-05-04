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
        a = parseInt(a);
        b = parseInt(b);

        if(isNaN(a) || isNaN(b) || a < 0 || b < 0){
            console.log("Please Enter Valid Non-Negative Number");
        }
        function findGDC(x,y){
            while(y!==0){
                let temp = y;
                y = x%y;
                x = temp;
            }
            return x;
        }

        const gdc = findGDC(a,b);
        console.log("GDC is : ",gdc);
        rl.close();
    });
});