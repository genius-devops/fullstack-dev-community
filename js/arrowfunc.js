










// Arrow function
function greetings(name) {
    console.log(`Hello, ${name}!`);
    }
    greetings("John"); // Hello, John!
    
    // arrow function
    const greetings = (name) => {
    console.log(`Hello, ${name}!`);
    };
    greetings("John"); // Hello, John!
    
    
    /**
     * When you create a function using the arrow function syntax, 
     * you need to assign the expression to a variable so that the function has a name.
     * Basically, the arrow function syntax looks as follows:
     * const fun = (param1, param2, ...) => {// function body;}
     * 
     * In the code above,
     * fun is the variable that holds the function. You can call the function as fun() later in your code.
     * (param1, param2, ...) are the function parameters. You can define as many parameters as required by the function.
     * Then you have the arrow => to indicate the beginning of the function.
     * The code above is equal to the following.
     * 
     * const fun = function(param1, param2, ...) {// function body;}
    */
    const nums = (num1, num2) => {console.log(`the sum is ${num1} + ${num2}`);};
    nums(88, 99);
    
    // Single and multiline arrow functions
    /**
     * const fun = (param1, param2, ...) => {// function body;}
    */
    
    function plusTwo(num) {
    return num + 2;
    }
    
    /**
     * Using the arrow function, you can omit both the curly brackets and the return keyword, 
     * creating a single line function as shown below:
     * using arrow function
    */
    //arrow function with return value
    const plusTwo = (num) => num + 2;
    
    // arrow function without return value 
    const greetings = () => console.log("Hello World!");
    
    /**
     * When using the arrow function syntax, 
     * the curly brackets are required only when you have a multiline function body:
    */
    
    const greetings = () => {
    console.log("Hello World!");
    console.log("How are you?");
    };
    /**
     * Arrow function without round brackets
     * The round brackets () are used in JavaScript functions to indicate the parameters that the function can receive.
     * When you use the function keyword, the round brackets are always required:
     * 
    */
    
    function plusThree(num) {
    return num + 3;
    }
    
    
    /**
     * On the other hand, the arrow function allows you to omit the round brackets 
     * when you have exactly one parameter for the function:
     * The following code example is a valid arrow function expression:
    */
    
    const plusThree = num => num + 3;
    
    
    /**
     * But you still need the round brackets for two conditions:
    When the function has no parameter
    When the function has more than one parameter
    When you have no parameter, then you need round brackets before the arrow as shown below:
    The same applies when you have more than one parameter.
    The function below has two parameters: name and age.
    */
    
    // when the function has no parameter
    const greetings = () => console.log("Hello World!");
    
    // when the function has more than one parameter
    const greetings = (name, age) => console.log("Hello World!");
    
    /**
     * Arrow function doesn't have arguments binding
    When using the function keyword to define a function, 
    you can access the arguments you pass to the function using the arguments keyword like this:
    */
    
    const printArgs = function () {
    console.log(arguments);
    };
    printArgs(1, 2, 3);
    // [Arguments] { '0': 1, '1': 2, '2': 3 }
    
    
    /**
     * The arguments keyword in the code above refers to the object that stores all the arguments you passed into the function.
     * By contrast, the arrow function doesn't have the arguments object and will throw an error when you try to access it:
     * const printArgs = () => console.log(arguments);
     * printArgs(1, 2, 3);
     * Uncaught ReferenceError: arguments is not defined
    */
    const printArgs1 = (...arguments) => console.log(arguments);
    printArgs1(1, 2, 3);
    // [1, 2, 3]
    
    /**
     * How to convert a normal function to an arrow function easily
     * 1. Replace the function keyword with the variable keyword let or const
     * 2. Add = symbol after the function name and before the round brackets
     * 3. Add => symbol after the round brackets
     * 
     * function plusTwo(num) {
     * return num + 2;
     * }
     * 
     * step 1: replace function with let / const
     * 
     * const plusTwo(num) {
     * return num + 2;
     * }
     * 
     * step 2: add = after the function name
     * 
     * const plusTwo = (num) {
     * return num + 2;
     * }
     * 
     * step 3: add => after the round brackets
     * 
     * const plusTwo = (num) => {
     * return num + 2;
     * }
     * 
     * // from this
    const plusTwo = num => {
    return num + 2;
    };
    // to this
    const plusTwo = num => num + 2;
    When you have exactly one parameter, you can also remove the round brackets:
    // from this
    const plusTwo = (num) => num + 2;
    // to this
    const plusTwo = num => num + 2;
    But the last two steps are optional. Only the first three steps are required to convert any JavaScript function and use the arrow function syntax.
    Exercise #7
    Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.
    The function accepts one parameter: the side of the square.
    The formula to calculate the area is side * side, and the formula to calculate the perimeter is 4 * side.
    The output shows the size of the size, the area, and the perimeter as follows:
    The square side is 8
    The area of the square is 64
    The perimeter of the square is 32
    
    */
    





