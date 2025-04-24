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

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


rl.question("Enter a number : ", function(input){
    number = Number(input);
    arr = [];
    let a = 0;
    let b = 1;
    arr.push(a);
    arr.push(b);
    for(let i = 2; i <=number+1; i++){
        arr[i] = arr[i-2] + arr[i-1];
    }
    console.log(arr);
    rl.close();
});
