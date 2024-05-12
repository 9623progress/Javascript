// javascript change alot in back 10 years
//so if we want the code written should be standard then
"use strict";

//try to write clean code easy to read

/* what is ecma script */
/* =>  at start different browser has different standard of writing the javascript code ,then for setting same standard all around the  world they decided to make common standard that is ecma script standards   */

// 1.Number- range 2^52
//  bigint
// 2.string=>" ",' '
// 3.boolean=> true/false
// 4.null =>intentially empty ,its type is object,standalone value
// 5.undefined => not assign yet
// 6 symbol => unique

const name = "pragati";
console.log(typeof name); // string

console.log(typeof null); // its object

//---------------------------------------------------------------------------------------------------------

// data type conversion

// 1.string to number

let score = "33";
let score2 = "33as";

let score3 = false;
let score4 = undefined;

console.log(typeof Number(score)); //number
console.log(Number(score)); //33

console.log(typeof Number(score2)); //number
console.log(Number(score2)); //NaN

console.log(typeof Number(score3)); //number
console.log(Number(score3)); //0

console.log(typeof Number(score4)); //number
console.log(Number(score4)); //NaN

let islog = "hitesh";
console.log(Boolean(islog)); // true

//-------------------------------------------------    OPERATIONS    -------------------------------------
console.log("-----------            --------");
// 1. Normal arithmatic operation

console.log(2 + "3"); //23
console.log("3" + 2); //32
console.log("2" + 3 + 4); //234
console.log(2 + 4 + 5 + "6" + 9 + 8); //11698
console.log(+true); //1
console.log(-true); //-1

//------------------------------------            comparison     --------------------------------------
console.log("----------------            comparison     ---------------------");

// normal no comaparizon
// 2>=2
// 3<3
// 4>5
// 6<=7
// 2==2

//different data types comparison

console.log("2" > 5);
console.log(5 < "7");
console.log("------");
//null some time convert to 0 and sometime convert to NAN so its difficult to predict what will output
// >= , <= ,== and === work differently in javascript => === check data type also and in == it convert in to number and then check
console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
console.log("----");
//undefined always convert to NAN
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

console.log(
  "--------------------------- summary -------------------------------"
);
// Types od data types

//Premitive (pass by value)

// 1.Number- range 2^52 =>type =number
// 2.string=>" ",' '   =>type =string
// 3.boolean=> true/false => type=boolean
// 4.null =>intentially empty ,its type is object,standalone value
// 5.undefined => not assign yet => type=undefined

// 6. symbol => unique'
let a = Symbol(2);
let b = Symbol(2);
console.log(a === b);

// 7. bigint

let bigint = 87348787878783748787n;

//non-premitive (pass by reference)
//1.object  =>type=object
let myObje = {
  name: "pragati",
};
console.log(typeof myObje);

//2, Array  => type=object
let arr = [1, 3, 4];
console.log(typeof arr);

//3.function type=>function
let mFunction = () => {
  console.log("hello");
};
console.log(typeof mFunction);
