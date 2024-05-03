// compuond assignment
let x = 3
x += 12, x *= 12, x -= 4, x /= 3;
// string
let myString = `<a href="htpps://www.google.com" target="_blank">learn more</a>`

for(i = 1; i <= 10; i++) console.log(`${i} i want to code`);

const todos = [{id: 1, text: "takeout trash", isCompleted:true},{id: 2, text: "take bath", isCompleted:true},{id: 3, text: "dress up", isCompleted:true},{id: 4, text: "settle down in the office", isCompleted:false},{id: 5, text: "coding", isCompleted:true},{id: 6, text: "check out some coding challenge", isCompleted:false},{id: 7, text: "read books", isCompleted:false}]

// use for, while, for/of, forEach, map, filter, reduce, spread, rest, sort, split to manipulate throgh this.

for(let i = 0; i < todos.length; i++) console.log(todos[i].id, todos[i].text );

12               // The number twelve
1.2              // The number one point two
"hello world"    // A string of text
'Hi'             // Another string
true             // A Boolean value
false            // The other Boolean value
null             // Absence of an object

// unicode
const π = 3.14;
const sí = true;

// semicolon(;)

// js uses the semicolon (;) to sepearte statement from one another. however in js the semicolon can be omited btw two statement if those statement is writtten on a seperataeline

// JavaScript interprets this code like this:
var a; a = 3; console.log(a);

a = 3;
b = 4;

let a
a
=
3
console.log(a)

// Written as follows, however, the first semicolon is required:
a = 3; b = 4;

/**
 * These statement termination rules lead to some surprising cases. 
 * This code looks like two separate statements separated with a newline:
 * But the parentheses on the second line of code can be interpreted as a
 * function invocation of f from the first line, and JavaScript interprets
 * the code like this: let y = x + f(a+b).toString();
 * which in this scario semicolon is required.
 * In general, if a statement begins with (, [, /, +, or -, there is a chance
 * that it could be interpreted as a continuation of the statement before.

 */
var y = x + f
(a+b).toString()

// js sees it as this
let y = x + f(a+b).toString();

;[x,x+=2,x+=2].forEach(console.log) // Defensive
;[x,x+1,x+=2].forEach(console.log) // Defensive
;[x,x++,x+=2].forEach(console.log) // Defensive
;[x,x++,x+2].forEach(console.log) // Defensive
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this 
;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this 
