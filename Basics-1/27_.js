/*
Generating a Pattern of Numbers
Difficulty: Easy
Topics: Basic Programming, Patterns
Description: Write a program to generate number patterns (e.g., sequential numbers in a matrix).
Example:
Input: rows = 3
Output:

1  
2 3  
4 5 6  
Explanation: A number pattern with 3 rows is generated
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of rows: ", function(rows) {
    rows = parseInt(rows); // convert string to number
    let num = 1;

    for (let i = 1; i <= rows; i++) {         // Outer loop for rows
        let row = "";
        for (let j = 1; j <= i; j++) {        // Inner loop prints i numbers in each row
            row += num + " ";
            num++;
        }
        console.log(row);                     // Print the constructed row
    }

    rl.close(); // Close the input interface
});