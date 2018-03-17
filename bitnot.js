const { assert, dir, info, log, trace } = console;
const show = (str, res, func = log) => func(`\n ${str}\n${' '.repeat(4)}`, res);
const bitnot = n => ~n;
const map = n => n;
const sum = (a, b) => a + b;

const arr1 = [-2, -1, 0, 1, 2, 3, 4, 5];
const arr2 = arr1.map(bitnot);

show('arr1', arr1); // [ -2, -1, 0, 1, 2, 3, 4, 5 ]
show('arr2', arr2); // [ 1, 0, -1, -2, -3, -4, -5, -6 ]

const arr3 = ['-2', '-1', '0', '1', '2', '3', '4', '5'];

show('arr3', arr3);
show('arr3.map(bitnot)', arr3.map(bitnot)); // [ 1, 0, -1, -2, -3, -4, -5, -6 ]
show('arr3.map(n => ~~n)', arr3.map(n => ~~n)); // [ -2, -1, 0, 1, 2, 3, 4, 5 ]
show('arr3.map(bitnot).reduce(sum)', arr3.map(bitnot).reduce(sum)); // -20
