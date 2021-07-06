'use strict'


// Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании.
// Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта. 

function User(first_name, second_name, age, city) {
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}

let vasya = new User("Вася", 'Васильев', 22, 'Минск');
let anton = new User("Антон", 'Иванов', 26, 'Гомель');

User.prototype.info = function(){
    console.log(this.first_name, this.second_name, this.age, this.city);
}

vasya.info()
anton.info()