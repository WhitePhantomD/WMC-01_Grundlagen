'use strict';
const a = [];    

console.log(typeof a); // object

const mixed = [1, 'Hello', true, null, undefined, { name: 'John' }, [1, 2, 3]];

const myfunc = [() => console.log('Hello World'), () => console.log('Hello Universe')];

//Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [...arr1,4, 5, 6];

const obj1 = { name: 'John' };
const obj2 = { ...obj1, firma: 'Nokia' };

const arr3 = new Array(10);

const y = [1, , , , 3] ; // [1, empty, empty, empty, 3] 5 items

const z = [1, 2, 3]
z[6] = 7;

const Z = {
    0: 1,
    1: 2,
    2: 3,
    6: 7
};
