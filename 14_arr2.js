'use strict'

let arr = [1, 10, 25, 67, 87, 56];
arr.push(4);

let arr1 = [2, 5, 90, 4];
let arr2 = arr.concat(arr1);

console.log(arr2.indexOf(90));

arr2.splice(9, 1);
arr2.splice(9, 0, 19, 2, 91);

arr2.sort((a, b) => b - a);
let result = arr2.reduce((sum, current) => sum + current, 0);


console.log(arr2);
console.log(result);