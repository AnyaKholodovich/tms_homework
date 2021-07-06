'use strict'

function mul(a, b){
    if (typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b)){
        let result = a * b;
        return console.log(result);
    } else {
        return console.log('Not a number');
    }
    
};

mul(2, 'f');
mul(2, 3);