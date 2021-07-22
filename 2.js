'use strict'

// На основанни задачи из прошлого дамашнего задания сделайте так, чтобы можно было осуществить параллельную уборку трех комнат. 
// 	  Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки. 
// 	  Если одна из комнат оказалась слишком грязной(условие при котором такое происхожит описано в предыдущем ДЗ), 
// 	  то пекращаем уборку полностью. Для этого функция cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } 
// 	  должна принимать три аргемента, каждый из кторых описывает уровень загрязнения каждой комнаты.

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
	let i = 1;
	let arRooms = [cleanRoom(dirtyLevel_1), cleanRoom(dirtyLevel_2), cleanRoom(dirtyLevel_3)]
	return Promise.all(arRooms).then(arRooms => arRooms.map(
		result => console.log(`Уборка комнаты №${i++} проведена успешно за ${result} секунд`))).catch((err) => console.error(err))
}

cleanRooms(1, 3, 2);
cleanRooms(1, 10, 2);
