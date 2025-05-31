/*
Calculating the Sum of Even Numbers in a Range
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to find the sum of all even numbers within a given range.
Example:
Input: range = [1, 10]
Output: 30
Explanation: The sum of even numbers between 1 and 10 is 2 + 4 + 6 + 8 + 10 = 30.
*/ 

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log("Enter the first and last numbers of the range, and we will calculate the sum of all even numbers within that range, including both endpoints.")
rl.question("Enter The First Value : ", function(a){
    const First = Number(a);
    rl.question("Enter The Last Value : ", function(b){
        const Last = Number(b);

        if(isNaN(First) || isNaN(Last)){
            console.log("Enter Valid Integer Value.")
            rl.close();
            return;
        }
        
        let sum = 0;
        for(let i = First; i <= Last; i++){
            if(i%2===0){
                sum += i;
            }
        }
        console.log(sum)
        rl.close();
    })
});