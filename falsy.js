'use strict';

const a = null;

// Falsy values: 0, "", null, undefined, false

if(a !== null) {
    console.log('This will never run');
}

// const b = 0; // --> user input
// const c = 42;

// console.log(b||c);
// console.log(b&&c);

const z = b !== null ? b : c;
// const z = b || c;
