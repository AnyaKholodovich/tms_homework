//- Перепишите цепочку промисов из предыдущего задания, используя async/await

function cleanRoom(dirtyLevel) {
    return new Promise(function(resolve, reject) {
      if ( dirtyLevel < 10) {
        setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
      } else {
        setTimeout(() => reject('Ошибка!'), dirtyLevel);
      }
    });
};

async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
	try {
		let firstResult = await cleanRoom(dirtyLevel_1);
		console.log(`Уборка комнаты №1 проведена успешно за ${firstResult} секунд`);

		let secondResult = await cleanRoom(dirtyLevel_2);
		console.log(`Уборка комнаты №2 проведена успешно за ${secondResult} секунд`);

		let thirdResult = await cleanRoom(dirtyLevel_3);
		console.log(`Уборка комнаты №3 проведена успешно за ${thirdResult} секунд`);

	} catch (error) {
		console.error(error); 
	};
}

cleanRooms(1, 2, 3);
cleanRooms(1, 10, 3);
