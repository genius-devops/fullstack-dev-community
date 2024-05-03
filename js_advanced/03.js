// unicode
"\u{1F600}"

// Math object:

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
Math.sqrt(3)             // => 3**0.5: the square root of 3
Math.pow(3, 1/3)         // => 3**(1/3): the cube root of 3
Math.sin(0)              // Trigonometry: also 
Math.cos(0) 
Math.atan()
Math.log(10)             // Natural logarithm of 10
Math.log(100) / Math.LN10  // Base 10 logarithm of 100
Math.log(512) / Math.LN2   // Base 2 logarithm of 512
Math.exp(3)              // Math.E cubed


// ES6 defines more functions on the Math object:

Math.cbrt(27)    // => 3: cube root
Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments
Math.log10(100)  // => 2: Base-10 logarithm
Math.log2(1024)  // => 10: Base-2 logarithm
Math.log1p(x)    // Natural log of (1+x); accurate for very small x
Math.expm1(x)    // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x)     // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3)   // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf)  // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9)  // => 3: convert to an integer by truncating fractional part
Math.fround(x)   // Round to nearest 32-bit float number
Math.sinh(x)     // Hyperbolic sine. Also Math.cosh(), 
Math.tanh()
Math.asinh(x)    // Hyperbolic arcsine. Also Math.acosh(), 
Math.atanh()



// arithmetic operators injavascript - + * / % (** exponentiation es2016)
// refer documentationInfinity                    // A positive number too big to represent

Number.POSITIVE_INFINITY    // Same value
1/0                         // => Infinity
Number.MAX_VALUE * 2        // => Infinity; overflow
-Infinity                   // A negative number too big to represent
Number.NEGATIVE_INFINITY    // The same value
-1/0                        // => -Infinity
-Number.MAX_VALUE * 2       // => -Infinity
NaN                         // The not-a-number value
Number.NaN                  // The same value, written another way
0/0                         // => NaN
Infinity/Infinity           // => NaN
Number.MIN_VALUE/2          // => 0: underflow
-Number.MIN_VALUE/2         // => -0: negative zero
-1/Infinity                 // -> -0: also negative 0
-0

// The following Number properties are defined in ES6

Number.parseInt()       // Same as the global parseInt() function
Number.parseFloat()     // Same as the global parseFloat() function
Number.isNaN(x)         // Is x the NaN value?
Number.isFinite(x)      // Is x a number and finite?
Number.isInteger(x)     // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON          // => 2**-52: smallest difference between numbers

x === NaN   // cant determine wether the value of variable x is NaN instead

x != x, Number.isNaN(x)  // Those expressions will be true if, and only if, x has the same value as the global constant NaN.

isNaN(), Number.isNaN() // both of them is similar; It returns true if its argument is NaN, or if 

// that argument is a non-numeric value that cannot be converted to a number. The related function

Number.isFinite() // returns true if its argument is a number other than NaN, Infinity, or -Infinity
// true if its argument is, or can be converted to, a finite number.

/**
 * It compares equal(even using JavaScript’s strict equality test) to positive zero, 
 * which means that the two values are almost indistinguishable, except when used as a divisor:
 */

let zero = 0;         // Regular zero

let negz = -0;        // Negative zero

zero === negz         // => true: zero and negative zero are equal

1/zero === 1/negz     // => false: Infinity and -Infinity are not equal

// 3.2.4 Binary Floating-Point and Rounding Errors

let x = .3 - .2;    // thirty cents minus 20 cents
let y = .2 - .1;    // twenty cents minus 10 cents
x === y             // => false: the two values are not the same!
x === .1            // => false: .3-.2 is not equal to .1
y === .1            // => true: .2-.1 is equal to .1

// bigInt
1234n                // A not-so-big BigInt literal
0b111111n            // A binary BigInt
0o7777n              // An octal BigInt
0x8000000000000000n  // => 2n**63n: A 64-bit integer

// You can use BigInt() as a function for converting regular JavaScript numbers or strings to BigInt values:

BigInt(Number.MAX_SAFE_INTEGER)     // => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 followed by 100 zeros.
BigInt(string)                      // => 10n**100n: one googol

1000n + 2000n  // => 3000n
3000n - 2000n  // => 1000n
2000n * 3000n  // => 6000000n
3000n / 997n   // => 3n: the quotient is 3
3000n % 997n   // => 9n: and the remainder is 9
(2n ** 131071n) - 1n  // A Mersenne prime with 39457 decimal digits

/**
 * Although the standard +, -, *, /, %, and ** operators work with BigInt, 
 * it is important to understand that you may not mix operands of#
 * type BigInt with regular number operands. This may seem confusing at
 */


// Comparison operators, by contrast, do work with mixed numeric types

1 < 2n     // => true
2 > 1n     // => true
0 == 0n    // => true
0 === 0n   // => false: the === checks for type equality as well

// 3.2.6 Dates and Times
// JavaScript Dates are objects, but they also have a numeric representation as a timestamp that specifies the number of elapsed milliseconds since January 1, 1970:
let timestamp = Date.now();  // The current time as a timestamp (a number).
let now = new Date();        // The current time as a Date object.
let ms = now.getTime();      // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.

// 3.3 Text | UTF-16 as a sequence (known as a “surrogate pair”) of two 16-bit values. 
// This means that a JavaScript string of length 2 (two 16-bit values) might represent only a single Unicode character:

let euro = "€";
let love = "❤";
euro.length   // => 1: this character has one 16-bit element
love.length   // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"

// Thus, when combining JavaScript and HTML, it is a good idea to use one style of quotes for JavaScript and the other style for HTML. 

{/* <button onclick="alert('Thank you')">Click Me</button> */}

// escape sequence
"\u{10FFFF}", '\t', '\v';

// 3.3.3 Working with Strings
let msg = "Hello, " + "world";   // Produces the string => "Hello, world"

let name = 'adams';
let greeting = "Welcome to my blog," + " " + name;

/**
 * Strings can be compared with the standard === equality and !== inequality operators: 
 * two strings are equal if and only if they consist ofexactly the same sequence of 16-bit values. 
 * Strings can also becompared with the <, <=, >, and >= operators. String comparison is done simply by comparing the 16-bit values. 
 * (For more robust locale aware string comparison and sorting, see §11.7.3.) 
 * To determine the length of a string—the number of 16-bit values itcontains—use the length property of the string: s.length 
 * In addition to this length property, JavaScript provides a rich API for working with strings:
*/


let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6

// Methods like replace() and toUpperCase() return new strings: they do not modify the string on which they are invoked.



// Strings can also be treated like read-only arrays, and you can access individual characters (16-bit values) from a string using square
// brackets instead of the charAt() method:
s = "hello, world";
s[0]                  // => "h"
s[s.length-1]         // => "d"


// template literals es6
s = `hello world`;

/**
 * Everything between the ${ and the matching } is interpreted as a
 * JavaScript expression. Everything outside the curly braces is normal
 * string literal text. The expression inside the braces is evaluated and
 * then converted to a string and inserted into the template, replacing the
 * dollar sign, the curly braces, and everything in between them.
*/

"\u2718"  // unicode character x

// ES6 has one built-in tag function: String.raw(). It returns the text within backticks without any processing of backslash escapes:


`\n`.length            // => 1: the string has a single newline character

String.raw`\n`.length  // => 2: a backslash character and the letter n

// 3.3.5 Pattern Matching: JavaScript defines a datatype known as a regular expression (or RegExp) for describing and matching patterns in strings of text.

'/^HTML/'             // Match the letters H T M L at the start of a string
'/[1-9][0-9]*/';       // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i;   // Match "javascript" as a word, case-insensitive

// RegExp objects define a number of useful methods, and strings also
// have methods that accept RegExp arguments. For example:

let text = "testing: 1, 2, 3";   // Sample text
let pattern = /\d+/g;            // Matches all instances of one or more digits
pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")       // => "testing: #, #, #"

text.split(/\D+/)                // => ["","1","2","3"]: split on nondigits

// 3.4 Boolean Values Boolean values are commonly used in JavaScript control structures.
if (a === 4) {
    b = b + 1;
} else {
    a = a + 1;
}

// This code checks whether a equals 4. If so, it adds 1 to b; otherwise, it adds 1 to a.

// As we’ll discuss in §3.9, any JavaScript value can be converted to a boolean the ff return boolean false:

undefined, null, 0, -0, NaN, ""  // the empty string all these values evluate to false

// and or and not operator 
if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
}


// symbol() function | toString() is the only interesting method of Symbol instances.
let sym = Symbol("sym_x");
sym.toString()             // => "Symbol(sym_x)"
sym = Symbol.for("shared");
t = Symbol.for("shared");
sym === t          // => true
sym.toString()     // => "Symbol(shared)"
Symbol.keyFor(t) // => "shared"

/**
 * 3.7 The Global Object
 * Global constants like undefined, Infinity, and NaN
 * Global functions like isNaN(), parseInt() (§3.9.2), and eval() (§4.12)
 * Constructor functions like Date(), RegExp(), String(), Object(), and Array() (§3.9.2)
 * Global objects like Math and JSON (§6.8)
*/

s = "hello";   // Start with some lowercase text
s.toUpperCase();   // Returns "HELLO", but doesn't alter s
s                  // => "hello": the original string has not changed

// Objects are different than primitives. First, they are mutable—their values can change:

let o = { x: 1 };  // Start with an object
o.x = 2;           // Mutate it by changing the value of a 
property
o.y = 3;           // Mutate it again by adding a new 
property

let a = [1,2,3];   // Arrays are also mutable
a[0] = 0;          // Change the value of an array element
a[3] = 4;          // Add a new array element

// Objects are not compared by value: two distinct objects are not equal even if they have the same properties and values. And two distinct
// arrays are not equal even if they have the same elements in the same order:

let o = {x: 1}, p = {x: 1};  // Two objects with the same properties
o === p                      // => false: distinct objects are never equal
let aArr = [], bArr = [];          // Two distinct, empty arrays
aArr === bArr                      // => false: distinct arrays are equal

// never equal  Objects are sometimes called reference types to distinguish them from
// JavaScript’s primitive types. Using this terminology, object values are
// references, and we say that objects are compared by reference: two
// object values are the same if and only if they refer to the same
// underlying object.

let a = [];   // The variable a refers to an empty array.
let b = a;    // Now b refers to the same array.
b[0] = 1;     // Mutate the array referred to by variable b.
a[0]          // => 1: the change is also visible through variable a.
a === b       // => true: a and b refer to the same object, so they are equal.

// As you can see from this code, assigning an object (or array) to a
// variable simply assigns the reference: it does not create a new copy of
// the object. If you want to make a new copy of an object or array, you
// must explicitly copy the properties of the object or the elements of the
// array. This example demonstrates using a for loop (§5.4.3):

let a = ["a","b","c"];              // An array we want to copy
let b = [];                         // A distinct array we'll copy into

for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i];                    // Copy an element of a into b
}

let c = Array.from(b);              // In ES6, copy arrays with Array.from()

// Similarly, if we want to compare two distinct objects or arrays, we
// must compare their properties or elements. This code defines a function to compare two arrays:
function equalArrays(a, b) {
    if (a === b) return true;                // Identical arrays are equal
    if (a.length !== b.length) return false; // Different-size arrays not equal
    for(let i = 0; i < a.length; i++) {      // Loop through all elements
        if (a[i] !== b[i]) return false;     // If any differ, arrays not equal
    }
    return true;                             // Otherwise they are equal
}


// 3.9 Type Conversions
10 + " objects"     // => "10 objects":  Number 10 converts to a string

"7" * "4"           // => 28: both strings convert to numbers

let n = 1 - "x";    // n == NaN; string "x" can't convert to a number

n + " objects"      // => "NaN objects": NaN converts to string "NaN"

null == undefined // => true: These two values are treated as equal.
"0" == 0          // => true: String converts to a number before comparing.
0 == false        // => true: Boolean converts to number before comparing.
"0" == false      // => true: Both operands convert to 0 before comparing!

// 3.9.2 Explicit Conversions: the  simplest way to perform an explicit type conversion is to use the Boolean(), Number(), and String() functions:
Number("3")    // => 3
String(false)  // => "false":  Or use false.toString()
Boolean([])    // => true

// These facts lead to the following type conversion idioms that you may see in some code:
x + ""   // => String(x)
+x       // => Number(x)
x-0      // => Number(x)
!!x      // => Boolean(x): Note double !

// The toString() method defined by the Number class accepts an optional argument that specifies a radix, or base, for the conversion.
n = 17;
let binary = "0b" + n.toString(2);  // binary == "0b10001"
let octal = "0o" + n.toString(8);   // octal == "0o21"
let hex = "0x" + n.toString(16);    // hex == "0x11"

/**
 * toFixed() converts a number to a string with a specified number of digits after the decimal point. 
 * It never uses exponential notation. toExponential() converts a number to a string using exponential notation, 
 * with one digit before the decimal point and a specified number of digits after the decimal point 
 * (which means that the number of significant digits is one larger than the value you specify). 
 * toPrecision() converts a number to a string with the number of significant digits you specify. 
 * It uses exponential notation if the number of significant digits is not large enough to display the entire integer portion of the number. 
 * Note that all three methods round thetrailing digits or pad with zeros as appropriate. 
 * Consider the followingexamples:
 */

n = 123456.789;
n.toFixed(0)         // => "123457"
n.toFixed(2)         // => "123456.79"
n.toFixed(5)         // => "123456.78900"
n.toExponential(1)   // => "1.2e+5"
n.toExponential(3)   // => "1.235e+5"
n.toPrecision(4)     // => "1.235e+5"
n.toPrecision(7)     // => "123456.8"
n.toPrecision(10)    // => "123456.7890"


/**
 * If you pass a string to the Number() conversion function, it attempts
 * to parse that string as an integer or floating-point literal. That function
 * only works for base-10 integers and does not allow trailing characters
 * that are not part of the literal. The parseInt() and
 * parseFloat() functions (these are global functions, not methods of
 * any class) are more flexible. parseInt() parses only integers, while
 * parseFloat() parses both integers and floating-point numbers. If a
 * string begins with “0x” or “0X”, parseInt() interprets it as a
 * hexadecimal number. Both parseInt() and parseFloat() skip
 * leading whitespace, parse as many numeric characters as they can, and
 * ignore anything that follows. If the first nonspace character is not part
 * of a valid numeric literal, they return NaN:
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
parseFloat("$72.47")         // => NaN: numbers can't start with "$"

// parseInt() accepts an optional second argument specifying theV radix (base) of the number to be parsed. 
// Legal values are between 2 and 36. For example:

parseInt("11", 2)     // => 3: (1*2 + 1)
parseInt("ff", 16)    // => 255: (15*16 + 15)
parseInt("zz", 36)    // => 1295: (35*36 + 35)
parseInt("077", 8)    // => 63: (7*8 + 7)
parseInt("077", 10)   // => 77: (7*10 + 7)

/**
 * 3.9.3 Object to Primitive Conversions
 * The JavaScript specification defines three fundamental algorithms for converting objects to primitive values:
 * 1. prefer-string: This algorithm returns a primitive value, preferring a string value, if a conversion to string is possible.
 * 2. prefer-number: This algorithm returns a primitive value, preferring a number, if such a conversion is possible.
 * 3. no-preference: This algorithm expresses no preference about what type of primitive value is desired, 
 * and classes can define their ownconversions. Of the built-in JavaScript types, 
 * all except Date implement this algorithm as prefer-number. 
 * The Date class implements this algorithm as prefer-string.
 * 
 * two immportant method to note before dive into the three foundamental algorithm
 * The first method is toString(), and its job is to return a string representation of the object. 
 * The default toString() method does not return a very interesting value (though we’ll find it useful in
*/

({x: 1, y: 2}).toString()    // => "[object Object]"

[1,2,3].toString()                  // => "1,2,3"
(function(x) { f(x); }).toString()  // => "function(x) { f(x); }"
"/\d+/g".toString()                   // => "/\\d+/g"

let d = new Date(2020,0,1);
d.toString()  // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

d = new Date(2010, 0, 1);   // January 1, 2010, (Pacific time)
d.valueOf()                     // => 1262332800000

// OBJECT-TO-PRIMITIVE CONVERSION ALGORITHMS
const H0 = 74;         // Hubble constant (km/s/Mpc)
const C = 299792.458;  // Speed of light in a vacuum (km/s)
const AU = 1.496E8;    // Astronomical Unit: distance to the sun (km)

for(let i = 0, len = data.length; i < len; i++) 
console.log(data[i]);
for(let datum of data) console.log(datum);
for(let property in object) console.log(property);

/**
 * It may seem surprising, but you can also use const to declare the loop “variables” for for/in and for/of loops, 
 * as long as the body of the loop does not reassign a new value. In this case, 
 * the const declaration is just saying that the value is constant for the duration of one loop iteration:
*/
for(const datum of data) console.log(datum);
for(const property in object) console.log(property);

const yz = 1;        // Declare yz as a global constant
if (yz === 1) {
    let yz = 2;      // Inside a block yz can refer to a different value
    console.log(yz); // Prints 2
}
console.log(yz);     // Prints 1: we're back in the global scope now
// let yz = 3;          // ERROR! Syntax error trying to re-declare yz

var data = [], count = data.length;
for(var i = 0; i < count; i++) console.log(data[i]);

// 3.10.3 Destructuring Assignment
let [x,y] = [1,2];  // Same as let x=1, y=2
[x,y] = [x+1,y+1];  // Same as x = x + 1, y = y + 1
[x,y] = [y,x];      // Swap the value of the two variables
[x,y]               // => [3,2]: the incremented and swapped values

// Notice how destructuring assignment makes it easy to work with functions that return arrays of values:
// Convert [x,y] coordinates to [r,theta] polar coordinates

function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}
let [r,theta] = toPolar(1.0, 1.0);  // r == Math.sqrt(2); 
theta == Math.PI/4

let [x,y] = toCartesian(r,theta);   // [x, y] == [1.0, 1,0]

// We saw that variables and constants can be declared as part of JavaScript’s various for loops. It is possible to use variable
// destructuring in this context as well. Here is a code that loops over the name/value pairs of all properties of an object and uses destructuring
// assignment to convert those pairs from two-element arrays into individual variables:

let o = { x: 1, y: 2 }; // The object we'll loop over
for(const [name, value] of Object.entries(o)) {
    console.log(name, value); // Prints "x 1" and "y 2"
}

/**
 * The number of variables on the left of a destructuring assignment does not have to match the number of array elements on the right. 
 * Extravariables on the left are set to undefined, and extra values on the right are ignored. 
 * The list of variables on the left can include extra commas to skip certain values on the right:
 */

let [x,y] = [1];     // x == 1; y == undefined
[x,y] = [1,2,3];     // x == 1; y == 2
[,x,,y] = [1,2,3,4]; // x == 2; y == 4

/**
 * If you want to collect all unused or remaining values into a single
variable when destructuring an array, use three dots (...) before the
last variable name on the left-hand side:
 */

let [x, ...y] = [1,2,3,4];  // y == [2,3,4]
/**
 * We’ll see three dots used this way again in §8.3.2, where they are used
to indicate that all remaining function arguments should be collected into a single array.
Destructuring assignment can be used with nested arrays. In this case, the lefthand side of the assignment should look like a nested array literal:

*/

let [a, [b, c]] = [1, [2,2.5], 3]; // a == 1; b == 2; c == 2.5

/**
 * A powerful feature of array destructuring is that it does not actually
require an array! You can use any iterable object (Chapter 12) on the
righthand side of the assignment; any object that can be used with a
for/of loop (§5.4.4) can also be destructured:
 */

let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]

/**
 * Destructuring assignment can also be performed when the righthand
side is an object value. In this case, the lefthand side of the assignment
looks something like an object literal: a comma-separated list of
variable names within curly braces:
*/

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let {r, g, b} = transparent;  // r == 0.0; g == 0.0; b == 0.0
// The next example copies global functions of the Math object into
// variables, which might simplify code that does a lot of trigonometry:
// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan

const {sin, cos, tan} = Math;
/**
 * Notice in the code here that the Math object has many properties other
than the three that are destructured into individual variables. Those that
are not named are simply ignored. If the lefthand side of this
assignment had included a variable whose name was not a property of
Math, that variable would simply be assigned undefined.
In each of these object destructuring examples, we have chosen
variable names that match the property names of the object we’re
destructuring. This keeps the syntax simple and easy to understand, but
it is not required. Each of the identifiers on the lefthand side of an
object destructuring assignment can also be a colon-separated pair of
identifiers, where the first is the name of the property whose value is to
be assigned and the second is the name of the variable to assign it to:
 */
// Same as const cosine = Math.cos, tangent = Math.tan;

const { cos: cosine, tan: tangent } = Math;

/**
 * I find that object destructuring syntax becomes too complicated to be
useful when the variable names and property names are not the same,
and I tend to avoid the shorthand in this case. If you choose to use it,
remember that property names are always on the left of the colon, in
both object literals and on the left of an object destructuring
assignment.
Destructuring assignment becomes even more complicated when it is
used with nested objects, or arrays of objects, or objects of arrays, but
it is legal:
 */

let points = [{x: 1, y: 2}, {x: 3, y: 4}];     // An array of two point objects
let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // 

// destructured into 4 variables.
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

// Or, instead of destructuring an array of objects, we could destructure an object of arrays:

let points = { p1: [1,2], p2: [3,4] };         // An object with 2 array props
let { p1: [x1, y1], p2: [x2, y2] } = points;   //  destructured into 4 vars
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true

/**
 * Complex destructuring syntax like this can be hard to write and hard to read, and you may be better off just writing out your assignments
 * explicitly with traditional code like let x1 = points.p1[0];.
 * UNDERSTANDING COMPLEX DESTRUCTURING
 * If you find yourself working with code that uses complex destructuring assignments, there is a useful
 * regularity that can help you make sense of the complex cases. Think first about a regular (single-
 * value) assignment. After the assignment is done, you can take the variable name from the lefthand
 * side of the assignment and use it as an expression in your code, where it will evaluate to whatever
 * value you assigned it. The same thing is true for destructuring assignment. The lefthand side of a
 * destructuring assignment looks like an array literal or an object literal (§6.2.1 and §6.10). After the
 * assignment has been done, the lefthand side will actually work as a valid array literal or object literal
 * elsewhere in your code. You can check that you’ve written a destructuring assignment correctly by
 * trying to use the lefthand side on the righthand side of another assignment expression:
 */
// Start with a data structure and a complex destructuring
let points = [{x: 1, y: 2}, {x: 3, y: 4}];
let [{x: x1, y: y1}, {x: x2, y: y2}] = points;
// Check your destructuring syntax by flipping the assignment around
let points2 = [{x: x1, y: y1}, {x: x2, y: y2}]; // points2 == points
