const show = require("./show");
//
// const { assert, dir, info, log, trace } = console;
//
const map1 = (fn, arr) =>
  arr.reduce((acc, item, index, arr) => acc.concat(fn(item, index, arr)), []);

const arr1 = [1, 2, 3, 4, 5, 6, 7];

const arr2 = map1(arr1 => arr1, arr1);

show("arr1", arr1);
show("arr2", arr2);
//
// const map2 = (fn, arr) =>
//   arr.reduce((acc, item, index, arr) => {
//     return arr.push(fn(item, index, arr));
//   }, []);
//
// const arr3 = map2(arr1 => arr1, arr1);
//
// show('arr1', arr1);
// show('arr3', arr3);
//
// const map3 = (fn, arr) =>
//   arr.reduce((acc, item, index, arr) => {
//     return acc.push(fn(item, index, arr));
//   }, []);
//
// const arr4 = map3(arr1=>arr1, arr1);
//
// show('arr1', arr1);
// show('arr4', arr4);
//
// const arr5 = [[0, 1], [2, 3], [4, 5]];
// const arr6 = arr5.reduceRight((currentValue, previousValue) =>
//   previousValue.concat(currentValue)
// );
//
// show(arr6);
//
// reduceRight using reduce
// const reduceRight = (fn, arr) =>
//   arr.reverse().reduce((acc, item, index, arr) => {
//     return acc.concat(fn(item, index, arr));
//   }, []);
// const arr7 = [[0, 1], [2, 3], [4, 5]];
// const arr8 = reduceRight(arr7=>arr7, arr7);
// show(arr8);  // [ 4, 5, 2, 3, 0, 1 ]
