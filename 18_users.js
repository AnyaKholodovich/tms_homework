let users = [
    {name: 'Ivan', age: 18}, 
    {name: 'Petr', age: 12}, 
    {name: 'Sidor', age: 25}, 
    {name: 'Pavel', age: 24}, 
    {name: 'Sasha', age: 29}
];

let userOlder = users.filter(user =>
     user.age >= 18
    );

console.log(userOlder);