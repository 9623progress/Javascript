var arr = [1, 3, 4, 4];
// ==========================    for of loop           =================

for (var value of arr) {
  console.log(value);
}

const greetings = "Hello welcome";

for (var greet of greetings) {
  console.log(greet);
}

// map in javascript

let map = new Map();
map.set("1", "one");
map.set("2", "two");
map.set("1", "one...");
map.set("3", "three");
map.set("4", "four");
console.log(map);
console.log(map.get("1"));
// console.log(map.delete("1"));

for (var key of map) {
  console.log(key);
}

for (var [key, value] of map) {
  console.log(key, " =>", value);
}

console.log("++++++");

// for...in: Not suitable for Maps as it iterates over the enumerable properties of an object.
// for...of: Suitable for Maps as it iterates over the entries, keys, or values of an iterable object.

let myobj = {
  js: "javascript",
  py: "python",
  cpp: "c++",
};

for (var key in myobj) {
  console.log(key, "=>", myobj[key]);
}

// for...in: Best suited for iterating over the properties (keys) of an object. It should not be used for arrays or Maps.
// for...of: Cannot be used directly on plain objects. However, you can use it with the results of Object.keys(), Object.values(), or Object.entries() to iterate over the keys, values, or entries of an object.

// plain objects in JavaScript are not iterable by default. This means you cannot directly use the for...of loop with objects. However, you can still iterate over their properties using methods like for...in and by transforming the object properties into an array that can be iterated with for...of.

// for each loop

const arr2 = [1, 34, 5, 5, 5, 6, 65, 3, 3, 5, 6, 6, 3, 3];

arr2.forEach((item) => {
  console.log(item);
});

const arrayObj = [
  {
    name: "p",
    roll: 20,
  },
  {
    name: "pr",
    roll: 20,
  },
  {
    name: "pg",
    roll: 20,
  },
];

arrayObj.forEach((item) => {
  console.log(item.name, item.roll);
});
