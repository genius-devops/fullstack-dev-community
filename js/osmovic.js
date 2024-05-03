// write a progagram using this method to append student record 
let fName = 'adams';
let lName = 'labaran';
let dob = 1997;

const obj = {
    [fName] : 'grade one',
    [lName] : 'grade two',
    ['date of birth'] : dob
};
console.log(obj);

const obj2 = {
    fName,
    lName,
    dob
}
console.log(obj2);