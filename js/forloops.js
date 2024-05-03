<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>js for loops</title>
</head>
<body>
    <script>
        for (let x = 0; x < 10; x++) {
        console.log(x);
        }


        /**
         * for ( [initialization]; [condition]; [arithmetic expression]) {
         * As long as condition returns true,
         * This block will be executed repeatedly
         * }
         * 
         * for (let x = 10; x >= 1; x--) {
         * console.log(x);
         * }
         * 
         * for (let x = 1; x < 20; x += 3) {
         * console.log(x);
         * }
         * For example, let's say you're writing a program to flip a coin. You need to find how many times the coin lands on heads when tossed 10 times. You can do it by using the Math.random method:
         * When the number is lower than 0.5 you need to increment the tails counter
         * When the number is 0.5 and up you must increment the heads counter
         * 
         * 
        */
        
        let heads = 0;
        let tails = 0;
        for (x = 1; x <= 10; x++) {
        if (Math.random() < 0.5) {
        tails++;
        } else {
        heads++;
        }
        }
        console.log("Tossed the coin ten times");
        console.log(`Number of heads: ${heads}`);
        console.log(`Number of tails: ${tails}`);
    </script>
</body>
</html>