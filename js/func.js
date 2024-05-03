 /**
         * A function is simply a section (or a block) of code that's written to perform a specific task.
         * For example, the typecasting function String() is used to convert data of another type to a string.
         * 
        */
        // const AGE = 18;
// let yourAge = Number(prompt('what is your age'));
// if(yourAge < AGE){
//     alert('Sorry, you are too young to drive this car. Powering off');
// }else if(yourAge === AGE){
//     alert('Congratulations on your first year of driving. Enjoy the ride!');
// }else if(yourAge > AGE){
//     alert('Powering On. Enjoy the ride!')
// }




// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.




//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

// function checkDriverAge(){
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//        return alert("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         return alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         return alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }   
// };
// checkDriverAge();




// function checkDriverAge2(age){
//     console.log("Powering On. Enjoy the ride!");
// }
// checkDriverAge2(92);


function greet() {
    // function body here
    console.log("Hello!");
    }

    greet(); // Hello!


    //Function parameters and arguments
    function greet(name) {
    // function body
    }

    function greet(name) {
    console.log(`Hello, ${name}!`);
    console.log("Nice weather today, right?");
    }

    greet("Adams");

    function greet(name, weather) {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
    }
    greet("Nathan", "rainy");

    //Default parameters
    function greet(name = "Nathan") {
    console.log(`Hello, ${name}!`);
    console.log("Nice weather today, right?");
    }

    greet();
    greet("adams");

    function greet(weather, name = "Nathan") {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
    }
    greet("sunny");

    /**
     * If you place the non-default parameter after the default parameter, 
     * then you need to pass a value to the name parameter to get to the weather parameter.
     * Consider the example below:
    */

    function greet(name = "Nathan", weather) {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today, right?`);
    }
    greet(undefined, "sunny");

    /** Default parameters and null
     * When you pass undefined to a function that has a default parameter, 
     * the default parameter will be used:
    */

    function greet(name = "John"){
    console.log(name);
    }
    greet(undefined); // John

    // But when you pass null to the function, the default parameter will be ignored:
    function greet(name = "John"){
    console.log(name);
    }
    greet(null); // null

    /**
     * This is one of the common mistakes that beginners make when learning JavaScript. 
     * When you use the value null, JavaScript will think you want that value to be empty, 
     * so it doesn't replace the value with the default parameter.
     * When you use undefined, then JavaScript will replace it with the default parameter. 
     * You might encounter this issue as you work with JavaScript code in your career, 
     * so just keep this in mind.
     * 
    */

    // The return statement
    function sum(a, b) {
    return a + b;
    }
    let result = sum(3, 2);
    console.log(result); // 5

    function checkAge(age) {
    if (age > 18) {
    return "You may get a car license";
    }
    return "You may not get a car license yet";
    }
    console.log(checkAge(20));
    console.log(checkAge(15));

    /**
     * The second time we called the function, the if condition isn't met, 
     * so JavaScript executes the return statement under the if block instead.
    */

    // You can also stop a function execution and return to the caller by specifying the return statement without any value:
    function greet() {
    console.log("Hello!");
    return;
    console.log("Good bye!");
    }
    greet()

    // Variable scope

    function greet() {
    let myString = "Hello World!";
    }
    greet();
    console.log(myString); // this will flag an error because mystring is only visible within he block of greet function
    
    // accessing global Variable
    let myString = "Hello World!";
    function greet() {
    console.log(myString);
    }
    greet(); // Hello World!

    /**
     * variable declared outside of it.
Keep in mind that this applies only to variables declared using let and const.
Next, you can also define a local variable with the same name as the global variable without overwriting it.
Here's an example:
    */

    let myString1 = "Hello World!";
function greet() {
let myString1 = "Morning!";
console.log(myString1);
}
greet(); // Morning!
console.log(myString1); // Hello World!


/**
* In practice, you rarely need to declare the same variable in different scopes:
Any variable declared outside a function shouldn't be used inside a function without passing them as parameters.
A variable declared inside a function should never be referred to outside of that function
*/

//  The rest parameter
/**
* The rest parameter is a parameter that can accept any number of data as its arguments. 
* The arguments will be stored as an array.
You can define a rest parameter in the function header by adding triple dots ... 
before the parameter name.
*/
function printArguments(...args){
console.log(args);
}


function printArguments(...args){
console.log(args);
}
printArguments("A", "B", "C");
// [ 'A', 'B', 'C' ]
printArguments(1, 2, 3, 4, 5);
// [ 1, 2, 3, 4, 5 ]


/**
 * Keep in mind that a function can only have one rest parameter, and the rest parameter must be the last parameter in the function.
You can use a rest parameter when your function needs to work with an indefinite number of arguments
 */








    

