/**
 * function
 * object
 * array | closure | map | filter | reduced | 
 * loop | for | for of for | forEach | while |
 * if | if else | else if |
 * switch |
 * operators | ternary |
 * 
 * 
 */

// Print the name and value of each property of o.  Return undefined.
function printprops(o) {
    for(var p in o) 
    console.log(p + ": " + o[p] + "\n");  // console.log(`${p} : ${o[p]}\n`);
}


// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}
// using arrrow function
const dist = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}


// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

// suing arrow function eg factorials(5) => 5 * 4 * 3 * 2 * 1 = 120;
const factorials = x => x <= 1 ? 1 : x * factorials(x-1);

// Function expressions can include names, which is useful for recursion
var foo = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function(x) { return x*x; }

// using arrow function 
const sq = x => x*x;


// Function expressions can also be used as arguments to other functions:
data.sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function(x) {return x*x;}(10));

// nested function
function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}

// using arrow function 
const hypo = (a, b) => {
    const sq = x => x * x;
    return Math.sqrt(sq(a) + sq(b))
}





































function plus1(x){
    return x + 1;
};
let plusOne = plus1(5) // return 5 + 1
let y = 4
// function can searves as values
let square = function(x){
    return x * x;
};
square(plus1(y)); //=>25: y = 4, 4+1 = 5, 5 * 5 = 25


// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) { // A function to compute the absolute value 
    if (x >= 0) { // The if statement...
    return x; // executes this code if the comparison is true.
    } // This is the end of the if clause.
    else { // The optional else clause executes its code if
    return -x; // the comparison is false.
    } // Curly braces optional when 1 statement per clause.
   } // Note return statements nested inside if/else.
   function factorial(n) { // A function to compute factorials
    var product = 1; // Start with a product of 1
    while(n > 1) { // Repeat statements in {} while expr in () is true
    product *= n; // Shortcut for product = product * n;
    n--; // Shortcut for n = n - 1
    } // End of loop
    return product; // Return the product
   }
   factorial(4) // => 24: 1*4*3*2
   function factorial2(n) { // Another version using a different loop
    var i, product = 1; // Start with 1
    for(i=2; i <= n; i++) // Automatically increment i from 2 up to n
    product *= i; // Do this each time. {} not needed for 1-line loops
    return product; // Return the factorial
};

factorial2(5) // => 120: 1*2*3*4*5

// This function demonstrates a number of these basic document searching and modification techniques:
// Display a message in a special debugging output section of the document.
// If the document does not contain such a section, create one.
function debug(msg) {
 // Find the debugging section of the document, looking at HTML id attributes
 var log = document.getElementById("debuglog");
 
 // If no element with the id "debuglog" exists, create one.
 if (!log) {
 log = document.createElement("div"); // Create a new <div> element
 log.id = "debuglog"; // Set the HTML id attribute on i
 log.innerHTML = "<h1>Debug Log</h1>"; // Define initial content
 document.body.appendChild(log); // Add it at end of document
 }
 // Now wrap the message in its own <pre> and append it to the log
 var pre = document.createElement("pre"); // Create a <pre> tag
 var text = document.createTextNode(msg); // Wrap msg in a text node
 pre.appendChild(text); // Add text to the <pre>
 log.appendChild(pre); // Add <pre> to the log
}


function hide(e, reflow) { // Hide the element e by scripting its style
    if (reflow) { // If 2nd argument is true
    e.style.display = "none" // hide element and use its space
    } else { // Otherwise
    e.style.visibility = "hidden"; // make e invisible, but leave its space
    }
}
function highlight(e) { // Highlight e by setting a CSS class
    // Simply define or append to the HTML class attribute.
    // This assumes that a CSS stylesheet already defines the "hilite" class
    if (!e.className) e.className = "hilite";
    else e.className += " hilite";
}



//    fully reveiw
const facebook = () => {
    var database = [ 
        {username: 'andrei', password: 'supersecret'},
        {username: 'sally', password: '123'},
        {username: 'ingrid', password: '777'}
        ];
        
    var newsfeed = [
        {username: 'Bobby', timeline: 'so tired from all that learning!'},
        {username: 'Bobby', timeline: 'Javascript is sooooooooo cool!'},
        {username: 'Mitch', timeline: 'Javascript is pretty cool!'}
        ];
        
    // creating a function that will support validate user loging info 
    const isUserValid = (username, password) => {
        for(var i = 0; i < database.length; i++){
            if (database[i].username === username && database[i].password === password){
               return true;
            }
        }
        return false
    }
    // sign in function
    const signIn = (username, password) => isUserValid(username, password) ? console.log(newsfeed) : alert('Wrong! username and password');
    
    var usernamePrompt = prompt('enter username');
    var passwordPrompt = prompt('enter password');
    
    signIn(usernamePrompt, passwordPrompt);
    
}

facebook()

// arrow function
const a = () => 1 + 1 // =>2
const b = x => x ** 2;  // b(4) :=>16
const c = (x,y) => x * y  // c(3, 4) :=> 12
const d = () => 'Hello World!';
const e = (x = -1, y = -2) => x * y; // e()
const age = 29;
const f = (age) => age == 10 ? 'you are eligible' : 'go back';
const greet = () => 'Hello Adams' // Hello Adams
const greets = (name) => `Hello ${name}`  //greets('Adams') => Hello Adams
const greeting = (fName, lName) => `Hello ${fName} ${lName}` // greeting('Adams', 'Labaran') => Hello Adams Labaran

// function with ternary operator
const ageCheck = age => age >= 18 ? 'you are enligible' : 'sorry! go back'

const hi = name => {
    name = prompt('what is your name');
    return `Hi ${name}`
}

const profile = (firstName, lastName) => {
    firstName = prompt('what is your first name');
    lastName = prompt('what is your last name');
    return `Hello ${firstName} ${lastName}\nlogging successeful`
}
profile('','')
