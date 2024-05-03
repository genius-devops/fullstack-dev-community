// a short note of javascript the definite guide
let prime = [2, 3, 5, 7, 11];

prime[prime.length-1]; // => 11  return the last index

prime[prime.length] // returns undefined because the length is 5 while we use index to access the value of prime and ends at index 4 so the 5 is undefined

prime[0] + prime[1] // => 2 + 3 = 5

function fact(x){
    if(x > 1) return x * fact(x - 1);
    else return 1
}
fact(4) // => 24

fact(5) //=> 125

fact(6) //720

// using advanced method to acchieve this recursive function of finding factorial
const facts = x => (x > 1)? x * facts(x - 1) : 1 // facts(3) => 3 i.e 3 * 2

let x = 2, y = 3; // => x + y => 5

(x === 2) && (y === 3) // => true: i.e the both condition must evaluate to true for && operator

(x > 3) || (y < 3) // => false: or || operator check for two condition and return atleat one true condition while the both conditions are false

console.log("Hello Worldd!");

/**
 * $ node snippet.js  | running javascrippt using node and code editor | and developer tools console.
 * console.log() is function that be used to view text and other javascript values form terminals eg
 * Anything following double slashes is an English-language comment.
 * Read the comments carefully: they explain the JavaScript code.
 */

// javascript support severals type of value without explicitly ddeclearing the type instead of let int x = 2, let ddouble y = 3.5
// js types
let nums;
nums = "Hello World!";
nums = "JavaScript";
nums = true;
nums = false;
nums = null;
nums = undefined
nums = "30";
nums = 50;
nums = 3.5
nums = [22, 33, 55, 77, 88]


nums = {nums} // => destructuring object the property = nums, value = [22, 33, 55, 77, 88]
nums.add = "Adams"; //nums = {nums: [22, 33, 55, 77, 88], add: Adams}



// object comprehension

const profile = {firstName: "Adams", lastName: "Labaran", age: 2020}

// using dot (.) method to access and manipulate profile
profile.firstName;
profile.firstName = "Anthony"; // {firstName: Anthony, lastName: Labaran, age: 2020}

profile.phone = +2347033114952;
profile.age = 25
profile.contact = {address: {addr1:"Lafia, Nigeria", addr2:"daytona beach, Florida"}};

// using [] to access and manipulatte obj
profile["firstName"];
profile["firstName"] = "Anthony";

profile["phone"];
profile["phone"] = +2347033114952;

profile["age"] = 506;

profile["contact"] // {address: {addr1:'Lafia, Nigeria', addr2: 'daytona beach, Florida'}}

// array comprehension
let primes = [2, 3, 5, 7];

primes[primes.length - 1]; // => 7 : last index;

primes[4] = 9; //[2, 3, 5, 7, 9];
primes[4] = 11; k // [2,3,5,7,11]

primes.pop(); // [2, 3, 5, 7]
primes.shift() // [3, 5, 7]

prime.push(27); // [2, 3, 7, 27]
prime.unshift(1); // [1, 2, 3, 7, 27]

// using function to sum primes
const sum = arr => {
    let sum = 0;
    for(let x of arr) sum += x; return sum
}
sum(primes) // => 43 i.e 1 + 2 + 3 + 5 + 7 + 27


let data = {trial1:[[1,2], [3,4]], trial2:[[2,3],[4,5]]}

// accessing data 
let trials = data.trial1[0][1] - data.trial2[1][1]  /// => -3 i.e 2-3

data.trial1[1][1] + data.trial2[1][1] //=> 9

const {trial1, trial2} = data // trial1 = [[ 1,2], [3,4]], trial2 = [[2,3],[4,5]]

let points = [{x:0, y:0}, {x:1, y:1}, {x:5, y:5}, {x: -4, y: -8}];
points[1].x - points[0].x  // => 1: more complicated operands

points[3].x - points[2].x // => -9 |  -4 - 5 = -9
points[3].x - points[3].y // => 4 | (-4) -  (-8) = 4

// shorthand arithmetic operators | effect and update
count++, count--, count+= 2, count-= 2, count*= 3;

y = 4
/**
 * an expression is something that computes a value but doesn’t do
 * anything: it doesn’t alter the program state in any way. Statements, on
 * the other hand, don’t have a value, but they do alter the state. You’ve
 */

// A function is a named and parameterized block of JavaScript code that you define once, and can then invoke over and over again.

function add(x){
    return x + 1
};
add(y)  // => 5;

// nesting a function
var add = x => x + 1;
var sqr = x => x * x;

sqr(add(8)) //=> 81 i.e 8 + 1 = 9 * 9
sqr(add(2)) // => 9 i.e 2 + 1 = 3 * 3
sqr(add(4)) // => 25 i.e 4 + 1 = 5 * 5


// When we use functions with objects, we get methods: When functions are assigned to the properties of an object, we call
// them "methods."  All JavaScript objects (including arrays) have methods:

const a = [];
a.push(22, 33, 44, 55, 66);
a.reverse()  // [66, 55, 44, 33, 22]
a.reverse()  // [22, 33, 44, 55, 66] reverse for the second time

// CHAPTER 2: LEXICAL STRUCTURE
