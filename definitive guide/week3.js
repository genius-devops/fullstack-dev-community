// Chapter 3. Types, Values, and Variables

// Chapter 3. Types, Values, and Variables

/** 
 * TYPE: this is the kind of values that can be represented and manipulated
 * 
 * The most fundamental of characteristics of a programming language is the set of types it supports
 * 
 * VARIABLE: this is a container that is used to stores value for future use
 * 
 * JavaScript types can be divided into two categories: primitive types and object types. 
 * 
 * JavaScript’s primitive types include numbers, strings, boolean, null, undefined
 * 
 * ES6 adds a new special-purpose type, known as Symbol, 
 * 
 * that enables the definition of language extensions without harming backward compatibility.
 * 
 * An object type: (that is, a member of the type object) is a collection of properties where each property 
 * 
 * has a name and a value (either a primitive value or another object)
 * 
 * An ordinary JavaScript object {} is an unordered collection of named values => property : value pair. 
 * 
 * where an ARRAY [] is a special kind of object that represent an ordered collectionof numbered values.
 * 
 * In addition to basic objects {} and arrays [], JavaScript defines a number of other useful object types known as SET, MAP.
 *  
 * A SET object represents a set of values. 
 * 
 * A Map object represents a mapping from keys to values.
 * 
 * The RegExp type represents textual patterns and enables sophisticated matching, searching, and replacing operations on strings.
 * 
 * The Date type represents dates and times and supports rudimentary date arithmetic. 
 * 
 * Error and its subtypes represent errors that can arise when executing JavaScript code.
 * 
 * JavaScript supports an object-oriented programming style. Loosely, this means that rather than having globally defined functions to operate
 * 
 * on values of various types, the types themselves define methods for working with values. 
 * 
 * To sort the elements of an array a, for example, we don’t pass a to a sort() function. Instead, we invoke the sort() method of a:
 * 
 * a.sort();// The object-oriented version of sort(a).
 * 
 * JavaScript’s object types are mutable such as object and array and its primitive types are immutable such as strings and numbers.
 * 
 * arithmetic in js
 * 
 * Arithmetic in JavaScript does not raise errors in cases of overflow,
underflow, or division by zero. When the result of a numeric operation
is larger than the largest representable number (overflow), the result is
a special infinity value, Infinity
The negative zero value is also somewhat unusual. It compares equal
(even using JavaScript’s strict equality test) to positive zero, which
means that the two values are almost indistinguishable, except when
used as a divisor:
let zero = 0;         // Regular zero
let negz = -0;        // Negative zero
zero === negz         // => true: zero and negative zero are 
equal
1/zero === 1/negz     // => false: Infinity and -Infinity are 
not equal
 
 */