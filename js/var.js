 // this file write about variables in javascript
 let greet = "hello world!"
 console.log(greet);

 var n1 = 44
 var n2 = 33
 var n3 = n1 * n2
 console.log(n3);


 let msg = "Hello World!"
 console.log(msg);

 msg = "nice weather";
 console.log(msg);

 msg = "Adamu Labaran";
 console.log(msg);

 // constant variables is declears as const| The naming convention for a constant is to use all uppercase letters
 const PI = 3.142;
 console.log(PI);

 // The "var" keyword is used to declare variables with a global scope.
 if(true){
     var name = "Adamu Labaran";
     console.log(name); // local scope
 } 
 console.log(name); // global scope
 /**
  * This is because any variable declared using the var keyword is accessible from everywhere. 
  * The scope of that variable is global.
  * hence var keyword is a global scope.
  * On the other hand, the let keyword has a block scope, 
  * which means the variable is only accessible from the block and all its child blocks.
  * A variable declared using the let keyword is identical 
  * to a variable declared using var except for the scope level.
 */

 if(true){
     let fullName = "Ismail Labaran";
     console.log(fullName); // the cosole here works because let only obeys block scope.
 }

 // console.log(fullName); error because let block/local scope cant be visible everywhere in the program

 /**
  * Write a program with three variables, each with the following value:
  * The first variable contains your name
  * The second variable contains your age
  * The third variable contains your occupation
  * Then print the variables using the console.log() method. Here's the example output: 
 */

 let myName = "Adamu Labaran";
 let myAge = 27;
 let myOccupation = "student";
 console.log(myName);
 console.log(myAge);
 console.log(myOccupation);

 let myname = "Adamu";
 let topic = "javaScript";
 console.log(`${myname} is learning ${topic} today!`);


 // Anytime you declare a variable without assigning any value, the undefined value will be assigned to that variable. For example:
 let vals;
 console.log(vals); //undefined

 let last_name = undefined;  //assigning undefined to a variable
 console.log(last_name);

 // JavaScript treats undefined as the "default" empty value and null as the "intentional" empty value.

 // typecasting
 let x = 8;
 let y = "7";
 console.log(x + y);  //output: 87;

 /**
  * In JavaScript, type coercion is a process where a value of one type is implicitly converted into another type.
 */ 

 console.log(1 + "1"); // the output is 11 instead of 2. this is because of type coercion


 // It seems that JavaScript will first convert data types to string when it finds different data types:
 let n11 = 1 + "1";
 console.log(n11); // output: 11

 let n22 = [1,2] + "1";
 console.log(n22); // output: 1,21

 let n33 = true + "1";
 console.log(n33); // output: true1

 /**
  * JavaScript can calculate between boolean and numeric types, 
  * because boolean values true and false implicitly has the numeric value of 1 and 0:
 */

 let num1 = true + 1;
 console.log(num1); // output: 2

 let num2 = false + 1;
 console.log(num2); // output: 1

 // typecasting in details
 let price = "50";
 let tax = 5;
 let totalPrice = Number(price) + Number(tax);
 console.log(totalPrice);
