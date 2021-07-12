'use strict'

// - Есть функция: function cleanRoom() {
//     setTimeout(() => console.log("Команата убрана"), 5000);
// }

// Данная функция отвечает за уборку комнаты, для этого ей надо время 5 секунд, после этого происхожит оповещение что комната убрана.
// Перепешите используя промисы. 



// let cleanRoom = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("Команата убрана"), 5000);
// }).then(
//     result => console.log(result), 
//     error => console.log(error) 
// );

function cleanRoom(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Команата убрана"), 5000);
    });
}

cleanRoom(8).then(
    result => console.log(result), 
    error => console.log(error) 
);

