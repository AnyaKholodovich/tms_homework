'use strict'

function words(value, words){  
	value = Math.abs(value) % 100; 
	var num = value % 10;
	if(value > 10 && value < 20) return words[2]; 
	if(num > 1 && num < 5) return words[1];
	if(num == 1) return words[0]; 
	return words[2];
}

console.log(words('1', ['товар', 'товара', 'товаров']));
console.log(words('2', ['товар', 'товара', 'товаров']));
console.log(words('7', ['товар', 'товара', 'товаров']));
