/*
Checking for Armstrong Numbers in a Range
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to find all Armstrong numbers within a given range.
Example:
Input: range = [1, 500]
Output: [1, 153, 370, 371, 407]
Explanation: Armstrong numbers between 1 and 500 are 1, 153, 370, 371, and 407.
*/ 
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
console.log(`"Enter the starting and ending values, and we will display all the Armstrong numbers within that range."`);

rl.question("Enter The Starting Value : ", function(input1){
    const Start = Number(input1);

    rl.question("Enter The Ending Value : ", function(input2){
        const End = Number(input2);

        if(isNaN(Start) || isNaN(End)){
            console.log("Enter Valid Integar value.");
            rl.close();
            return;
        }

        const armstrongNumber = [];

        for(let num = Start; num <= End; num++){
            if(num > 1 && num <= 9){
                continue;
            }

            const digit = num.toString().split('').map(Number);
            let power = digit.length;
            const sum = digit.reduce((acc, digit) => acc + digit**power,0);

            if(sum === num){
                armstrongNumber.push(num);
            }
        }
        console.log(armstrongNumber);
        rl.close();
    });
});