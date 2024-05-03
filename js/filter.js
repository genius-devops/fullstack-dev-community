// map | filter
// filters: filter from a specific obj to new obj

let empSalary = [
    {name: 'Adams', salary: 3000},
    {name: 'Musa', salary: 3000},
    {name: 'Mustpha', salary: 3000},
    {name: 'Idris', salary: 3000}
]
let {salary} = empSalary
console.log(salary);

const sumSal = (param) => {
    let total = 0;
    for(let i = 0; i < param.length; i++){
        total+= param[i].salary;        
    }
    return total;
}
console.log(sumSal(empSalary))


const filterSpices = [
    {name: 'Emma', nickname: 'Baby'},
    {name: 'Geri', nickname: 'Ginger'},
    {name: 'Mel B', nickname: 'Scary'},
    {name: 'Mel c', nickname: 'Sporty'},
    {name: 'Victoria', nickname: 'Posh'}
];
const endsY = filterSpices.filter((spice) => spice.nickname.endsWith('y'));

const nums = [2, 3, 4, 5, 6, 7, 8, 9];
const even = nums.filter((num) => num % 2 === 0);
console.log(even);

// 1538850589
// for of loop




// console.log(speg); // comparing my arrrays
// console.log(CARS); // comparing my arrrays

//using map: the map will create a callBack which will return the new obj
const otherCars = CARS.map((car) => {
    return car
})

const mapCars = CARS.map((newCar) => newCar)

const scores = [80, 40, 70, 19];
const sumScores = scores.map((score) => {
    return score++;
});
// console.log(sumScores);

const spices = [
    {name: 'Emma', nickname: 'Baby'},
    {name: 'Geri', nickname: 'Ginger'},
    {name: 'Mel B', nickname: 'Scary'},
    {name: 'Mel C', nickname: 'Sporty'},
    {name: 'Victoria', nickname: 'Posh'}
];

const nicknames = spices.map((spice) => {
    return spice.nickname + 'Grahams'// `${spice.nickname} Grahams`
});

// console.log(nicknames);
