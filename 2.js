'use strict'

// На основании этого массива сформировать новы массив usersAfterYear где все пользователи повзрсолели на год и являются совершенолетними (повзрослевших на год, но оставшимися
//     все еще несовершенолетних пользователей в новый массив usersAfterYear не включать). Сам массив users должен остаться неизменным. Использовать метод map.

let users = [
   {id: 1, name: "Вася", age: 19},
   {id: 2, name: "Петя", age: 18},
   {id: 3, name: "Маша", age: 17},
   {id: 4, name: "Света", age: 18},
   {id: 5, name: "Наташа", age: 17},
   {id: 6, name: "Женя", age: 12},
   {id: 7, name: "Коля", age: 30},
  {id: 8, name: "Настя", age: 16},
  {id: 9, name: "Антон", age: 19},
  {id: 10, name: "Иван", age: 20},
  {id: 11, name: "Павел", age: 16},
  {id: 12, name: "Денис", age: 20}
];


let usersAfterYear = users.map(function(us){
   us.age += 1
   return us
}).filter(us => us.age>=18);

console.log(usersAfterYear);


//  На основании массива usersAfterYear, полученного на основании предыдущего задания создать новый массив usersAfterYearUniqueAge, 
//  в котором нет пользователей с одинаковым возрастом. Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19}, то вы должны оставить
//   только Петю или Свету одного а не их двоих). (Это задание похоже на первое задания про массив arr и arrUnique)



let usersAfterYearUniqueAge = usersAfterYear.reduce ((users, user) => {
   
 let check = !users.some(function(object) {
   return (object.age == user.age)
 })

if (check) {
   users.push(user)
}return users}, []);

console.log(usersAfterYearUniqueAge);