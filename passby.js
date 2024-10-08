// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 25;
    const result = a * b;
    return result;
}
console.log(num1);
// const output = multiply(num1, num2);
multiply(num1, num2);
console.log(num1);

// object and array are pass by reference
let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {name: 'Raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);