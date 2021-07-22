'use strict'

// Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
// 	  Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. 
// 	  Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
//  	  cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает 
// 	  уровень загрязнения каждой комнаты.


function cleanRoom(...dirtyLevel) {
    return new Promise(function(resolve, reject) {
      if ( dirtyLevel < 10) {
        setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
      } else {
        setTimeout(() => reject('Ошибка!'), dirtyLevel);
      }
    });
};

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  cleanRoom(dirtyLevel_1).then(
    result => {
      console.log(`Уборка комнаты №1 проведена успешно за ${result} секунд`)
      return cleanRoom(dirtyLevel_2)
    })
    .then(
      result => {
        console.log(`Уборка комнаты №2 проведена успешно за ${result} секунд`)
        return cleanRoom(dirtyLevel_3)
      })
    .then(
      result => console.log(`Уборка комнаты №3 проведена успешно за ${result} секунд`))
    .catch((error) => console.error(error));
}
  
 
  
cleanRooms(1, 10, 7);
cleanRooms(1, 2, 3);