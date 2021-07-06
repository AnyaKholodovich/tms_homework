'use strict'

function repeat(str, n = 2) {
    if (!str) {
      return " ".repeat(n);
    } else {
      return str.repeat(n);
    }
}

console.log(repeat('Hello', 1));