'use strict'

// Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
// 	  Запишите поле name в переменную userName, поле year в переменную userName, поле car в переменную userCar, остальные поля
//   	  записать в объект userOtherInfo;

let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" };


let {name: userName, years: userYear,car: userCar, ...userOtherInfo} = user;


        
console.log(userName);
console.log(userYear);
console.log(userCar);
console.log(userOtherInfo);




