'use strict'

// если я правильно поняла задание
function f(x) {
    return x = 0;
};

console.log(f());

function f() {
    return '0';
};

console.log(f());

let funArrow = (x) => (x = 0);

console.log(funArrow());

let funArrowSecond = () => '0';

console.log(funArrowSecond());
