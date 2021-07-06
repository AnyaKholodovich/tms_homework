'use strict'

let users = [
    {id: 1, name: "Вася", age: 20},
    {id: 2, name: "Петя", age: 19},
    {id: 3, name: "Маша", age: 18}
];
users.push({id: 4, name: "Дима", age: 17});
users.reverse();
let user = users.find(item => item.name == 'Петя');

console.log(users);
console.log(user.age);


function getAverageAge(people) {
    return people.reduce((prev, user) => prev + user.age, 0);
}

console.log(getAverageAge(users));