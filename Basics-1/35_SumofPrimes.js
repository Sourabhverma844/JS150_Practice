/*
Finding the Sum of Prime Numbers in a Range
Difficulty: Medium
Topics: Number Theory, Mathematical Computations
Description: Write a program to calculate the sum of all prime numbers within a given range.
Example:
Input: range = [1, 10]
Output: 17
Explanation: The sum of prime numbers between 1 and 10 is 2 + 3 + 5 + 7 = 17.
*/
let readline = require("readline");
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
console.log("Enter The First and Last Values & we Will Calculate The Sum Of all Prime Numbers Within That Range.")
let AllPrime = [];


rl.question("Enter The First Value : ", function(input1){
    Start = Number(input1);
    rl.question("Enter The Last value : ", function(input2){
        End = Number(input2);
        
        for(let i = Start; i <= End; i++){
            if(i < 2) continue;
            isPrime = true;
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i%j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                AllPrime.push(i);
            }
        }
        const sum = AllPrime.reduce((acc, val) => acc + val,0);
        console.log("Prime numbers are", AllPrime);
        console.log("Sum of Prime numbers are", sum);
        rl.close();
    })
})