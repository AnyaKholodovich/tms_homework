'use strict'

// Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
// есть все элементы входных массивов.
// Например:
//   var arrays = [[1, 2, 3], [4, 5], [6]];
//   // Ваш код тут
//   // → [1, 2, 3, 4, 5, 6]	

var arrays = [[1, 2, 3], [4, 5], [6]];
let newArray = arrays.reduce((result, number) => {
    return result.concat(number);
}, []);


console.log(newArray);