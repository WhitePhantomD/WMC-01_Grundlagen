'use strict';

const a = { name: 'John' };

console.log(typeof a); // object
console.log(a); // { name: 'John' }
console.log(a.name); // John

const propertyName = 'name';

console.log(a[propertyName]); // John

a.firma = 'Nokia';

console.log(a); // { name: 'John', firma: 'Nokia' }
console.log(a.firma); // Nokia

const b = {...a, address: 'Finland'};
console.log(b); // { name: 'John', firma: 'Nokia', address: 'Finland' }

console.log(typeof null); // object