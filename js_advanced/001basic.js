// Unicode Escape Sequences
/**
 * An identifier is simply a name. In JavaScript, identifiers are used to name variables and
 * functions and to provide labels for certain loops in JavaScript code. 
 * CMAScript 5 reserves: class     const     enum      export    extends   import    super
 * served in strict mode: implements     let            private        public         yield
 * interface      package        protected      static
 * Strict mode also imposes restrictions on the use of the following identifiers. They are
 * not fully reserved, but they are not allowed as variable, function, or parameter names:
 * such as arguments      eval
 * A variable defines a symbolic name for a value and allows the value to be: referred to by name. 
 * The way that variables work is another fundamental characteristic of any programming language.
 * 
 * JavaScript types can be divided into two categories: primitive types and object types.
 * JavaScript’s primitive types include numbers, strings of text (known as strings), and Boolean truth values (known as booleans).
 * The special JavaScript values null and undefined are primitive values, but they are not numbers, strings, or booleans. Each value is typically considered to be the sole member
 * of its own special type. §3.4 has more about null and undefined.
 * Any JavaScript value that is not a number, a string, a boolean, or null or undefined 
 * is an object. An object (that is, a member of the type object) is a collection of properties
 * where each property has a name and a value (either a primitive value, such as a numberor string or an object
 * in summary: object is an unordered collection of named values 
 * while an array is a collection of  an ordered collection numbered values.
 * function is an obj that has another executable code associated with it.
 *  Functions that are written to be used (with the new operator) to initialize a newly created
 * object are known as constructors. Each constructor defines a class of objects—the set 
 * of objects initialized by that constructor. Classes can be thought of as subtypes of the object type.
 * core JavaScript defines three other useful classes.
 * 
 *  1. the date class defines an object that represent dates
 *  2. the RegExp class defines objects that represent regular expressions.
 *  3. the Error class defines objects that represent syntax and runtime errors that can occur in a JavaScript program.
 * 
 * javaScript thpes can be
 *  1. primitive type and object type
 *  2. type with method and type without
 *  3. mutable (objects and array) and immutable types Numbers, booleans, null, and undefined are immutable
 * 
 * Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero
 * Division by zero is not an error in JavaScript: it simply returns infinity or negative
 * infinity. There is one exception, however: zero divided by zero does not have a well-
 * defined value, and the result of this operation is the special not-a-number value, printed
 * as NaN. NaN also arises if you attempt to divide infinity by infinity, or take the square
 * 
 * Infinity                    // A read/write variable initialized to Infinity.
 * Number.POSITIVE_INFINITY    // Same value, read-only.
 * 1/0                         // This is also the same value.
 * Number.MAX_VALUE + 1        // This also evaluates to Infinity.
 * Number.NEGATIVE_INFINITY    // These expressions are negative infinity.
 * -Infinity
 * -1/0                        
 * -Number.MAX_VALUE - 1
 * NaN                         // A read/write variable initialized to NaN.
 * Number.NaN                  // A read-only property holding the same value.
 * 0/0                         // Evaluates to NaN.
 * Number.MIN_VALUE/2          // Underflow: evaluates to 0
 * -Number.MIN_VALUE/2         // Negative zero
 * -1/Infinity                 // Also negative 0-0
 * The not-a-number value has one unusual feature in JavaScript: it does not compare
 * equal to any other value, including itself. This means that you can’t write x == NaN to
 * determine whether the value of a variable x is NaN. Instead, you should write x != x.
 * That expression will be true if, and only if, x is NaN. The function isNaN() is similar. It
 * returns true if its argument is NaN, or if that argument is a non-numeric value such as
 * a string or an object. The related function isFinite() returns true if its argument is a
 * number other than NaN, Infinity, or -Infinity.
 * The negative zero value is also somewhat unusual. It compares equal (even using Java-
 * Script’s strict equality test) to positive zero, which means that the two values are almost
 * indistinguishable, except when used as a divisor:
 * 
 * var zero = 0;         // Regular zero
 * var negz = -0;        // Negative zero
 * zero === negz         // => true: zero and negative zero are equal 
 * 1/zero === 1/negz     // => false: infinity and -infinity are not equal
 * 3.1.4  Binary Floating-Point and Rounding Errors
 * 
 * There  are  infinitely  many  real  numbers,  but  only  a  finite  number  of  them
 * (18437736874454810627, to be exact) can be represented exactly by the JavaScript
 * floating-point format. This means that when you’re working with real numbers in
 * JavaScript, the representation of the number will often be an approximation of the
 * actual number.
 * 
 * 3.1.5  Dates and Times
 * 
 * string:
 * A string is an immutable ordered sequence of 16-bit values, each of which typically
 * represents a Unicode character—strings are JavaScript’s type for representing text. The
 * length of a string is the number of 16-bit values it contains. JavaScript’s strings (and its
 * arrays) use zero-based indexing: the first 16-bit value is at position 0, the second at
 * position 1 and so on. The empty string is the string of length 0. JavaScript does not have
 * a special type that represents a single element of a string. To represent a single 16-bit
 * value, simply use a string that has a length of 1.
 * 
 * var p = "π"; // π is 1 character with 16-bit codepoint 0x03c0
 * var e = "e"; // e is 1 character with 17-bit codepoint 0x1d452
 * p.length     // => 1: p consists of 1 16-bit element
 * e.length     // => 2: UTF-16 encoding of e is 2 16-bit values: "\ud835\udc52"
 * The various string-manipulation methods defined by JavaScript operate on 16-bit val-
 * ues, not on characters. They do not treat surrogate pairs specially, perform no normal-
 * ization of the string, and do not even ensure that a string is well-formed UTF-16.
 * 3.2.1  String Literals
 * To include a string literally in a JavaScript program, simply enclose the characters of
 * the string within a matched pair of single or double quotes (' or "). Double-quote
 * characters may be contained within strings delimited by single-quote characters, and
 * single-quote characters may be contained within strings delimited by double quotes.
 * Here are examples of string literals:
 * ""  // The empty string: it has zero characters
 * 'testing'
 * "3.14"
 * 'name="myform"'
 * "Wouldn't you prefer O'Reilly's book?"
 * "This string\nhas two lines"
 * "π is the ratio of a circle's circumference to its diameter"
 * 36 | Chapter 3: Types, Values, and Variables
 * 
 * msg = "Hello, " + "world";   // Produces the string "Hello, world"
 * greeting = "Welcome to my blog," + " " + name;
 * To determine the length of a string—the number of 16-bit values it contains—use the
 * length property of the string. Determine the length of a string s like this:
 *  * Remember  that  strings  are  immutable  in  JavaScript.  Methods  like  replace()  and
 * toUpperCase() return new strings: they do not modify the string on which they are
 * invoked.
 * In ECMAScript 5, strings can be treated like read-only arrays, and you can access in-
 * dividual characters (16-bit values) from a string using square brackets instead of the
 * charAt() method:
 * s = "hello, world";
 * s[0]                  // => "h"
 * s[s.length-1]         // => "d"
 * Mozilla-based web browsers such as Firefox have allowed strings to be indexed in this
 * way for a long time. Most modern browsers (with the notable exception of IE) followed
 * Mozilla’s lead even before this feature was standardized in ECMAScript 5.
 * 
 * 3.2.4  Pattern Matching
 * JavaScript defines a RegExp() constructor for creating objects that represent textual
 * patterns. These patterns are described with regular expressions, and JavaScript adopts
 * Perl’s syntax for regular expressions. Both strings and RegExp objects have methods
 * for  performing  pattern  matching  and  search-and-replace  operations  using  regular
 * expressions.
 * RegExps are not one of the fundamental types of JavaScript. Like Dates, they are simply
 * a specialized kind of object, with a useful API. The regular expression grammar is com-
 * plex and the API is nontrivial. They are documented in detail in Chapter 10. Because
 * RegExps are powerful and commonly used for text processing, however, this section
 * provides a brief overview.
 * Although RegExps are not one of the fundamental data types in the language, they do
 * have a literal syntax and can be encoded directly into JavaScript programs. Text be-
 * tween a pair of slashes constitutes a regular expression literal. The second slash in the
 * pair can also be followed by one or more letters, which modify the meaning of the
 * pattern. For example:
 * /^HTML/              // Match the letters H T M L at the start of a string
 * /[1-9][0-9]        // Match a non-zero digit, followed by any # of digits
 * /\bjavascript\b/i    // Match "javascript" as a word, case-insensitive
 * RegExp objects define a number of useful methods, and strings also have methods that
 * 
 * 
 * accept RegExp arguments. For example:
 * var text = "testing: 1, 2, 3";   // Sample text
 * var pattern = /\d+/g             // Matches all instances of one or more digits
 * pattern.test(text)               // => true: a match exists
 * text.search(pattern)             // => 9: position of first match
 * ext.match(pattern)              // => ["1", "2", "3"]: array of all matches
 * text.replace(pattern, "#");      // => "testing: #, #, #"
 * text.split(/\D+/);               // => ["","1","2","3"]: split on non-digits
 * null is a language keyword that evaluates to a special value that is usually used to
 * indicate the absence of a value. Using the typeof operator on null returns the string
 * “object”, indicating that null can be thought of as a special object value that indicates
 * “no object”. In practice, however, null is typically regarded as the sole member of its
 * own type, and it can be used to indicate “no value” for numbers and strings as well as
 * objects. Most programming languages have an equivalent to JavaScript’s null: you may
 * be familiar with it as null or nil.
 * JavaScript also has a second value that indicates absence of value. The undefined value
 * represents a deeper kind of absence. It is the value of variables that have not been
 * initialized and the value you get when you query the value of an object property or array
 * element that does not exist. The undefined value is also returned by functions that have
 * no return value, and the value of function parameters for which no argument is sup-
 * plied. undefined is a predefined global variable (not a language keyword like null) that
 * is initialized to the undefined value. In ECMAScript 3, undefined is a read/write vari-
 * able, and it can be set to any value. This error is corrected in ECMAScript 5 and
 * undefined is read-only in that version of the language. If you apply the typeof operator
 * to the undefined value, it returns “undefined”, indicating that this value is the sole
 * member of a special type.
 * 
 * You might consider undefined to represent a system-level, unexpected, or error-like
 * absence of value and null to represent program-level, normal, or expected absence of
 * value. If you need to assign one of these values to a variable or property or pass one of
 * these values to a function, null is almost always the right choice.
 * 3.5  The Global Object
 * The sections above have explained JavaScript’s primitive types and values. Object
 * types—objects, arrays, and functions—are covered in chapters of their own later in this
 * book. But there is one very important object value that we must cover now. The global
 * object is a regular JavaScript object that serves a very important purpose: the properties
 * of this object are the globally defined symbols that are available to a JavaScript program.
 * When the JavaScript interpreter starts (or whenever a web browser loads a new page),
 * it creates a new global object and gives it an initial set of properties that define:
 * • global properties like undefined, Infinity, and NaN
 * • global functions like isNaN(), parseInt() (§3.8.2), and eval() (§4.12).
 * • constructor  functions  like  Date(),  RegExp(),  String(),  Object(),  and  Array()
 * (§3.8.2)
 * • global objects like Math and JSON (§6.9)
 * The initial properties of the global object are not reserved words, but they deserve to
 * be treated as if they are. §2.4.1 lists each of these properties. This chapter has already
 * described some of these global properties. Most of the others will be covered elsewhere
 * in this book. And you can look them all up by name in the core JavaScript reference
 * section, or look up the global object itself under the name “Global”. For client-side
 * JavaScript, the Window object defines other globals that you can look up in the client-
 * side reference section.
 * In top-level code—JavaScript code that is not part of a function—you can use the
 * JavaScript keyword this to refer to the global object:
 * var global = this;  // Define a global variable to refer to the global object
 * In client-side JavaScript, the Window object serves as the global object for all JavaScript
 * code contained in the browser window it represents. This global Window object has a
 * self-referential window property that can be used instead of this to refer to the global
 * object. The Window object defines the core global properties, but it also defines quite
 * a few other globals that are specific to web browsers and client-side JavaScript.
 *
 * 3.6  Wrapper Objects
 * JavaScript objects are composite values: they are a collection of properties or named
 * values. We refer to the value of a property using the . notation. When the value of a
 * property is a function, we call it a method. To invoke the method m of an object o, we
 * write o.m().
 * We’ve also seen that strings have properties and methods:
 * var s = "hello world!";                             // A string
 * var word = s.substring(s.indexOf(" ")+1, s.length); // Use string properties
 * Strings are not objects, though, so why do they have properties? Whenever you try to
 * refer to a property of a string s, JavaScript converts the string value to an object as if by
 * calling new String(s). This object inherits (see §6.2.2) string methods and is used to
 * resolve the property reference. Once the property has been resolved, the newly created
 * object is discarded. (Implementations are not required to actually create and discard
 * this transient object: they must behave as if they do, however.)
 * Numbers and booleans have methods for the same reason that strings do: a temporary
 * object is created using the Number() or Boolean() constructor, and the method is re-
 * solved using that temporary object. There are not wrapper objects for the null and
 * undefined values: any attempt to access a property of one of these values causes a
 * TypeError.
 * Consider the following code and think about what happens when it is executed:
 * var s = "test";         // Start with a string value.
 * s.len = 4;              // Set a property on it.
 * var t = s.len;          // Now query the property.
 * When you run this code, the value of t is undefined. The second line of code creates a
 * temporary String object, sets its len property to 4, and then discards that object. The
 * third line creates a new String object from the original (unmodified) string value and
 * then tries to read the len property. This property does not exist, and the expression
 * evaluates to undefined. This code demonstrates that strings, numbers, and boolean
 * values behave like objects when you try to read the value of a property (or method)
 * from them. But if you attempt to set the value of a property, that attempt is silently
 * ignored: the change is made on a temporary object and does not persist.
 * The temporary objects created when you access a property of a string, number, or
 * boolean are known as wrapper objects, and it may occasionally be necessary to distin-
 * guish a string value from a String object or a number or boolean value from a Number
 * or  Boolean  object.  Usually,  however,  wrapper  objects  can  be  considered  an
 * var s = "test";         // Start with a string value.
s.len = 4;              // Set a property on it.
var t = s.len;          // Now query the property.
When you run this code, the value of t is undefined. The second line of code creates a
temporary String object, sets its len property to 4, and then discards that object. The
third line creates a new String object from the original (unmodified) string value and
then tries to read the len property. This property does not exist, and the expression
evaluates to undefined. This code demonstrates that strings, numbers, and boolean
values behave like objects when you try to read the value of a property (or method)
from them. But if you attempt to set the value of a property, that attempt is silently
ignored: the change is made on a temporary object and does not persist.
The temporary objects created when you access a property of a string, number, or
boolean are known as wrapper objects, and it may occasionally be necessary to distin-
guish a string value from a String object or a number or boolean value from a Number
or  Boolean  object.  Usually,  however,  wrapper  objects  can  be  considered  an

Note that it is possible (but almost never necessary or useful) to explicitly create wrap-
per objects, by invoking the String(), Number(), or Boolean() constructors:
var s = "test", n = 1, b = true;  // A string, number, and boolean value.
var S = new String(s);            // A String object
var N = new Number(n);            // A Number object
var B = new Boolean(b);           // A Boolean object
JavaScript converts wrapper objects into the wrapped primitive value as necessary, so
the objects S, N, and B above usually, but not always, behave just like the values s, n,
and b. The == equality operator treats a value and its wrapper object as equal, but you
can distinguish them with the === strict equality operator. The typeof operator will also
show you the difference between a primitive value and its wrapper object.
3.7  Immutable Primitive Values and Mutable Object
References
There is a fundamental difference in JavaScript between primitive values (undefined,
null, booleans, numbers, and strings) and objects (including arrays and functions).
Primitives are immutable: there is no way to change (or “mutate”) a primitive value.
This is obvious for numbers and booleans—it doesn’t even make sense to change the
value of a number. It is not so obvious for strings, however. Since strings are like arrays
of characters, you might expect to be able to alter the character at any specified index.
In fact, JavaScript does not allow this, and all string methods that appear to return a
modified string are, in fact, returning a new string value. For example:
var s = "hello";   // Start with some lowercase text
s.toUpperCase();   // Returns "HELLO", but doesn't alter s
s                  // => "hello": the original string has not changed

Primitives are also compared by value: two values are the same only if they have the
same value. This sounds circular for numbers, booleans, null, and undefined: there is
no other way that they could be compared. Again, however, it is not so obvious for
strings. If two distinct string values are compared, JavaScript treats them as equal if,
and only if, they have the same length and if the character at each index is the same.
Objects are different than primitives. First, they are mutable—their values can change:

var o = { x:1 };     // Start with an object
o.x = 2;             // Mutate it by changing the value of a property
o.y = 3;             // Mutate it again by adding a new property
var a = [1,2,3]      // Arrays are also mutable
a[0] = 0;            // Change the value of an array element
a[3] = 4;            // Add a new array element
Objects are sometimes called reference types to distinguish them from JavaScript’s
primitive types. Using this terminology, object values are references, and we say that
objects are compared by reference: two object values are the same if and only if they
refer to the same underlying object.
var a = [];   // The variable a refers to an empty array.
var b = a;    // Now b refers to the same array.
b[0] = 1;     // Mutate the array referred to by variable b.
a[0]          // => 1: the change is also visible through variable a.
a === b       // => true: a and b refer to the same object, so they are equal.
As you can see from the code above, assigning an object (or array) to a variable simply
assigns the reference: it does not create a new copy of the object. If you want to make
a new copy of an object or array, you must explicitly copy the properties of the object
or the elements of the array. This example demonstrates using a for loop (§5.5.3):

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

3.8  Type Conversions
JavaScript is very flexible about the types of values it requires. We’ve seen this for
booleans: when JavaScript expects a boolean value, you may supply a value of any type,
and JavaScript will convert it as needed. Some values (“truthy” values) convert to
true and others (“falsy” values) convert to false. The same is true for other types: if
JavaScript wants a string, it will convert whatever value you give it to a string. If Java-
Script wants a number, it will try to convert the value you give it to a number (or to
NaN if it cannot perform a meaningful conversion). Some examples:
10 + " objects"     // => "10 objects".  Number 10 converts to a string
"7" * "4"           // => 28: both strings convert to numbers
3.8  Type Conversions | 45
Core JavaScript


toFixed() converts a number to a string with a specified number
of digits after the decimal point. It never uses exponential notation. toExponential()
converts a number to a string using exponential notation, with one digit before the
decimal point and a specified number of digits after the decimal point (which means
that the number of significant digits is one larger than the value you specify). toPreci
sion() converts a number to a string with the number of significant digits you specify.
It uses exponential notation if the number of significant digits is not large enough to
display the entire integer portion of the number. Note that all three methods round the
trailing digits or pad with zeros as appropriate. Consider the following examples:
var n = 123456.789;
n.toFixed(0);         // "123457"
n.toFixed(2);         // "123456.79"
n.toFixed(5);         // "123456.78900"
n.toExponential(1);   // "1.2e+5"
n.toExponential(3);   // "1.235e+5"
n.toPrecision(4);     // "1.235e+5"
n.toPrecision(7);     // "123456.8"
n.toPrecision(10);    // "123456.7890"
If you pass a string to the Number() conversion function, it attempts to parse that string
as an integer or floating-point literal. That function only works for base-10 integers,
and does not allow trailing characters that are not part of the literal. The parseInt()
48 | Chapter 3: Types, Values, and Variables
and parseFloat() functions (these are global functions, not methods of any class) are
more flexible. parseInt() parses only integers, while parseFloat() parses both integers
and floating-point numbers. If a string begins with “0x” or “0X”, parseInt() interprets
it as a hexadecimal number.2 Both parseInt() and parseFloat() skip leading white-
space, parse as many numeric characters as they can, and ignore anything that follows.
If the first nonspace character is not part of a valid numeric literal, they return NaN:
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
parseInt() accepts an optional second argument specifying the radix (base) of the
number to be parsed. Legal values are between 2 and 36. For example:
parseInt("11", 2);           // => 3 (1*2 + 1)
parseInt("ff", 16);          // => 255 (15*16 + 15)
parseInt("zz", 36);          // => 1295 (35*36 + 35)
parseInt("077", 8);          // => 63 (7*8 + 7)
parseInt("077", 10);         // => 77 (7*10 + 7)
3.8.3  Object to Primitive Conversions
Object-to-boolean conversions are trivial: all objects (including arrays and functions)
convert to true. This is so even for wrapper objects: new Boolean(false) is an object
rather than a primitive value, and so it converts to true.
Object-to-string and object-to-number conversions are performed by invoking a meth-
od of the object to be converted. This is complicated by the fact that JavaScript objects
have two different methods that perform conversions, and it is also complicated by
some special cases described below. Note that the string and number conversion rules
described here apply only to native objects. Host objects (defined by web browsers, for
example) can convert to numbers and strings according to their own algorithms.
All objects inherit two conversion methods. The first is called toString(), and its job
is to return a string representation of the object. The default toString() method does
not return a very interesting value (though we’ll find it useful in Example 6-4):
({x:1, y:2}).toString()    // => "[object Object]"
2. In ECMAScript 3, parseInt() may parse a string that begins with “0” (but not “0x” or “0X”) as an octal
number or as a decimal number. Because the behavior is unspecified, you should never use parseInt()
to parse numbers with leading zeros, unless you explicitly specify the radix to be used! In ECMAScript 5,
parseInt() only parses octal numbers if you explicitly pass 8 as the second argument.
3.8  Type Conversions | 49
Core JavaScript
Many classes define more specific versions of the toString() method. The toString()
method of the Array class, for example, converts each array element to a string and
joins the resulting strings together with commas in between. The toString() method
of the Function class returns an implementation-defined representation of a function.
In practice, implementations usually convert user-defined functions to strings of Java-
Script source code. The Date class defines a toString() method that returns a human-
readable (and JavaScript-parsable) date and time string. The RegExp class defines a
toString() method that converts RegExp objects to a string that looks like a RegExp
literal:
[1,2,3].toString()                  // => "1,2,3"
(function(x) { f(x); }).toString()  // => "function(x) {\n    f(x);\n}"
/\d+/g.toString()                   // => "/\\d+/g"
new Date(2010,0,1).toString()  // => "Fri Jan 01 2010 00:00:00 GMT-0800 (PST)"
The other object conversion function is called valueOf(). The job of this method is less
well-defined: it is supposed to convert an object to a primitive value that represents the
object, if any such primitive value exists. Objects are compound values, and most ob-
jects cannot really be represented by a single primitive value, so the default valueOf()
method simply returns the object itself rather than returning a primitive. Wrapper
classes define valueOf() methods that return the wrapped primitive value. Arrays,
functions,  and  regular  expressions  simply  inherit  the  default  method.  Calling
valueOf() for instances of these types simply returns the object itself. The Date class
defines a valueOf() method that returns the date in its internal representation: the
number of milliseconds since January 1, 1970:
var d = new Date(2010, 0, 1);   // January 1st, 2010, (Pacific time)
d.valueOf()                     // => 1262332800000
With the toString() and valueOf() methods explained, we can now cover object-to-
string and object-to-number conversions. Do note, however, that there are some special
cases in which JavaScript performs a different object-to-primitive conversion. These
special cases are covered at the end of this section.
To convert an object to a string, JavaScript takes these steps:
• If the object has a toString() method, JavaScript calls it. If it returns a primitive
value, JavaScript converts that value to a string (if it is not already a string) and
returns the result of that conversion. Note that primitive-to-string conversions are
all well-defined in Table 3-2.
• If the object has no toString() method, or if that method does not return a primitive
value, then JavaScript looks for a valueOf() method. If the method exists, Java-
Script calls it. If the return value is a primitive, JavaScript converts that value to a
string (if it is not already) and returns the converted value.
• Otherwise, JavaScript cannot obtain a primitive value from either toString() or
valueOf(), so it throws a TypeError.
50 | Chapter 3: Types, Values, and Variables
To convert an object to a number, JavaScript does the same thing, but it tries the
valueOf() method first:
• If the object has a valueOf() method that returns a primitive value, JavaScript con-
verts (if necessary) that primitive value to a number and returns the result.
• Otherwise, if the object has a toString() method that returns a primitive value,
JavaScript converts and returns the value.
• Otherwise, JavaScript throws a TypeError.
The details of this object-to-number conversion explain why an empty array converts
to the number 0 and why an array with a single element may also convert to a number.
Arrays inherit the default valueOf() method that returns an object rather than a prim-
itive value, so array-to-number conversion relies on the toString() method. Empty
arrays convert to the empty string. And the empty string converts to the number 0. An
array with a single element converts to the same string that that one element does. If
an array contains a single number, that number is converted to a string, and then back
to a number.
The + operator in JavaScript performs numeric addition and string concatenation. If
either of its operands is an object, JavaScript converts the object using a special object-
to-primitive conversion rather than the object-to-number conversion used by the other
arithmetic operators. The == equality operator is similar. If asked to compare an object
with a primitive value, it converts the object using the object-to-primitive conversion.
The object-to-primitive conversion used by + and == includes a special case for Date
objects. The Date class is the only predefined core JavaScript type that defines mean-
ingful conversions to both strings and numbers. The object-to-primitive conversion is
basically an object-to-number conversion (valueof() first) for all objects that are not
dates, and an object-to-string conversion (toString() first) for Date objects. The con-
version is not exactly the same as those explained above, however: the primitive value
returned by valueOf() or toString() is used directly without being forced to a number
or string.
The < operator and the other relational operators perform object-to-primitive conver-
sions like == does, but without the special case for Date objects: any object is converted
by trying valueOf() first and then toString(). Whatever primitive value is obtained is
used directly, without being further converted to a number or string.
+, ==, != and the relational operators are the only ones that perform this special kind of
string-to-primitive conversions. Other operators convert more explicitly to a specified
type and do not have any special case for Date objects. The - operator, for example,
converts its operands to numbers. The following code demonstrates the behavior of
+, -, ==, and > with Date objects:
var now = new Date();     // Create a Date object
typeof (now + 1)          // => "string": + converts dates to strings
typeof (now - 1)          // => "number": - uses object-to-number conversion
3.8  Type Conversions | 51
Core JavaScript
now == now.toString()     // => true: implicit and explicit string conversions
now > (now -1)            // => true: > converts a Date to a numbe


 */


/**
 * // CHAPTER 2: LEXICAL STRUCTURE
 * This short chapter documents the lexical structure of JavaScript. Itcovers:
 * Case sensitivity | spaces | line breaks | Comments | Literals | Identifiers and reserved words | Unicode | Optional semicolons
 * 
 * An identifier is simply a name. In JavaScript, identifiers are used to
 * name constants, variables, properties, functions, and classes and to
 * provide labels for certain loops in JavaScript code. A JavaScript
 * identifier must begin with a letter, an underscore (_), or a dollar sign($).
 * 
 * reserved keywords that must
not be used as the names of constants, variables, functions, or classes
(though they can all be used as the names of properties within an
object). 


from, of, get, and set are used in limited
contexts with no syntactic ambiguity and are perfectly legal as
identifiers.

js keyword that are not currently in use but might be used in the future
enum  implements  interface  package  private  protected public

JavaScript defines
escape sequences that allow us to write Unicode characters using only
ASCII characters. These Unicode escapes begin with the characters \u
and are either followed by exactly four hexadecimal digits (using
uppercase or lowercase letters A–F) or by one to six hexadecimal digits
enclosed within curly braces. 

these unicode xters are used to print smiley face emojis
console.log("\u{1F600}");  console.log("\u{1F601}");  console.log("\u{1F611}");  console.log("\u{1F622}"); 

2.6 Optional Semicolons
JavaScript uses the semicolon (;)
to separate statements (see Chapter 5) from one another. This is
important for making the meaning of your code clear: without a
separator, the end of one statement might appear to be the beginning of
the next, or vice versa. In JavaScript, you can usually omit the
semicolon between two statements if those statements are written on
separate lines. (You can also omit a semicolon at the end of a program
or if the next token in the program is a closing curly brace: }.) Many
JavaScript programmers (and the code in this book) use semicolons to
explicitly mark the ends of statements, even where they are not
required. Another style is to omit semicolons whenever possible, using
them only in the few situations that require them. Whichever style you
choose, there are a few details you should understand about optional
semicolons in JavaScript.
js uses the semicolon (;) to sepearte statement from one another. however in js the semicolon can be omited btw two statement if those statement is writtten on a seperataeline
There are three exceptions to the general rule that JavaScript interprets
line breaks as semicolons when it cannot parse the second line as a
continuation of the statement on the first line. The first exception
involves the return, throw, yield, break, and continue
statements (see Chapter 5). These statements often stand alone, but
they are sometimes followed by an identifier or expression. If a line
break appears after any of these words (before any other tokens),
JavaScript will always interpret that line break as a semicolon. For
example, if you write:
return
true;
JavaScript assumes you meant:
return; true;
However, you probably meant:
return true;

This means that you must not insert a line break between return,
break, or continue and the expression that follows the keyword. If
you do insert a line break, your code is likely to fail in a nonobvious
way that is difficult to debug.
The second exception involves the ++ and −− operators (§4.8). These
operators can be prefix operators that appear before an expression or
postfix operators that appear after an expression. If you want to use
either of these operators as postfix operators, they must appear on the
same line as the expression they apply to. The third exception involves
functions defined using concise “arrow” syntax: the => arrow itself
must appear on the same line as the parameter list.


 */


/**
 *   Chapter 3. Types, Values, and Variables
 * 
 * 3.1 Overview and Definitions
JavaScript types can be divided into two categories: primitive types and
object types. JavaScript’s primitive types include numbers, strings of
text (known as strings), and Boolean truth values (known as booleans).
A significant portion of this chapter is dedicated to a detailed
explanation of the numeric (§3.2) and string (§3.3) types in JavaScript.
Booleans are covered in §3.4.
The special JavaScript values null and undefined are primitive
values, but they are not numbers, strings, or booleans. Each value is
typically considered to be the sole member of its own special type. §3.5
has more about null and undefined. ES6 adds a new special-
purpose type, known as Symbol, that enables the definition of language
extensions without harming backward compatibility. Symbols are
covered briefly in §3.6.
Any JavaScript value that is not a number, a string, a boolean, a
symbol, null, or undefined is an object. An object (that is, a
member of the type object) is a collection of properties where each
property has a name and a value (either a primitive value or another
object). One very special object, the global object, is covered in §3.7,
but more general and more detailed coverage of objects is in Chapter 6.
An ordinary JavaScript object is an unordered collection of named
values. The language also defines a special kind of object, known as an
array, that represents an ordered collection of numbered values. The
JavaScript language includes special syntax for working with arrays,
and arrays have some special behavior that distinguishes them from
ordinary objects. Arrays are the subject of Chapter 7.
In addition to basic objects and arrays, JavaScript defines a number of
other useful object types. A Set object represents a set of values. A
Map object represents a mapping from keys to values. Various “typed
array” types facilitate operations on arrays of bytes and other binary
data. The RegExp type represents textual patterns and enables
sophisticated matching, searching, and replacing operations on strings.
The Date type represents dates and times and supports rudimentary
date arithmetic. Error and its subtypes represent errors that can arise
when executing JavaScript code. All of these types are covered in
Chapter 11.
JavaScript differs from more static languages in that functions and
classes are not just part of the language syntax: they are themselves
values that can be manipulated by JavaScript programs. Like any
JavaScript value that is not a primitive value, functions and classes are
a specialized kind of object. They are covered in detail in Chapters 8
and 9.
The JavaScript interpreter performs automatic garbage collection for
memory management. This means that a JavaScript programmer
generally does not need to worry about destruction or deallocation of
objects or other values. When a value is no longer reachable—when a
program no longer has any way to refer to it—the interpreter knows it
can never be used again and automatically reclaims the memory it was
occupying. (JavaScript programmers do sometimes need to take care to
ensure that values do not inadvertently remain reachable—and
therefore nonreclaimable—longer than necessary.)
JavaScript supports an object-oriented programming style. Loosely,
this means that rather than having globally defined functions to operate
on values of various types, the types themselves define methods for
working with values. To sort the elements of an array a, for example,
we don’t pass a to a sort() function. Instead, we invoke the
sort() method of a:
a.sort();       // The object-oriented version of sort(a).

arithmetic in JavaScript does not raise errors in cases of overflow,
underflow, or division by zero. When the result of a numeric operation
is larger than the largest representable number (overflow), the result is
a special infinity value, Infinity. Similarly, when the absolute
value of a negative value becomes larger than the absolute value of the
largest representable negative number, the result is negative infinity, -
Infinity. The infinite values behave as you would expect: adding,
subtracting, multiplying, or dividing them by anything results in an
infinite value (possibly with the sign reversed).
Underflow occurs when the result of a numeric operation is closer to
Underflow occurs when the result of a numeric operation is closer to
zero than the smallest representable number. In this case, JavaScript
returns 0. If underflow occurs from a negative number, JavaScript
returns a special value known as “negative zero.” This value is almost
completely indistinguishable from regular zero and JavaScript
programmers rarely need to detect it.
Division by zero is not an error in JavaScript: it simply returns infinity
or negative infinity. There is one exception, however: zero divided by
zero does not have a well-defined value, and the result of this operation
is the special not-a-number value, NaN. NaN also arises if you attempt
to divide infinity by infinity, take the square root of a negative number,
or use arithmetic operators with non-numeric operands that cannot be
converted to numbers.
JavaScript predefines global constants Infinity and NaN to hold the
positive infinity and not-a-number value, and these values are also
available as properties of the Number object:
Infinity                    // A positive number too big to 
represent
Number.POSITIVE_INFINITY    // Same value
1/0                         // => Infinity
Number.MAX_VALUE * 2        // => Infinity; overflow
-Infinity                   // A negative number too big to 
represent
Number.NEGATIVE_INFINITY    // The same value
-1/0                        // => -Infinity
-Number.MAX_VALUE * 2       // => -Infinity
NaN                         // The not-a-number value
Number.NaN                  // The same value, written 
another way
0/0                         // => NaN



timestamp that specifies the number of elapsed milliseconds since
January 1, 1970:
let timestamp = Date.now();  // The current time as a 
timestamp (a number).
let now = new Date();        // The current time as a Date 
object.
let ms = now.getTime();      // Convert to a millisecond 
timestamp.
let iso = now.toISOString(); // Convert to a string in 
standard format.
The Date class and its methods are covered in detail in §11.4. But we
will see Date objects again in §3.9.3 when we examine the details of
JavaScript type conversions.
3.3 Text
The JavaScript type for representing text is the string. A string is an
immutable ordered sequence of 16-bit values, each of which typically
represents a Unicode character. The length of a string is the number of
16-bit values it contains. JavaScript’s strings (and its arrays) use zero-
based indexing: the first 16-bit value is at position 0, the second at
position 1, and so on. The empty string is the string of length 0.
JavaScript does not have a special type that represents a single element
of a string. To represent a single 16-bit value, simply use a string that
has a length of 1.
CHARACTERS, CODEPOINTS, AND JAVASCRIPT STRINGS
JavaScript uses the UTF-16 encoding of the Unicode character set, and JavaScript strings are
sequences of unsigned 16-bit values. The most commonly used Unicode characters (those from the
“basic multilingual plane”) have codepoints that fit in 16 bits and can be represented by one element
of a string. Unicode characters whose codepoints do not fit in 16 bits are encoded using the rules of
UTF-16 as a sequence (known as a “surrogate pair”) of two 16-bit values. This means that a
JavaScript string of length 2 (two 16-bit values) might represent only a single Unicode character:
let euro = "€";
let love = "❤";
euro.length   // => 1: this character has one 16-bit element
love.length   // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
Most string-manipulation methods defined by JavaScript operate on 16-bit values, not characters.
They do not treat surrogate pairs specially, they perform no normalization of the string, and don’t even
ensure that a string is well-formed UTF-16.
In ES6, however, strings are iterable, and if you use the for/of loop or ... operator with a string, it
will iterate the actual characters of the string, not the 16-bit values.
3.3.1 String Literals
To include a string in a JavaScript program, simply enclose the
characters of the string within a matched pair of single or double
quotes or backticks (' or " or `). Double-quote characters and
backticks may be contained within strings delimited by single-quote
characters, and similarly for strings delimited by double quotes and
backticks. Here are examples of string literals:
""  // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"τ is the ratio of a circle's circumference to its radius"
`"She said 'hi'", he said.`
Strings delimited with backticks are a feature of ES6, and allow
JavaScript expressions to be embedded within (or interpolated into) the
string literal. This expression interpolation syntax is covered in §3.3.4.
The original versions of JavaScript required string literals to be written
on a single line, and it is common to see JavaScript code that creates
long strings by concatenating single-line strings with the + operator. As
of ES5, however, you can break a string literal across multiple lines by
ending each line but the last with a backslash (\). Neither the backslash
nor the line terminator that follow it are part of the string literal. If you
need to include a newline character in a single-quoted or double-quoted
string literal, use the character sequence \n (documented in the next
section). The ES6 backtick syntax allows strings to be broken across
multiple lines, and in this case, the line terminators are part of the
string literal:
// A string representing 2 lines written on one line:
'two\nlines'
// A one-line string written on 3 lines:
"one\
 long\
 line"
// A two-line string written on two lines:
`the newline character at the end of this line
is included literally in this string`
Note that when you use single quotes to delimit your strings, you must
be careful with English contractions and possessives, such as can’t and
O’Reilly’s. Since the apostrophe is the same as the single-quote
character, you must use the backslash character (\) to “escape” any
apostrophes that appear in single-quoted strings (escapes are explained
in the next section).
In client-side JavaScript programming, JavaScript code may contain
strings of HTML code, and HTML code may contain strings of
JavaScript code. Like JavaScript, HTML uses either single or double
quotes to delimit its strings. Thus, when combining JavaScript and
HTML, it is a good idea to use one style of quotes for JavaScript and
the other style for HTML. In the following example, the string “Thank
you” is single-quoted within a JavaScript expression, which is then
double-quoted within an HTML event-handler attribute:
<button onclick="alert('Thank you')">Click Me</button>
3.3.2 Escape Sequences in String Literals
The backslash character (\) has a special purpose in JavaScript strings.
Combined with the character that follows it, it represents a character
that is not otherwise representable within the string. For example, \n is
an escape sequence that represents a newline character.
Another example, mentioned earlier, is the \' escape, which represents
the single quote (or apostrophe) character. This escape sequence is
useful when you need to include an apostrophe in a string literal that is
contained within single quotes. You can see why these are called
escape sequences: the backslash allows you to escape from the usual
interpretation of the single-quote character. Instead of using it to mark
the end of the string, you use it as an apostrophe:
'You\'re right, it can\'t be a quote'
Table 3-1 lists the JavaScript escape sequences and the characters they
represent. Three escape sequences are generic and can be used to
represent any character by specifying its Unicode character code as a
hexadecimal number. For example, the sequence \xA9 represents the
copyright symbol, which has the Unicode encoding given by the
hexadecimal number A9. Similarly, the \u escape represents an
arbitrary Unicode character specified by four hexadecimal digits or one
to five digits when the digits are enclosed in curly braces: \u03c0
represents the character π, for example, and \u{1f600} represents
the “grinning face” emoji.
Table 3-1. JavaScript escape sequences
Sequ
ence Character represented
\0 The NUL character (\u0000)
\b Backspace (\u0008)
\t Horizontal tab (\u0009)
\n Newline (\u000A)
\v Vertical tab (\u000B)
\f Form feed (\u000C)
\r Carriage return (\u000D)
\" Double quote (\u0022)
\' Apostrophe or single quote (\u0027)
\\ Backslash (\u005C)
\xnn The Unicode character specified by the two hexadecimal digits nn
\unn
nn
The Unicode character specified by the four hexadecimal digits nnnn
\u{n
}
The Unicode character specified by the codepoint n, where n is one to six 
hexadecimal digits between 0 and 10FFFF (ES6)
If the \ character precedes any character other than those shown in
Table 3-1, the backslash is simply ignored (although future versions of
the language may, of course, define new escape sequences). For
example, \# is the same as #. Finally, as noted earlier, ES5 allows a
backslash before a line break to break a string literal across multiple
lines.
3.3.3 Working with Strings
One of the built-in features of JavaScript is the ability to concatenate
strings. If you use the + operator with numbers, it adds them. But if
you use this operator on strings, it joins them by appending the second
to the first. For example:
let msg = "Hello, " + "world";   // Produces the string 
"Hello, world"
let greeting = "Welcome to my blog," + " " + name;
Strings can be compared with the standard === equality and !==
inequality operators: two strings are equal if and only if they consist of
exactly the same sequence of 16-bit values. Strings can also be
compared with the <, <=, >, and >= operators. String comparison is
done simply by comparing the 16-bit values. (For more robust locale-
aware string comparison and sorting, see §11.7.3.)
To determine the length of a string—the number of 16-bit values it
contains—use the length property of the string:
s.length
In addition to this length property, JavaScript provides a rich API for
working with strings:
let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th 
characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at 
delimiter string
// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or 
after 3
s.indexOf("zz")         // => -1: s does not include the 
substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with 
these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", 
"NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the 
specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 
16 bits
// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left 
to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right 
to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to 
a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right 
to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start 
and end
" test ".trimStart()    // => "test ": remove spaces on left. 
Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at 
right. Also trimRight
// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + 
operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n 
copies. ES6
Remember that strings are immutable in JavaScript. Methods like
replace() and toUpperCase() return new strings: they do not
modify the string on which they are invoked.
Strings can also be treated like read-only arrays, and you can access
individual characters (16-bit values) from a string using square
brackets instead of the charAt() method:
let s = "hello, world";
s[0]                  // => "h"
s[s.length-1]         // => "d"
 */


/**
 * The && operator performs the Boolean AND operation. It evaluates to
a truthy value if and only if both of its operands are truthy; it evaluates
to a falsy value otherwise. The || operator is the Boolean OR
operation: it evaluates to a truthy value if either one (or both) of its
operands is truthy and evaluates to a falsy value if both operands are
falsy. Finally, the unary ! operator performs the Boolean NOT
operation: it evaluates to true if its operand is falsy and evaluates to
false if its operand is truthy. For example:
if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
}
Full details on these operators are in §4.10
3.5 null and undefined
null is a language keyword that evaluates to a special value that is
usually used to indicate the absence of a value. Using the typeof
operator on null returns the string “object”, indicating that null can
be thought of as a special object value that indicates “no object”. In
practice, however, null is typically regarded as the sole member of its
own type, and it can be used to indicate “no value” for numbers and
strings as well as objects. Most programming languages have an
equivalent to JavaScript’s null: you may be familiar with it as NULL,
nil, or None.
JavaScript also has a second value that indicates absence of value. The
undefined value represents a deeper kind of absence. It is the value
of variables that have not been initialized and the value you get when
you query the value of an object property or array element that does not
exist. The undefined value is also the return value of functions that
do not explicitly return a value and the value of function parameters for
which no argument is passed. undefined is a predefined global
constant (not a language keyword like null, though this is not an
important distinction in practice) that is initialized to the undefined
value. If you apply the typeof operator to the undefined value, it
returns “undefined”, indicating that this value is the sole member of a
special type.
Despite these differences, null and undefined both indicate an
absence of value and can often be used interchangeably. The equality
operator == considers them to be equal. (Use the strict equality
operator === to distinguish them.) Both are falsy values: they behave
like false when a boolean value is required. Neither null nor
undefined have any properties or methods. In fact, using . or [] to
access a property or method of these values causes a TypeError.
I consider undefined to represent a system-level, unexpected, or
error-like absence of value and null to represent a program-level,
normal, or expected absence of value. I avoid using null and
undefined when I can, but if I need to assign one of these values to
a variable or property or pass or return one of these values to or from a
function, I usually use null. Some programmers strive to avoid null
entirely and use undefined in its place wherever they can.

When the JavaScript interpreter starts (or
whenever a web browser loads a new page), it creates a new global
object and gives it an initial set of properties that define:
Global constants like undefined, Infinity, and NaN
Global functions like isNaN(), parseInt() (§3.9.2), and
eval() (§4.12)
Constructor functions like Date(), RegExp(), String(),
Object(), and Array() (§3.9.2)
Global objects like Math and JSON (§6.8)
 */

/**
 * Table 3-2. JavaScript type conversions
 * Value:      | to String   | to Number | to Boolean
 * undefined:  |"undefined"  |NaN        |false
 * null:       | "null"      |0          |false
 * true:       | "true"      |1
 * false:      | "false"     |0
 * ""(empty string)          |0          |false
"1.2" (nonempty, numeric) 1.2 true
"one" (nonempty, non-numeric) NaN true
0 "0" false
-0 "0" false
1 (finite, non-zero) "1" true
Infinity "Infinity" true
-Infinity "-Infinity" true
NaN "NaN" false
{} (any object) see §3.9.3 see §3.9.3 true
[] (empty array) "" 0 true
[9] (one numeric element) "9" 9 true
['a'] (any other array) use join() method NaN true
function(){} (any function) see §3.9.3 NaN true
 */

/**
 * With the toString() and valueOf() methods explained, we can
now explain approximately how the three object-to-primitive
algorithms work (the complete details are deferred until §14.4.7):
The prefer-string algorithm first tries the toString()
method. If the method is defined and returns a primitive value,
then JavaScript uses that primitive value (even if it is not a
string!). If toString() does not exist or if it returns an
object, then JavaScript tries the valueOf() method. If that
method exists and returns a primitive value, then JavaScript
uses that value. Otherwise, the conversion fails with a
TypeError.
The prefer-number algorithm works like the prefer-string
algorithm, except that it tries valueOf() first and
toString() second.
The no-preference algorithm depends on the class of the
object being converted. If the object is a Date object, then
JavaScript uses the prefer-string algorithm. For any other
object, JavaScript uses the prefer-number algorithm.
The rules described here are true for all built-in JavaScript types and
are the default rules for any classes you define yourself. §14.4.7
explains how you can define your own object-to-primitive conversion
algorithms for the classes you define.
Before we leave this topic, it is worth noting that the details of the
prefer-number conversion explain why empty arrays convert to the
number 0 and single-element arrays can also convert to numbers:
Number([])    // => 0: this is unexpected!
Number([99])  // => 99: really?
The object-to-number conversion first converts the object to a primitive
using the prefer-number algorithm, then converts the resulting
primitive value to a number. The prefer-number algorithm tries
valueOf() first and then falls back on toString(). But the Array
class inherits the default valueOf() method, which does not return a
primitive value. So when we try to convert an array to a number, we
end up invoking the toString() method of the array. Empty arrays
convert to the empty string. And the empty string converts to the
number 0. An array with a single element converts to the same string
that that one element does. If an array contains a single number, that
number is converted to a string, and then back to a number.
3.10 Variable Declaration and Assignment
One of the most fundamental techniques of computer programming is
the use of names—or identifiers—to represent values. Binding a name
to a value gives us a way to refer to that value and use it in the
programs we write. When we do this, we typically say that we are
assigning a value to a variable. The term “variable” implies that new
values can be assigned: that the value associated with the variable may
vary as our program runs. If we permanently assign a value to a name,
then we call that name a constant instead of a variable.
Before you can use a variable or constant in a JavaScript program, you
must declare it. In ES6 and later, this is done with the let and const
keywords, which we explain next. Prior to ES6, variables were
declared with var, which is more idiosyncratic and is explained later
on in this section.
*/

/**
 * Although var and let have the same syntax, there are important
differences in the way they work:
Variables declared with var do not have block scope. Instead,
they are scoped to the body of the containing function no
matter how deeply nested they are inside that function.
If you use var outside of a function body, it declares a global
variable. But global variables declared with var differ from
globals declared with let in an important way. Globals
declared with var are implemented as properties of the global
object (§3.7). The global object can be referenced as
globalThis. So if you write var x = 2; outside of a
function, it is like you wrote globalThis.x = 2;. Note
however, that the analogy is not perfect: the properties created
with global var declarations cannot be deleted with the
delete operator (§4.13.4). Global variables and constants
declared with let and const are not properties of the global
object.
Unlike variables declared with let, it is legal to declare the
same variable multiple times with var. And because var
variables have function scope instead of block scope, it is
actually common to do this kind of redeclaration. The variable
i is frequently used for integer values, and especially as the
index variable of for loops. In a function with multiple for
loops, it is typical for each one to begin for(var i = 0;
.... Because var does not scope these variables to the loop
body, each of these loops is (harmlessly) re-declaring and re-
initializing the same variable.
One of the most unusual features of var declarations is
known as hoisting. When a variable is declared with var, the
declaration is lifted up (or “hoisted”) to the top of the
enclosing function. The initialization of the variable remains
where you wrote it, but the definition of the variable moves to
the top of the function. So variables declared with var can be
used, without error, anywhere in the enclosing function. If the
initialization code has not run yet, then the value of the
variable may be undefined, but you won’t get an error if
you use the variable before it is initialized. (This can be a
source of bugs and is one of the important misfeatures that
let corrects: if you declare a variable with let but attempt
to use it before the let statement runs, you will get an actual
error instead of just seeing an undefined value.)
USING UNDECLARED VARIABLES
In strict mode (§5.6.3), if you attempt to use an undeclared variable, you’ll get a
reference error when you run your code. Outside of strict mode, however, if you
assign a value to a name that has not been declared with let, const, or var,
you’ll end up creating a new global variable. It will be a global no matter now
deeply nested within functions and blocks your code is, which is almost certainly
not what you want, is bug-prone, and is one of the best reasons for using strict
mode!
Global variables created in this accidental way are like global variables declared
with var: they define properties of the global object. But unlike the properties
defined by proper var declarations, these properties can be deleted with the
delete operator (§4.13.4).
3.10.3 Destructuring Assignment
 */

/**
 * Some key points to remember about this chapter:
How to write and manipulate numbers and strings of text in
JavaScript.
How to work with JavaScript’s other primitive types:
booleans, Symbols, null, and undefined.
The differences between immutable primitive types and
mutable reference types.
How JavaScript converts values implicitly from one type to
another and how you can do so explicitly in your programs.
How to declare and initialize constants and variables
(including with destructuring assignment) and the lexical
scope of the variables and constants you declare.
1  This is the format for numbers of type double in Java, C++, and most modern
programming languages.
2  There are JavaScript extensions, such as TypeScript and Flow (§17.8), that allow types to
be specified as part of variable declarations with syntax like let x: number = 0;.
 */

/**
 * chapter 4
 * 4.4 Property Access Expressions
A property access expression evaluates to the value of an object
property or an array element. JavaScript defines two syntaxes for
property access:
expression . identifier
expression [ expression ]
The first style of property access is an expression followed by a period
and an identifier. The expression specifies the object, and the identifier
specifies the name of the desired property. The second style of property
access follows the first expression (the object or array) with another
expression in square brackets. This second expression specifies the
name of the desired property or the index of the desired array element.
Here are some concrete examples:
let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]];    // An example array that contains 
the object
o.x                        // => 1: property x of expression 
o
o.y.z                      // => 3: property z of expression 
o.y
o["x"]                     // => 1: property x of object o
a[1]                       // => 4: element at index 1 of 
expression a
a[2]["1"]                  // => 6: element at index 1 of 
expression a[2]

 */