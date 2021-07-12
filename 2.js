'use strict'

// Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
//  	  В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению 
// 	  dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
// 	  Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент
// 	  resolve.



// function cleanRoom (dirtyLevel){
    
//     let cleaningTime = dirtyLevel * 1000;
//     let cleanRoom = new Promise(function(resolve, reject) {
//         setTimeout(() => resolve(cleaningTime), cleaningTime);
//     });

//     cleanRoom.then(
//         result => console.log(`Уборка проведена успешно за ${result} секунд`), 
//         error => console.log(error) 
//     );
//     return console.log(cleanRoom);
// };

// cleanRoom(8);

function cleanRoom(dirtyLevel) {

	return new Promise(function (resolve, reject) {
        if(typeof (dirtyLevel) !== 'number' || dirtyLevel < 0 || dirtyLevel > 10 || isNaN(dirtyLevel)){

            setTimeout(() => reject('Ошибка!'), dirtyLevel);
        }else{
            setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
        }	
	});
}

cleanRoom(8).then(
	result => console.log(`Уборка проведена успешно за ${result} секунд`),
	error => console.log(`Ошибка!`)
);