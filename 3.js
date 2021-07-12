'use strict'

// Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
// с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
// Текст ошибки придумайте сами.


function cleanRoom(dirtyLevel) {
    return new Promise(function(resolve, reject) {
      if ( dirtyLevel < 10) {
        setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
      } else {
        setTimeout(() => reject('Ошибка!'), dirtyLevel);
      }
    });
};

cleanRoom(1).then(
  result => console.log(`Уборка проведена успешно за ${result} секунд`), 
  error => console.log(error)
)

