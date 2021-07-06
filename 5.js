'use strict'

// Напишите функцию func() которая при каждом своем вызове будет возвращать количество своих вызовов 
// (сколько раз ее вызызвали до этого плюс этот вызов) Используйте замыкание;

function counter() {
	let i = 1;
	return function() {
        return i++
    };
}

let func = counter();

console.log(func());
console.log(func());
console.log(func());
console.log(func());

