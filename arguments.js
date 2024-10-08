// perametar
function sum(a, b, c){
    // array like object
    // console.log(arguments);
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

// arguments
// console.log(arguments);
const total = sum(45, 64, 23, 87, 23);
// console.log(total);
console.log(sum.length);