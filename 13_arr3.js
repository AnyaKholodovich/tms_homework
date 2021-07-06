'use strict'

let arr = [1, 10, 25, 67, 87, 56];
arr.push(4);

let arr1 = [2, 5, 90, 4];
let arr2 = arr.concat(arr1);

console.log(arr2.indexOf(90));

arr2.splice(9, 1);
arr2.splice(9, 0, 19, 2, 91);

let arr3 = arr2.slice(-4);


// console.log(arr3);
// console.log(arr2);

arr3.sort((a, b) => a - b);

console.log(arr3);