
var todos = [
	"Clean room",
	"Brush teeth",
	"Exercise",
	"Study javaScript",
	"Eat healthy"
];



//The loop can be used to manipulate things such as adding character to the todo property.

for(var i = 0; i < todos.length; i++){
	// adding ! to the todo items
    console.log(todos[i] = todos[i] + "!");
}


// 

const you = {myCrush: 'Zahra'};

if(you.myCrush === 'Zahrah'){//same as if(you.myCrush)
    you.myGirl = 'fatima Zahrah'
console.log(you);
}else{
    // console.log('no match');
}
//truthyness and faalsyness: everything in js is true except 0, false, null,, undefined
const userDev = 'String'
if(userDev){
    console.log('logIn');
}else{
    console.log('logout');
}
//1. concate method in array
let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 10]
let c = a.concat(b)
// console.log(c);

//2. adding an item to the last 'push'
c.push(11)
// console.log(c);

//3. adding an item to the first index
c.unshift(0)
// console.log(c);

//4. removing  last item using pop
c.pop()
// console.log(c);

//5. removing first index using shift
c.shift()
// console.log(c);

//6. using join method 
f = a.join('_')
// console.log(f);
f = c.join(' + ')
// console.log(f);

//7. using sort() method
let x = ['c', 'd', 'r', 'g', 'h', 'i']
x.sort()
// console.log(x);

//8. using reverse() rearrange items in anti clock manner.
x.reverse()
// console.log(x);

// getting the last index



// mutation
// num1.push(4) will be added to both num1 and num2. bcos modifies original result
let num1 = [1, 2, 3]
let num2 = num1.push(4)
// console.log(num2);

/**
 * some actions mutate an array(eg | oldArray.push(newvalue))
 * other actions do not mutate the original array, but instead create a new copy(eg | oldArray.concat(otherArray))
 */

const op = [4, 6]
const sum = op[0] + op[1]
// console.log(sum);

op[0] = 5
const newSum = op[0] + op[1]
// console.log(newSum);


/**
 * obj is a collection of data in a key-value pair. it always start with object literal eg {}
 */

const profile = {
    fName: 'Adams',
    lName: 'Labaran',
    hobbies: ['reading', 'coding', 'movies', 'hicking'],
    age: function(){console.log(29);},
    isMaried: false,
    address:
    {
        tel: 9000000,
        lineNo: 2,
        homeNo: 36,
        street: 'Ajio',
        town: 'North-bank',
        city: 'mkd',
        state: 'Benue'
    },
}

// getting value from an obj
profile.fName
profile.age() // accessing age property the age is a method hence age()


// modifying an obj
profile.fName = 'adamsy';
profile['fName'] = 'Adams';

const js = {
    name: 'JavaScript',
    abbr: 'JS',
    isAwesome: true,
    officialSpec: 'ECMAScript',
    dob: 1995,
    creator: 'Brendan',

    // 'this' keyword is used to access a method inside an object
    jsDOB: function () {
        console.log('the age of javaScript is: ',2024 - this.dob);
    },
};

// accessing js dob
js.jsDOB()

// to check if name value start with Java
js.name.startsWith('Java')

// manipulating age from js object properties
let age = 2024 - js.dob;
console.log(`the age is ${age}`);

// changing value from object
js.name = 'python'
console.log(js.name);



// loop
const stud = [
    {firstName: 'Adams', lastName: 'Labaran', score: 100},
    {firstName: 'James', lastName: 'moses', score: 90},
    {firstName: 'Ayub', lastName: 'ibro', score: 87},
];

for(i = 0; i < stud.length; i++){
    console.log(`${stud[i].firstName} scored ${stud[i].score}`);
};

// calculating the av 

let total = 0;
for(i = 0; i < stud.length; i++){
    total += stud[i].score;
};

// calculating the average
const av = total / stud.length;
console.log(`the average score is ${av}`);



// functions | using function to accessing array of object
// function decleration
function greeting(){console.log('hello Adams');}

// function expresion
const greet = function () {console.log('hello Adams');}

// arrow funtion
const greetAgain = () => {console.log('mi Adams');;}

// function with return statement
const sums = () => {return 2 + 2}
const resultSums = sums()

function addition(num1, num2){return num1 + num2}
const addRes = addition()



// loops
for(i = 0; i < 5; i++){console.log('hi');}

const cars = ['toyot', 'Benz', 'Ferarri', 'BMW'];
for(i = 0; i < cars.length; i++){console.log(cars[i]);}


const students = [
        
]

// using function to calculate the total average score of the student
// fetch out the statement with lowest score
const avScore = (params) => {
    let total = 0;

    for (i = 0; i < params.length; i++){
        total += params[i].score;
    }
    return total / params.length;
}

const totalAv = avScore(stud)
console.log(totalAv); 


// computing a function of student with lowest score
const lowestScore =(leastScore) => {
    for (i = 0; i < leastScore.length; i++){
        if(leastScore[i].score < 87){
            console.log(`${leastScore[i].firstName} sorry you scored ${leastScore[i].score} and you need to improved`);
        }
    }
};

lowestScore(stud)


// facebook review
// let user = prompt('enter your user name')
// let password = prompt('enter your password')

const database = [
    {userName: 'mike', password: 'mike123'},
    {userName: 'james', password: 'james123'}
];

function logIn(userName, pass){
    if (userName === database[0].userName && pass === database[0].password){
        console.log('logging successful');
    }else{
        console.log('invalid userName or password');
    }
};


const LOGIN = (userName, pswd) => userName === database[0].userName && pswd === database[0].password ? `welcome back ${userName}` : 'invalid user'
console.log(LOGIN('mike', 'mike123'));

// arrow function 
function add(a,b){
    return a + b;
}

const add = (a, b) => a + b





// // symbol in js
// // symbol are unique type and they are  used as identifier for object property
// let sym1 = Symbol();
// let sym2 = ymbol('foo');
// let sym3 = ymbol('foo');


// // template string / template literal `
// const name = 'sally';
// const age = 20;
// const pet = 'i never chop belly food';
// const greetings = `Hello ${name} you seem to be ${age - 4} what a lovely ${pet} you have`
// console.log(greetings);

// // providing default argument
// function greet(name='', age=30, pet='make i see food chop'){
//     return greetings = `Hello ${name} you seem to be ${age - 4} what a lovely ${pet} you have`

// }
// greet()

// // object properties
// fName = 'adams';
// lName = 'labaran';
// dob = 2009,

// const user = {
//     fName,
//     lName,
//     dob
// }

// // destructuring
// const obj = {
//     player:'adams',
//     expe: 100,
//     wizardLevel: false
// }

// // accessing player obj 
// const player = obj.player;
// const expe = obj.expe;
// let wizardLevel = obj.wizardLevel

// // syntatic sugar
// const {player, expe} = obj;
// let{wizardLevel} = obj

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;

// if(experience >90){
//     let wizardLevel = true;
//     console.log(wizardLevel);
// }

// console.log(wizardLevel);

// ternary operator: condition ? expr1 : expr2
// condition if true? return expr1 : else return expr2
function isUserValid(bool){return bool;} //impliment arrow function

function winBattle(){return bool}
// scnario
var ans = isUserValid(true) ? 'you may enter' : 'access denied';
// output: you may enter
// output: access denied

var autoAns = 'your account # is ' + (isUserValid(false) ? '1234': 'not available')

// output: 'your account # is not available'


/**
 * when the isUserValid(true) becomes true the answer becomes
 * var autoAns = 'your account # is' + (isUserValid(true) ? '1234': 'not available')
 * output: 'your account # is1234'
 */

// when using normal method
function condition(){
    if (isUserValid(true)){
        return 'you may enter';
    }else{
        return 'access denied';
    }
}
var answer2 = condition()

/**
 * console.log(answer)
 * output: 'you may enter'
 * 
 * console.log(answer2)
 * output: 'you may enter'
 * ternary operator is good for if else statement when checking for condition
 */

// switch statement is idealy used inplace of multiple if else statement
function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case 'forward':
            whatHappens = 'you encounter a monster';
            break;
        case 'back':
            whatHappens = 'you have arrived home';
            break;
        case 'right':
            whatHappens = 'you found a river';
            break;
        case 'left':
            whatHappens = 'you run into a troll';
            break;
            default:
                whatHappens = 'please enter a valid direction'
    }
    return whatHappens;
}

// console.log(moveCommand('forword'))
// console.log(moveCommand('back'))
// console.log(moveCommand('right'))
// console.log(moveCommand('left'))
// console.log(moveCommand(111222333))

/**
 * switch(condition)// check whatever the condition is (variable)
 * case: if the condition is true;
 *      return this variable;
 *      break  // just stop at here
 * case: ....
 *      return;
 *      break;
 * .
 * .
 * .
 * default:
 * if the condition is not true return default.
 */
/**
 * in the the console, declare functions:
 * 1. multiply: given 2 numbers, return their product
 * 2. yell: given a lowercase string, log it in the all caps to the console
 * 3. longerThan given 2 arrays, return whether the first is longer than the second
*/

// 1. multiply: given 2 numbers, return their product
const multiply = (x, y) => x * y
const resultMultiply = multiply(3, 3)

//2. yell: given a lowercase string, log it in the all caps to the console
// const yell = lowerCaps => lowerCaps.toUpperCase()
// const caps = lowerCaps('haaaaaaaaa ha ha haaaaaaaaaaaaaaaa haaa ahhahhaaa') 

//  * 3. longerThan given 2 arrays, return whether the first is longer than the second

/**
 * in the console, declear the following functions using arrow functions
 * 1. divid: given 2 numbers, return the first divided by the second
 * 2. whisper: given an upperscase string, log it in all lowercase to the console
 * 3. shorterThan: given 2 arrays, return whether the first is shorter than the second.
 *   
*/
/**
 * 1. divid: given 2 numbers, return the first divided by the second
 * solution: using explicit and implicit return.
 */
// const dividExplicit = (x, y) => {return x / y} // explicit
// // const divid = dividExplicit(9, 3)

// const dividImplicit = (x, y) => x / y // implicit
// const divid = dividImplicit(8, 4)

// const whisper = sound => (sound.toLowerCase())
// const soundToLower = whisper('HAAAAAAAAAAAAAAAAAAA  HA HA HA')


// // 3. longerThan: given 2 arrays, return whether the first is shorter than the second.
// const aOne = ['milk', 'millo', 'sugar', 'flour'];
// const aTwo = ['five alive', 'malt', 'sprite', 'cock', 'pop corn', 'pap'];

// const shorterThan = (arrOne, arrTwo) => {
//     if(arrOne.length < arrTwo.length){
//         return 'array 1 is longer than array 2'
//     }else{
//         return 'array 2 is longer than array 1'
//     }
// }

// const longerArray = shorterThan(aOne, aTwo)
// console.log(longerArray);


// const a = () => {
//     var a = 'hi'
//     console.log(a);
// }
// a()
// const nums = [38, 76, 3, 1, 9, 4, 99];

// // get even numbers 
// const evenNums = (arr) => {
//     const even = [];

//     for(i = 0; i <arr.length; i++){
//         if(arr[i] % 2 === 0){
//             even.push(arr[i]);
//         }
//     }
//     return even;
// };

// const resultEven = evenNums(nums);
// console.log(`this is an even result: ${resultEven}`);

// const oddNums = (arr) => {
//     const odd = [];

//     for(i = 0; i <arr.length; i++){
//         if(arr[i] % 3 === 0){
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// };

// const resultOdd = oddNums(nums);
// console.log(`this is the odd result: ${resultOdd}`);




/**
// * dollar to naira converter
// * $1 = N1560
//*/

// let dollar = prompt('enter a dollar value');

// let naira = Number(dollar) * 1560; // converting dollar to naira

// console.log(`the value of dollar provided is ${dollar}  and equall to ${naira} in naira`);


// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"



const students = [
    { firstName: 'Adams', lastName: 'Labaran', score: 100 },
    { firstName: 'James', lastName: 'Moses', score: 90 },
    { firstName: 'Ayub', lastName: 'Ibro', score: 87 },
];

// Function to calculate total average score
function calculateAverageScore(students) {
    const totalScores = students.reduce((sum, student) => sum + student.score, 0);
    return totalScores / students.length;
}

// Function to find the student with the lowest score
function findStudentWithLowestScore(students) {
    return students.reduce((minStudent, student) => {
        return student.score < minStudent.score ? student : minStudent;
    });
}

// Calculate total average score
const averageScore = calculateAverageScore(students);
console.log("Total average score:", averageScore);

// Find student with lowest score
const studentWithLowestScore = findStudentWithLowestScore(students);
console.log("Student with lowest score:", studentWithLowestScore);
const stud = [
    { firstName: 'Adams', lastName: 'Labaran', score: 100 },
    { firstName: 'James', lastName: 'Moses', score: 90 },
    { firstName: 'Ayub', lastName: 'Ibro', score: 87 },
];

// Function to calculate total average score
function calculateAverageScore(students) {
    let totalScores = 0;
    for (let i = 0; i < students.length; i++) {
        totalScores += students[i].score;
    }
    return totalScores / students.length;
}

// Function to find the student with the lowest score
function findStudentWithLowestScore(students) {
    let minScore = students[0].score;
    let minStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].score < minScore) {
            minScore = students[i].score;
            minStudent = students[i];
        }
    }
    return minStudent;
}

// Calculate total average score
const averageScore = calculateAverageScore(stud);
console.log("Total average score:", averageScore);

// Find student with lowest score
const studentWithLowestScore = findStudentWithLowestScore(stud);
console.log("Student with lowest score:", studentWithLowestScore);
const stud = [
    { firstName: 'Adams', lastName: 'Labaran', score: 100 },
    { firstName: 'James', lastName: 'Moses', score: 90 },
    { firstName: 'Ayub', lastName: 'Ibro', score: 87 },
];

function findStudentWithLowestScore(students) {
    // Check if the students array is empty
    if (students.length === 0) {
        return null; // Return null if array is empty
    }

    let lowestScoreStudent = students[0]; // Assume the first student has the lowest score

    // Iterate through the students array starting from the second element
    for (let i = 1; i < students.length; i++) {
        // Compare the score of the current student with the lowest score found so far
        if (students[i].score < lowestScoreStudent.score) {
            // If the current student's score is lower, update the lowestScoreStudent
            lowestScoreStudent = students[i];
        }
    }

    return lowestScoreStudent; // Return the student with the lowest score
}

// Call the function to find the student with the lowest score
const studentWithLowestScore = findStudentWithLowestScore(stud);

// Check if a student with the lowest score was found
if (studentWithLowestScore) {
    console.log("Student with lowest score:", studentWithLowestScore);
} else {
    console.log("No students found.");
}



let managers = [
    {
        firstName: 'Adams',
        lastName: 'Labaran',
        age: 20,
        salary: 80000
    },
    {
        firstName: 'Idris',
        lastName: 'Mikail',
        age: 22,
        salary: 75000
    },
    {
        firstName: 'Ibro',
        lastName: 'Musa',
        age: 25,
        salary: 75000
    }
]


// filter through the array of object and get the person that earn highest paid salary

// const pay = managers.filter((paid) => paid.salary >= 80000)
// using function to comput


// console.log(pay);

// give the total salary of the staff


// for(let i = 0; i< managers.length; i++){
//     totalPay += managers[i].salary;
// }
// console.log('the total amount',totalPay);


const nums = [1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99]
// using reduce
const sumOfAll = nums.reduce((acc, cur) => acc * cur)
const even = nums.filter((num) => num % 2 === 0)
const odd = nums.filter((num) => num % 3 === 0)

let totalPay = 0;
const totalFunc = param => {
    for(let i = 0; i < managers.length; i++){
        totalPay += managers[i].salary;
    }
    return `the total amount ${totalPay}`
    
}
const result = totalFunc(managers.salary)
// console.log(result);


const allPay = param =>{
    let total = 0;
    for(let staff of param){
        total += staff.salary
    }
    return total
}
console.log(allPay(managers));

