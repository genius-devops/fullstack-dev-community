/**
         * The while statement
         * The while statement or while loop is used to run a block of code as long as the condition evaluates to true.
         * You can define the condition and the statement for the loop as follows:
         * 
         * while (condition) {
         * statement;
         * }
         * 
         * 
         * 
        */

let i = 0;
while (i < 6) {
console.log(`The value of i = ${i}`);
i++;
}

let j = 0;
while (j < 6) {
console.log(`The value of j = ${j}`);
}


/**
 * Find out how many times you need to flip a coin until it lands on heads.
 * You also need to show how many times you flip the coin until it lands on heads:
 * 
*/


let flips = 0;
let isHeads = false;
while (!isHeads) {
flips++;
isHeads = Math.random() < 0.5;
}
console.log(`It took ${flips} flips to land on heads.`);

/**
 * Exercise #6
    Write a program that prints a half pyramid using asterisks * as shown below:
    *
    **
    ***
    ****
    *****
    Next, print a reverse half pyramid as follows:
    *****
    ****
    ***
    **
    *
*/
