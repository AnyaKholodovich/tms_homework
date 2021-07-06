let users = [
    {name: 'Ivan', age: 18}, 
    {name: 'Petr', age: 12}, 
    {name: 'Sidor', age: 25}, 
    {name: 'Pavel', age: 24}, 
    {name: 'Sasha', age: 29}
];

let userOlder = users.filter(user => user.age >= 18);
let userJr = users.filter(user => user.age < 18);

userOlder.sort((a, b) => a.age > b.age ? 1 : -1);

console.log (userOlder);
console.log (userJr);

