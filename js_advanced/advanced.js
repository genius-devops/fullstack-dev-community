// async| fetch | await
fetch('url').then(response => response.json()).then(data  => console.log(data))

const fetchData = async () => {
    const response = await fetch('url')
    const data = await response.json()
    return data
}

// setTimeout
setTimeout(() => console.log('run second'),4000)

const CARS = ['toyota', 'bmw', 'benz', 'ferari'];

const speg = [] // creating empty array where for loop will store
for(car of CARS){
    speg.push(car)
};

let person = {name: 'Adams', age: 27} // object
let {myName, age} = person
console.log(myName, age);
const nums = [2, 3, 4, 5, 6, 7, 8, 9];
const num = nums.forEach(i => console.log(i)) // forEach
const nom = nums.map(num => num * 2) // map
console.log(nums.length > 2 ? 'array nums' : 'non array'); // ternary operator

// asynchronous code
function getData(callBack){
    setTimeout(() => {
        callBack('data');
    }, 1000);
}

getData(function(data){
    console.log(data);
});

// expert
const getData = () => new Promise(resolve => setTimeout(()=> resolve('data'), 1000))
getData().then(data => console.log(data))


if(user !== null && user !== undefined && user.name !== undefined){
    console.log(user.name);
}

// expert
console.log(user?.name);

// importing and exporting modules | in file1.js
module.exports = {
    myFunction: function(){},
    myVariable: 1
}
var file1 = require('./file1');
console.log(file1.myfunction());


// expert | in file1.js
export const myFunction = () => {}
export const myVariable = 1

// in file2.js
import {myFunction, myVariable} from './file1';
console.log(myFunction());

