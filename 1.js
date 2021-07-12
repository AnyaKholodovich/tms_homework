'use strict'

// Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
// 	  Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. 
// 	  Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
//  	  cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает 
// 	  уровень загрязнения каждой комнаты.


function cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    return new Promise(function(resolve, reject) {
      if ( dirtyLevel < 10) {
        setTimeout(() => resolve(dirtyLevel_1), dirtyLevel_1 * 1000);
        setTimeout(() => resolve(dirtyLevel_2), dirtyLevel_1 * 1000);
        setTimeout(() => resolve(dirtyLevel_3), dirtyLevel_1 * 1000);
      } else {
        setTimeout(() => reject('Ошибка!'), dirtyLevel);
      }
    });
};

cleanRoom(1, 2, 11).then(() =>{
    return console.log(`Уборка проведена успешно за ${result} секунд`);
}).then(() =>{
    return console.log(`Уборка проведена успешно за ${result} секунд`);
}).then(() =>{
    return console.log(`Уборка проведена успешно за ${result} секунд`);
})



