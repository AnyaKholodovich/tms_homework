'use strict'

let arr = [1, 10, 25, 67, 87, 56];
let leng = arr.push(4);

console.log(arr);
console.log(leng);

let lastEl = arr.pop();
arr.unshift(lastEl);

console.log(arr);

