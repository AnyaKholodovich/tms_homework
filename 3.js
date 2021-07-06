'use strict'

// Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
// с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
// Текст ошибки придумайте сами.


function cleanRoom(dirtyLevel) {
    let cleaningTime = 0;

    let cleanRoom = new Promise((resolve, reject) => {
      if (dirtyLevel < 10) {
        setTimeout(() => reject(cleaningTime), cleaningTime);
      } else {
        setTimeout(() => resolve(cleaningTime), cleaningTime);
      }
    });
    cleanRoom.then(
        result => console.log(`Уборка проведена успешно за ${result} секунд`), 
        error => console.log(error)
    )
    return console.log(cleanRoom);
}

cleanRoom(8);