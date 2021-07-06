'use strict'

// Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать новый массив arrUnique который будет представлять собой массив arr но без дублирующихся
// по своим значениям элементам. Использовать методы reduce и indexOf.

let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let arrUnique = arr.reduce ((users, user) => {
    
    if (users.indexOf(user) === -1) {
        users.push(user);
    }
    return users;
}, []);

console.log(arrUnique);

