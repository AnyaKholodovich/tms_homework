'use strict'

let sum = (a, b) => (a, b);

function sum_2(a, b){
    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){
        let result = a + b;
        return result;
    } else {
        return 'Not a number';
    }
};

console.log(sum(1, 3));
console.log(sum_2(7, '2'));
