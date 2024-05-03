// arrays

let prime = [2, 3, 5, 7];
prime[prime.length - 1]// returns the last element
prime[4] = 9 //adding value
prime[4] = 11 //replacing value

// Array properties
prime.length
prime.concat;
prime.copyWithin
prime.entries
prime.every
prime.fill
prime.filter
prime.find
prime.findIndex
prime.flat
prime.flatMap
prime.forEach
prime.includes
prime.indexOf
prime.join
prime.keys
prime.lastIndexOf
prime.map
prime.pop()
prime.push
prime.reduce
prime.shift
prime.reduceRight
prime.reverse
prime.slice
prime.some
prime.sort
prime.splice
prime.toLocaleString
prime.toString
prime.unshift
prime.values


// arrrays and obj can hold other array and objs
let points = [
    {x:0, y:0},
    {x:1, y:1}
];
points[1].x - points[0].x;


// when function and object is combine method is established
let a = []; // Create an empty array
a.push(1,2,3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements

// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from above.
points.dist = function() { // Define a method to compute distance between points
    var p1 = this[0]; // First element of array we're invoked on
    var p2 = this[1]; // Second element of the "this" object
    var a = p2.x-p1.x; // Difference in X coordinates
    var b = p2.y-p1.y; // Difference in Y coordinates
    return Math.sqrt(a*a + // The Pythagorean theorem
    b*b); // Math.sqrt() computes the square root
};
points.dist() // => 1.414: distance between our 2 points

