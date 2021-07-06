'use strict'


function avg() {
    let sum = 0;
    let actualNumbers = 0

    for (let i = 0; i <= arguments[i]; i++ ){
        if (typeof arguments[i] === 'number' && !isNaN(arguments[i])){
            sum += arguments[i]
            actualNumbers += 1;
        } 
    }
    return sum / actualNumbers;
}

console.log( avg( 1, 2, 3, 4, 'ghj', 'hhh') );
