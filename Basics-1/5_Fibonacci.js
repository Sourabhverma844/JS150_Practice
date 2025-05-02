/*
Generating the Fibonacci Series
Difficulty: Easy
Topics: Basic Programming, Sequences
Description: Write a program to generate the Fibonacci series up to a given number.
Example:
Input: limit = 10
Output: [0, 1, 1, 2, 3, 5, 8]
Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5, 8].
*/

let readline = require("readline");
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("Enter a Number : ", function(input){
    let limit = Number(input);
    if(isNaN(limit) || limit < 0){
        console.log("Please Enter a Valid Non-Negative Number.");
        rl.close();
    }
    let result = [];
    let a = 0, b = 1;
    if(limit >= 0) result.push(a);
    if(limit >= 1) result.push(b);

    while (true){
        let next = a+b;
        if(next > limit) break;
        result.push(next);
        a = b;
        b = next;
    }
    console.log(`Fibonacci Series Up To ${limit} is : ${result}.`);
    rl.close();
});
