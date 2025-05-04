/*
Validating Leap Years
Difficulty: Easy
Topics: Basic Programming, Date Handling
Description: Write a program to check if a given year is a leap year.
Example:
Input: year = 2020
Output: Leap Year
Explanation: 2020 is divisible by 4 but not by 100, or it is divisible by 400, so it is a leap year.
*/

let readline = require("readline");
let r1 = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});


r1.question("Enter Your Year : ", function(input){
    let year = Number(input);
    if(isNaN(year)){
        console.log("Please Give me a Valid Number");
        r1.close();
        return;
    }
    else if((year%4 === 0) && (year%100 != 0) || (year%400 === 0)){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is "Not" a leap year`);
    }
    r1.close();
});
