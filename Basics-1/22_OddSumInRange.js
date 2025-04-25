/*
Calculating the Sum of Odd Numbers in a Range
Difficulty: Easy
Topics: Basic Programming, Mathematical Computations
Description: Write a program to find the sum of all odd numbers within a given range.
Example:
Input: range = [1, 10]
Output: 25
Explanation: The sum of odd numbers between 1 and 10 is 1 + 3 + 5 + 7 + 9 = 25.
*/

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
console.log("Enter the first and last numbers of the range, and we will calculate the sum of all odd numbers within that range, including both endpoints.")
rl.question("Enter The First Value : ", function(a){
    let First = Number(a);
    rl.question("Enter The Last Value : ", function(b){
        let Last = Number(b);
        let sum = 0;
        for(let i = First; i <= Last; i++){
            if(i%2 !==0){
                sum += i;
            }
        }
        console.log(sum)
        rl.close();
    })
});