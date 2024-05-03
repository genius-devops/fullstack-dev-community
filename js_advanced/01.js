// functions that compute abs
const ABS = x => (x >= 0)? x : -x 

const factOne = n => {let product = 1; while(n > 1) product *= n, n--; return product};
factOne(4); // => 24: 1 * 4 * 3 * 2

const factTwo = x => {let product = 1; for(let i = 2; i <= x; i++) product *= i; return product}
factTwo(5)  // => 120: 1 * 2 * 3 * 4 * 5

// 1. using advanced method to acchieve this recursive function of finding factorial
const facts = x => (x > 1)? x * facts(x - 1) : 1 // facts(3) => 6  i.e 3 * 2 = 6

// method is function belonging to an object or is a property of an object and it comes with execusion contest some with argument some without.
// higher order function is function that accept a callback, another function as an argument

var nums = [33, 44, 1, 4, 78, 100, 90, 8, 89, 45]
// summation of nums using reduce
nums.reduce((accumulator, currentIndex)=> accumulator + currentIndex);

// sort() => a numbers
nums.sort((a, b) => b - a) // highest to lowest
nums.sort((a, b) => a- b) // lowest to highest


// 2. using function to sum primes
var primes = [1, 2, 3, 5, 7, 27]

const sum = arr => {let sum = 0; for(let x of arr) sum += x; return sum}
sum(primes) // => 43 i.e 1 + 2 + 3 + 5 + 7 + 27

// map, filter, forEach, reduce, for/of, spread, rest

/**
 * JavaScript's most important datatype is the object: An object is a collection of name/value pairs, or a string to value map.
 * 
 */

let book = {               // Objects are enclosed in curly braces.
    topic: "JavaScript",   // The property "topic" has value "JavaScript."
    edition: 7             // The property "edition" has value 7
};                         // The curly brace marks the end of the object.

// Access the properties of an object with . or []:
book.topic                 // => "JavaScript"
book["edition"]            // => 7: another way to access property values.
book.author = "Flanagan";  // Create new properties by assignment.
book.contents = {};        // {} is an empty object with no properties.

// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property.

// JavaScript also supports arrays (numerically indexed lists) of values:

let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0]                  // => 2: the first element (index 0) of the array.
primes.length              // => 4: how many elements in the array.
primes[primes.length-1]    // => 7: the last element of the array.
primes[4] = 9;             // Add a new element by assignment.
primes[4] = 11;            // Or alter an existing element by assignment.
let empty = [];            // [] is an empty array with no elements.
empty.length               // => 0

// Arrays and objects can hold other arrays and objects:
let points = [             // An array with 2 elements.
    {x: 0, y: 0},          // Each element is an object.
    {x: 1, y: 1}
];

let data = {                 // An object with 2 properties
    trial1: [[1,2], [3,4]],  // The value of each property is an array.
    trial2: [[2,3], [4,5]]   // The elements of the arrays are arrays.
};

// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
var x = 2, y = 3;          // These = signs are assignment, not equality tests
x === y                    // => false: equality
x !== y                    // => true: inequality
x < y                      // => true: less-than
x <= y                     // => true: less-than or equal
x > y                      // => false: greater-than
x >= y                     // => false: greater-than or equal
"two" === "three"          // => false: the two strings are different
"two" > "three"            // => true: "tw" is alphabetically greater than "th"
false === (x > y)          // => true: false is equal to false

// Logical operators combine or invert boolean values
(x === 2) && (y === 3)     // => true: both comparisons are true. && is AND
(x > 3) || (y < 3)         // => false: neither comparison is true. || is OR
!(x === y)                 // => true: ! inverts a boolean value


// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) {        // Define a function named "plus1" with parameter "x"
    return x + 1;          // Return a value one larger than the value passed in
}                          // Functions are enclosed in curly braces
plus1(y)                   // => 4: y is 3, so this invocation returns 3+1

// usig arrow fuction
const plusOne = c => x + 1; plusOne(9)

var square = function(x) { // Functions are values and can be assigned to vars
    return x * x;          // Compute the function's value
};                         // Semicolon marks the end of the assignment.
square(plus1(y))           // => 16: invoke two functions in one expression

// arrow function and assign another function as argument
const sqr = x => x * x; sqr(plusOne(9))

// When we use functions with objects, we get methods:

// When functions are assigned to the properties of an object, we call
// them "methods."  All JavaScript objects (including arrays) have methods:

var a = [];                // Create an empty array
a.push(1,2,3);             // The push() method adds elements to an array
a.reverse();               // Another method: reverse the order of elements

// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earlier.

points = [{x:0, y:0}, {x:1, y:1}, {x:5, y:5}, {x: -4, y: -8}];

points.dist = function() { // Define a method to compute distance between points
    let p1 = this[0];      // First element of array we're invoked on
    let p2 = this[1];      // Second element of the "this" object
    let a = p2.x-p1.x;     // Difference in x coordinates
    let b = p2.y-p1.y;     // Difference in y coordinates
    return Math.sqrt(a*a + b*b); // The Pythagorean theorem Math.sqrt() computes the square root
};

points.dist()              // => Math.sqrt(2): distance between our 2 points


/**
 * This concise syntax uses => to separate the argument list from the
 * function body, so functions defined this way are known as arrowfunctions.
 * Arrow functions are most commonly used when you want to pass an unnamed function as an argument to another function.
 */

const plus1 = x => x + 1;   // The input x maps to the output: x + 1

const square = x => x * x;  // The input x maps to the output: x * x

plus1(y)                    // => 4: function invocation is the same


// js conditional and loop in this syntax

function abs(x) {          // A function to compute the absolute value.
      if (x >= 0) {          // The if statement...
          return x;          // executes this code if the comparison is true.
      }                      // This is the end of the if clause.
      else {                 // The optional else clause executes its code if
          return -x;         // the comparison is false.
      }                      // Curly braces optional when 1 statement per clause.
}                          // Note return statements nested inside if/else.

abs(-10) === abs(10)       // => true

/**
 * JavaScript supports an object-oriented programming style, but it is
 * significantly different than “classical” object-oriented programming
 * languages. Chapter 9 covers object-oriented programming in
 * JavaScript in detail, with lots of examples. Here is a very simple
 * example that demonstrates how to define a JavaScript class to represent
 * 2D geometric points. Objects that are instances of this class have a
 * single method, named distance(), that computes the distance of the
 * point from the origin:
*/
class Point {              // By convention, class names are capitalized.
    constructor(x, y) {    // Constructor function to initialize new instances.
        this.x = x;        // This keyword is the new object being initialized.
        this.y = y;        // Store function arguments as object properties.
    }                      // No return is necessary in constructor functions.
    distance() {           // Method to compute distance from origin to point.
        return Math.sqrt(  // Return the square root of x² + y².
            this.x * this.x +  // this refers to the Point object on which
            this.y * this.y    // the distance method is invoked.
        );
    }
}
// Use the Point() constructor function with "new" to create Point objects
p = new Point(1, 1);   // The geometric point (1,1).

// Now use a method of the Point object p
p.distance()               // => Math.SQRT2


// generating random numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ranNums = num => i = Math.floor(Math.random() * num.length)

// properties of math objects
Math.pow(2,53)           // => 9007199254740992: 2 to the power 53
Math.round(.6)           // => 1.0: round to the nearest integer
Math.ceil(.6)            // => 1.0: round up to an integer
Math.floor(.6)           // => 0.0: round down to an integer
Math.abs(-5)             // => 5: absolute value
Math.max(x,y,z)          // Return the largest argument
Math.min(x,y,z)          // Return the smallest argument
Math.random()            // Pseudo-random number x where 0 <= x < 1.0
Math.PI                  // π: circumference of a circle / diameter
Math.E                   // e: The base of the natural logarithm
Math.sqrt(3)             // The square root of 3
Math.pow(3, 1/3)         // The cube root of 3
Math.sin(0)              // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10)             // Natural logarithm of 10
Math.log(100)/Math.LN10  // Base 10 logarithm of 100
Math.log(512)/Math.LN2   // Base 2 logarithm of 512
Math.exp(3)              // Math.E cubed


// javaScript fractions error
var x = .3 - .2;    // thirty cents minus 20 cents
var y = .2 - .1;    // twenty cents minus 10 cents
x == y              // => false: the two values are not the same!
x == .1             // => false: .3-.2 is not equal to .1
y == .1             // => true: .2-.1 is equal to .1

// working with date constructor
var then = new Date(2010, 0, 1);  // The 1st day of the 1st month of 2010
var later = new Date(2010, 0, 1, 17, 10, 30);  // Same day, at 5:10:30pm, local time
var now = new Date();          // The current date and time
var elapsed = now - then;      // Date subtraction: interval in milliseconds 
later.getFullYear()            // => 2010
later.getMonth()               // => 0: zero-based months
later.getDate()                // => 1: one-based days
later.getDay()                 // => 5: day of week.  0 is Sunday 5 is Friday.
later.getHours()               // => 17: 5pm, local time
later.getUTCHours()            // hours in UTC time; depends on timezone
later.toString()               // => "Fri Jan 01 2010 17:10:30 GMT-0800 (PST)"
later.toUTCString()            // => "Sat, 02 Jan 2010 01:10:30 GMT"
later.toLocaleDateString()     // => "01/01/2010"
later.toLocaleTimeString()     // => "05:10:30 PM"
later.toISOString()            // => "2010-01-02T01:10:30.000Z"; ES5 only


// working with string

var p = "π"; // π is 1 character with 16-bit codepoint 0x03c0
var e = "e"; // e is 1 character with 17-bit codepoint 0x1d452
p.length     // => 1: p consists of 1 16-bit element
e.length     // => 2: UTF-16 encoding of e is 2 16-bit values: "\ud835\udc52"

// string laterals
/* <button onclick="alert('Thank you')">Click Me</button> */


msg = "Hello, " + "world";
const name = "Adams Labaran";
const greeting = "Welcome to my blog," + " " + name;
// strings (as always, see the reference section for complete details):
// In addition to this length property, there are a number of methods you can invoke on

var s = "hello, world"        // Start with some text.
s.length
s.charAt(0)                   // => "h": the first character.
s.charAt(s.length-1)          // => "d": the last character.
s.substring(1,4)              // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1,4)                  // => "ell": same thing
s.slice(-3)                   // => "rld": last 3 characters
s.indexOf("l")                // => 2: position of first letter l.
s.lastIndexOf("l")            // => 10: position of last letter l.
s.indexOf("l", 3)             // => 3: position of first "l" at or after 3
s.split(", ")                 // => ["hello", "world"] split into substrings
s.replace("h", "H")           // => "Hello, world": replaces all instances
s.toUpperCase()               // => "HELLO, WORLD"

// using index notation to get the string

s[0] // => h
s[s.length - 1] // => return the last index  which is 'd'
s[s.length]  // => return undefined because lenght of 's' is not equal to index of 's' 

// boolean 
if (a == 4)
  b = b + 1;
else
  a = a + 1;

  if ((x == 0 && y == 0) || !(z == 0)) {
    // x and y are both zero or z is non-zero 
}

// global properties
undefined;
null;
NaN;

// global function
isNaN();
parseInt(); 
parseFloat();
eval();

// global objects
Math();
JSON();

// constructor function
Date();
RegExp();
String();
Object();
Array();

this // this is use to refer to the global object
var global = this;  // Define a global variable to refer to the global object

var word = s.substring(s.indexOf(" ")+1, s.length); // Use string properties manipulate more

word = s.substring(6, 12)  // same as above | s.indexOf(" ")+1 = 6, s.length = 12


// Consider the following code and think about what happens when it is executed:
var s = "test";         // Start with a string value.
s.len = 4;              // Set a property on it.
var t = s.len;          // Now query the property. => undefined

// Note that it is possible (but almost never necessary or useful) to explicitly create wrap-
// per objects, by invoking the String(), Number(), or Boolean() constructors:
var s = "test", n = 1, b = true;  // A string, number, and boolean value.
var S = new String(s);            // A String object
var N = new Number(n);            // A Number object
var B = new Boolean(b);           // A Boolean object


// object
var o = { x:1 };     // Start with an object
o.x = 2;             // Mutate it by changing the value of a property
o.y = 3;             // Mutate it again by adding a new property
var a = [1,2,3]      // Arrays are also mutable
a[0] = 0;            // Change the value of an array element
a[3] = 4;            // Add a new array element


// Objects are not compared by value: two objects are not equal even if they have the same
// properties and values. And two arrays are not equal even if they have the same elements
//in the same order:

var o = {x:1}, p = {x:1};  // Two objects with the same properties
o === p                    // => false: distinct objects are never equal
var a = [], b = [];        // Two distinct, empty arrays
a === b                    // => false: distinct arrays are never equal

// Objects are sometimes called reference types to distinguish them from JavaScript’s
// primitive types. Using this terminology, object values are references, and we say that
// objects are compared by reference: two object values are the same if and only if they
// refer to the same underlying object.


var a = [];   // The variable a refers to an empty array.
var b = a;    // Now b refers to the same array.
b[0] = 1;     // Mutate the array referred to by variable b.
a[0]          // => 1: the change is also visible through variable a.
a === b       // => true: a and b refer to the same object, so they are equal.


var a = ['a','b','c'];              // An array we want to copy
var b = [];                         // A distinct array we'll copy into
for(var i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i];                    // Copy an element of a into b
}

// Similarly, if we want to compare two distinct objects or arrays, we must compare their
// properties or elements. This code defines a function to compare two arrays:

function equalArrays(a,b) {
    if (a.length != b.length) return false; // Different-size arrays not equal
    for(var i = 0; i < a.length; i++)       // Loop through all elements
        if (a[i] !== b[i]) return false;    // If any differ, arrays not equal
    return true;                            // Otherwise they are equal
}

10 + " objects"     // => "10 objects".  Number 10 converts to a string
"7" * "4"           // => 28: both strings convert to numbers
var n = 1 - "x";    // => NaN: string "x" can't convert to a number
n + " objects"      // => "NaN objects": NaN converts to string "NaN"

null == undefined // These two values are treated as equal.
"0" == 0          // String converts to a number before comparing.
0 == false        // Boolean converts to number before comparing.
"0" == false      // Both operands convert to numbers before comparing


// 3.8.2  Explicit Conversions: specify how the conversiion will
Number("3")           // => 3
String(false)         // => "false"  Or use false.toString()
Boolean([])           // => true
Object(3)             // => new Number(3)

// implicit conversions: js will convert it automatically
x + ""           // Same as String(x)
+x               // Same as Number(x).  You may also see x-0
!!x              // Same as Boolean(x). Note double !



// However, you can also convert numbers in other bases (between 2 and 36). For example:
var n = 17;
binary_string = n.toString(2);        // Evaluates to "10001"
octal_string = "0" + n.toString(8);   // Evaluates to "021"
hex_string = "0x" + n.toString(16);   // Evaluates to "0x11"


/**
 * toFixed() converts a number to a string with a specified number
 * of digits after the decimal point. It never uses exponential notation. 
 * toExponential() converts a number to a string using exponential notation, 
 * with one digit before the decimal point and a specified number of digits after the decimal point (which means
 * that the number of significant digits is one larger than the value you specify). 
 * toPrecision() converts a number to a string with the number of significant digits you specify.
 * It uses exponential notation if the number of significant digits is not large enough to
 * display the entire integer portion of the number.
 * 
 * parseInt() parses only integers, while parseFloat() parses both integers
 */

var n = 123456.789;
n.toFixed(0);         // "123457"
n.toFixed(2);         // "123456.79"
n.toFixed(5);         // "123456.78900"
n.toExponential(1);   // "1.2e+5"
n.toExponential(3);   // "1.235e+5"
n.toPrecision(4);     // "1.235e+5"
n.toPrecision(7);     // "123456.8"
n.toPrecision(10);    // "123456.7890"



/**
 * and floating-point numbers. If a string begins with “0x” or “0X”, parseInt() interprets
it as a hexadecimal number.2 Both parseInt() and parseFloat() skip leading white-
space, parse as many numeric characters as they can, and ignore anything that follows.
If the first nonspace character is not part of a valid numeric literal, they return NaN:
*/

parseInt("3 blind mice")     // => 3
parseFloat(" 3.14 meters")   // => 3.14
parseInt("-12.34")           // => -12
parseInt("0xFF")             // => 255
parseInt("0xff")             // => 255
parseInt("-0XFF")            // => -255
parseFloat(".1")             // => 0.1
parseInt("0.1")              // => 0
parseInt(".1")               // => NaN: integers can't start with "."
parseFloat("$72.47");        // => NaN: numbers can't start with "$"

// parseInt() accepts an optional second argument specifying the radix (base) of the
// number to be parsed. Legal values are between 2 and 36. For example:
parseInt("11", 2);           // => 3 (1*2 + 1)
parseInt("ff", 16);          // => 255 (15*16 + 15)
parseInt("zz", 36);          // => 1295 (35*36 + 35)
parseInt("077", 8);          // => 63 (7*8 + 7)
parseInt("077", 10);         // => 77 (7*10 + 7)


class DefaultMap extends Map {
    constructor(defaultValue) {
        super();                          // Invoke superclass 
constructor
        this.defaultValue = defaultValue; // Remember the default value
    }
    get(key) {
        if (this.has(key)) {              // If the key is already in the map
            return super.get(key);        // return its value from superclass.
        }
        else {
            return this.defaultValue;     // Otherwise return the default value
        }
    }
}
// This class computes and displays letter frequency histograms
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);  // Map from letters to counts
        this.totalLetters = 0;                  // How many letters in all
    }
    // This function updates the histogram with the letters of text.
    add(text) {
        // Remove whitespace from the text, and convert to upper case
        text = text.replace(/\s/g, "").toUpperCase();
        // Now loop through the characters of the text
        for(let character of text) {
            let count = this.letterCounts.get(character); // Get old count
            this.letterCounts.set(character, count+1);    // Increment it
            this.totalLetters++;
        }
    }
    // Convert the histogram to a string that displays an ASCII graphic
    toString() {
        // Convert the Map to an array of [key,value] arrays
        let entries = [...this.letterCounts];
        // Sort the array by count, then alphabetically
        entries.sort((a,b) => {              // A function to define sort order.
            if (a[1] === b[1]) {             // If the counts are the same
                return a[0] < b[0] ? -1 : 1; // sort alphabetically.
            } else {                         // If the counts differ
                return b[1] - a[1];          // sort by largest count.
            }
        });
        // Convert the counts to percentages
        for(let entry of entries) {
            entry[1] = entry[1] / this.totalLetters*100;
        }
        // Drop any entries less than 1%
        entries = entries.filter(entry => entry[1] >= 1);
        // Now convert each entry to a line of text
        let lines = entries.map(([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);
        // And return the concatenated lines, separated by newline characters.
        return lines.join("\n");
    }
}
// This async (Promise-returning) function creates a Histogram object,
// asynchronously reads chunks of text from standard input, and adds those chunks to
// the histogram. When it reaches the end of the stream, it returns this histogram
async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8"); // Read Unicode strings, not bytes
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}
// This one final line of code is the main body of the program.
// It makes a Histogram object from standard input, then prints the histogram.
histogramFromStdin().then(histogram => { 
console.log(histogram.toString()); });


