const arr = new Array(51, 34); // Declare a new empty array
arr.push(5); // Add the value 5 to the array
console.log(arr); // Output the contents of the array to the console

console.log(arr.indexOf(5));
console.log(arr.length);
console.log(arr.includes(5));

// there are lot of functions of arrays go and check it

// what is difference between slice and splice

let array = [2, 3, 5, 5, 66, 2, 4];
console.log("a", array);

console.log(array.slice(0, 4));
console.log("a", array);

console.log(array.splice(0, 4));
console.log("a", array);

// =====> hence slice does not modify array splice does

//conatenation of array
const myArr = [8, 3, 5, 6, 44, 455, 67, 22];
const myArr2 = [84, 49, 37, 27];

// 1st method
console.log(myArr.concat(myArr2));

//2nd method =by spread operator
console.log([...myArr, ...myArr2]);

// falt method

const newArr = [4, 3, 5, 6, [1, 2, 3, [4, 7, 8]], 4, 6, 7, [22, 44, 55]];

console.log(newArr.flat(0));
console.log(newArr.flat(1));
console.log(newArr.flat(Infinity));

console.log(Array.from("Pragati"));

console.log(Array.isArray(myArr));

let a = 3;
let k = 4;
let c = 5;

console.log(Array.of(a, k, c));
