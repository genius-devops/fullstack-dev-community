<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        /**
         * working with operators in javaScript
         * arithmethic operators: x+y, x-y, x*y, x**y, x/y, x%y, x++, x--
         * comparison operators: x==y, x != y, x === y, x !== y, x > y, x >= y, x < y, x <= y,
         * Logical operators:    x && y, x || y, !x
         * x && y: "logical and" return true if all operand are true else return false
         * x || y: "logical or" return true if one of the operand are true else return false
         * !x: "logical not" reverse the result: return true if false and vice versa.
        */

        // comparison operator
        // Comparison operators are used to compare two values. The operators in this category will return Boolean values: either true or false.
        console.log(9 == 9); //true
        console.log("9" == 9); //true
        console.log("9" === 9); //false
        console.log(9 != 20); //true
        console.log("20" !== 20); //false
        console.log("20" != 20); //true
        console.log(2 > 10);
        console.log(2 < 10);
        console.log(5 >= 10);
        console.log(10 <= 10);
        console.log(5 == "5");
        console.log(5 === "5");
        console.log(7 !== 8);
        console.log("ABC" == "abc");
        console.log("ABC" == "ABC");
        console.log("Z" == "A");
       
        
        /**
         * The logical operators are used to check whether one or 
         * more expressions result in either True or False.
         * There are three logical operators that JavaScript has:
         * 
        */
        console.log(7 > 2 && 5 > 4); // true
        console.log(true && false);
        console.log(false || false);
        console.log(!true);


        // the typedef operator
        let p = 5;
        console.log(typeof p);
        console.log(typeof "Musty");
        console.log(typeof true);


        // problems
        console.log(19 % 3);
        console.log(10 == 3);
        console.log(10 !== "10");
        console.log(2 < "10");
        console.log("5" > 2);
        console.log((false && true) || false);
        

    </script>
</body>
</html>