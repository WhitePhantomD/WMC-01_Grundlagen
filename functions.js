'use strict';

// console.log(add(1, 2));

// function add(a, b) {
//     // function statement
//     return a + b;
// }

const add = function(a, b, ...args) {
    // function expression
    console.log(args);
    const value = a + b;
    return args.reduce((acc, val) => acc + val, value);
}

// console.log(add(1, 2));
console.log(add(1,2,3,4,5,6,7,8,9,10));