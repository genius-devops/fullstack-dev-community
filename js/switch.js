let age = 15;
        switch (age) {
        case 10:
        console.log("Age is 10");
        break;
        case 20:
        console.log("Age is 20");
        break;
        default:
        console.log("Age is neither 10 or 20");
        }

        switch (0) {
        case 1:
        console.log("Value is one");
        case 0:
        console.log("Value is zero");
        default:
        console.log("No matching case");
        }

        /**
         * When you execute the code above, JavaScript will print the following log:
         * > "Value is zero"
         * > "No matching case"
         * This is because without the break keyword, 
         * switch will continue to evaluate the expression 
         * against the remaining cases even when a matching case is already found.
         * Your switch evaluation may match more than one case, 
         * so the break keyword is commonly used to exit the process once a match is found.
        */

        switch (20) {
        case 10 + 10:
        console.log("value is twenty");
        break;
        }

        /**
         * One of the most common mistakes when using the switch statement 
         * is that people think case value gets evaluated as true or false. 
         * The following case blocks won't work in switch statements:
        */
        switch (age) {
        case age < 10:
        console.log("Value is less than ten");
        break;
        case age < 20:
        console.log("Value is less than twenty");
        break;
        default:
        console.log("Value is twenty or more");
        }

        //Switch statement use cases
        let weekdayNumber = 1;
if (weekdayNumber === 0) {
console.log("SunSwitch statement use casesday");
} else if (weekdayNumber === 1) {
console.log("Monday");
} else if (weekdayNumber === 2) {
console.log("Tuesday");
} else if (weekdayNumber === 3) {
console.log("Wednesday");
} else if (weekdayNumber === 4) {
console.log("Thursday");
} else if (weekdayNumber === 5) {
console.log("Friday");
} else if (weekdayNumber === 6) {
console.log("Saturday");
} else {
console.log("The weekday number is invalid");
}
I don't know about you, but the code above sure looks cumbersome to me! Although there's nothing wrong with the code above, you can make it prettier with switch:
let weekdayNumber = 1;
switch (weekdayNumber) {
case 0:
console.log("Sunday");
break;
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
case 4:
console.log("Thursday");
break;
case 5:
console.log("Friday");
break;
case 6:
console.log("Saturday");
break;
default:
console.log("The weekday number is invalid");
}
When you have lots of condition to evaluate for the same block, you'd probably combine multiple if conditions using the logical operator AND (&&) or OR(||):
let myFood = "Banana";
if (myFood === "Banana" || myFood === "Apple") {
console.log("Eat fruits everyday to keep you healthy.");
}
if (myFood === "Chocolate Cake") {
console.log("Enjoy the sweet treat.");
}
You can replace the code above using the switch statement. The key is you need to stack multiple cases as one just like this:
let myFood = "Banana";
switch (myFood) {
case "Banana":
case "Apple":
console.log("Eat fruits everyday to keep you healthy.");
break;
case "Chocolate Cake":
console.log("Enjoy the sweet treat.");
break;
}
Unfortunately, switch can't replace multiple if conditions that use the && operator because of the way the case evaluation works. You need to use the if statement for that.
Exercise #5
A primary school is giving different rewards based on the student's grade:
Students that got an A will get a Chocolate
Students that got a B will get a Cookie
Students that got a C will get a Candy
For any other value, print "No reward to give."
Create a variable named grade that will store the student's grade.
Example output:
You got an A, so here's a Chocolate for you!
You got a B, here's a Cookie for you!
You got a C, there's room for improvement and here's your Candy!
You can use either the if...else or the switch...case statement.
