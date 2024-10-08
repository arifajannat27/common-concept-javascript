/*
1. strongly typed language
2. int a = 5;
3. string b = 'alim halim khalim'
4. bool c = true
5. object student = {name: 'noya daman', id: 55}
int[] numbers = [11, 45, 64]
string[] friends = ['abul', 'babul']
*/ 

// Javascript is a  dynamic type language

// primitive
const a = 5;
const b = 'Samsu kanai ekhon ar';
const d = true;

// non-primitive 
const ages = [44, 64, 33];
const student = {id: 23, class: 7}
// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
// q = {job: 'Backend end'}
q.job = 'front end developed';
console.log(p, q);