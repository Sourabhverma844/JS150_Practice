/*
Finding the Least Common Multiple (LCM)
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to find the LCM of two numbers.
Example:
Input: a = 12, b = 15
Output: 60
Explanation: The LCM of 12 and 15 is 60
*/
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter The Value of a : ", function(inputa){
    rl.question("Enter The Value of b : ",function(inputb){
        if(!/^\d+$/.test(inputa) || !/^\d+$/.test(inputb)){
            console.log("Enter a Valid Non-Negative Integer.");
            rl.close();
            return;
        }
        let a = Number(inputa);
        let b = Number(inputb);

        function FindGDC(x,y){
            while(y!==0){
                let temp = y;
                y = x%y;
                x = temp;
            }
            return x;
        }
        const gdc = FindGDC(a,b);
        const lcm = (a*b)/gdc;
        console.log(`Lcm of ${a} and ${b} is : ${lcm}`);
        rl.close();
    });
});