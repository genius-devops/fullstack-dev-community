// Chapter 4 | Expressions and Operators
/**
 * An expression is a phrase of JavaScript that can be evaluated to produce a value.
 * A variable name is also a simple expression that evaluates to whatever value has been assigned to that variable.
 * The most common way to build a complex expression out of simpler expressions is with an operator.
 * For simplicity, we sometimes say that an operator returns a value rather than “evaluates to” a value.
 * 4.1 Primary Expressions | Within the body of a method, this evaluates to the object on which the method was invoked. |
 * Object and array initializers are expressions whose value is a newly created object or array. 
 * These initializer expressions are sometimes called object literals and array literals.
 * 4.2 Object and Array Initializers
 */
// Some of JavaScript’s reserved words are primary expressions:
true       // Evalutes to the boolean true value
false      // Evaluates to the boolean false value
null       // Evaluates to the null value
this       // Evaluates to the "current" object

let matrix = [[1,2,3], [4,5,6], [7,8,9]];

let sparseArray = [1,,,,5];  // the comma is ideal for restructuring of array


/**
 * Object initializer expressions are like array initializer expressions, but
 * the square brackets are replaced by curly brackets, and each
 * subexpression is prefixed with a property name and a colon:
 */

let p = { x: 2.3, y: -1.2 };  // An object with 2 properties
let q = {};                   // An empty object with no properties
q.x = 2.3; q.y = -1.2;        // Now q has the same properties as p


// nested object
let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 5 }
};

// 4.3 Function Definition Expressions
let square = function(x) { return x * x; };
let sqrt = x => x*x; // arrow function.

// properties access expression