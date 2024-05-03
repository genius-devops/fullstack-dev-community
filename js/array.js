
        // declearing empty array
        let emptyArray = [];
        
        // mixed array
        let mixedArray = ['Bird', true, 1, 2, 3, 6];
        
        
        // accessing element from an array
        let birds = ['owl', 'parrot', 'eagle', 'falcon', 'pigeon'];
        console.log(birds.length); // getting the length of birds
        console.log(birds[0]);
        console.log(birds[1]);
        console.log(birds[2]);
        console.log(birds[3]);
        console.log(birds[4]);
        
        // Let's replace 'Parrot' with 'Vulture':
        birds[1] = 'Vulture';
        console.log(birds);

        // Special methods for array manipulation
        // using push to add an item to an end
        birds.push('Sparrow');
        console.log(birds);

        // using pop to remove the last item
        birds.pop();
        console.log(birds);

        // using unshift to add an item from the first index ie index 0
        birds.unshift('8899')
        console.log(birds);

        // using shift to remove an item from index 0
        birds.shift('8899')
        console.log(birds);

        /**
         * The indexOf() method can be used to find and return the index of an item in the array.
         * The method will return -1 when the item isn't found inside the array: 
         * Note that we don't add parentheses next to the length keyword above. 
         * This is because length is a property of the array object and not a method.
        */
        let fishes = ['Salmon', 'Goldfish', 'Tuna'];
        let pos = fishes.indexOf('Tuna');
        console.log(pos); // 2

        // To get the size of an array, you can access the length property:
        console.log(fishes.length); //3

        /**
         * Create an array named colors that include the 'red', 'green, and 'blue' colors.
         * First, add a 'black' color after the last index of the array. Then print the array.
         * Next, remove the value 'red' and swap the position of 'green' and 'blue'. Print the array.
         * Finally, add the color 'yellow' on the first index of the array, then print the array.
         * The result output is as follows:
         * [ 'red', 'green', 'blue', 'black' ]
         * [ 'blue', 'green', 'black' ]
         * [ 'yellow', 'blue', 'green', 'black' ]
         * You need to modify the original array using the methods explained in this section.
        */
        // using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

        let colors = ['red', 'green', 'blue'];
        // adding black color to the last index
        colors.push('black')
        console.log(colors);

        // removing the red color the index 0
        colors.unshift('red');
        console.log(colors);
        
        // adding yellow color to the index 0
        colors.shift('yellow');
        console.log(colors);

        // 11 - Control Flows (Conditionals) in JavaScript
        // There are two types of control flows commonly used in JavaScript: conditionals and loops.
        // Suppose you want to go on a vacation that requires 5000 dollars.

        var bal = 7000;
        if (bal > 5000) {
        console.log("You have the money for this trip. Let's go!");
        console.log("The end!"); // this code will execute only when the condition is true.(local scope)
        }
        console.log("The end!"); // this code will execute no matter what (global scope)

        /**
         * This is where the else statement comes in. 
         * The else statement is used to run code only when the if statement is not fulfilled.
        */

        let balance = 7000;
        if (balance > 5000) {
        console.log("You have the money for this trip. Let's go!");
        } else {
        console.log("Sorry, not enough money. Save more!");
        }
        console.log("The end!");

        // another condition
        if (balance > 5000) {
        console.log("You have the money for this trip. Let's go!");
        } else if (balance > 3000) {
        console.log("You only have enough money for a staycation");
        } else {
        console.log("Sorry, not enough money. Save more!");
        }


//1. concate method in array
let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]
let c = a.concat(b)
console.log(c);

//2. adding an item to the last 'push'
c.push(11)
console.log(c);

//3. adding an item to the first index
c.unshift(0)
console.log(c);

//4. removing  last item using pop
c.pop()
console.log(c);

//5. removing first index using shift
c.shift()
console.log(c);

//6. using join method 
f = a.join('_')
console.log(f);
f = c.join(' + ')
console.log(f);

//7. using sort() method
let x = ['c', 'd', 'r', 'g', 'h', 'i']
x.sort()
console.log(x);

//8. using reverse() rearrange items in anti clock manner.
x.reverse()
console.log(x);


// mutation
// num1.push(4) will be added to both num1 and num2. bcos modifies original result
let num1 = [1, 2, 3]
let num2 = num1.push(4)
console.log(num2);

/**
 * some actions mutate an array(eg | oldArray.push(newvalue))
 * other actions do not mutate the original array, but instead create a new copy(eg | oldArray.concat(otherArray))
 */

const op = [4, 6]
const sum = op[0] + op[1]
console.log(sum);

op[0] = 5
const newSum = op[0] + op[1]
console.log(newSum);

// function decleration
function greeting(){console.log('hello Adams');}

// function expresion
const greet = function () {console.log('hello Adams');}

// arrow funtion
const greetAgain = () => {console.log('mi Adams');;}

// function with return statement
const sums = () => {return 2 + 2}
const resultSums = sums()

function addition(num1, num2){return num1 + num2}
const addRes = addition()



// loops
for(i = 0; i < 5; i++){console.log('hi');}

const cars = ['toyot', 'Benz', 'Ferarri', 'BMW'];
for(i = 0; i < cars.length; i++){console.log(cars[i]);}


const students = [
        
]