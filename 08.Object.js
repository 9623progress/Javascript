// object has two types 0f declaration
//1.singleton-means only one instance
// singleton means by create method build means constructor method
//const obj=new Object();

//2.literal=> we will see literal
let myObj = {
  name: "Pragti",
  email: "jpragati7600@gmail.com",
  mob: "48372938939",
  imp: "hello",
  "full name": "PK Jadhav",
};

// how to access the object properties
console.log(myObj.email);
console.log(myObj["email"]);

// if key in double cotes then you can not access it by . operator
console.log(myObj["full name"]);

// interview question add symbol type key in object
let key = Symbol("myKey");
let myObj2 = {
  name: "Pragati",
  email: "jpragati700@gmail.com",
  mob: "488939",
  imp: "hello",
  [key]: "hii",
};

//after freez no other changes will apply
Object.freeze(myObj);
myObj.email = "xyz";
console.log(myObj);

// sysmbol add in square baraket then and then it will consider symbol otherwise string

console.log(typeof myObj2.key);
console.log(myObj2.key);
// we can access it in square barcjets only
console.log(typeof myObj2[key]); //string
console.log(myObj2[key]);
console.log(myObj2);

myObj2.greetings = function () {
  console.log(`hello ${this.name}`);
  return;
};

console.log(myObj2.greetings());

//----------------------PART-2-----------------------------------------------

const tinderUser = {};
tinderUser.id = 3;
tinderUser.name = "abc";
tinderUser.email = "jfhjd";

console.log(tinderUser);

// nesting of objects

const Obj = {
  FullName: {
    name: "Pragati",
    "last name": "Jadhav",
  },
  email: "hgdhgjg",
};

console.log(Obj.FullName.name);

//merging of object

let ob1 = { 1: "a", 2: "b" };
let ob2 = { 3: "a", 4: "b" };
let ob3 = { 5: "a", 6: "b" };

console.log({ ob2, ob3 });
//by assign
//Object.assign(target,object)=>inside target all element will store
const ob4 = Object.assign({}, ob1, ob2, ob3);
console.log("ob4", ob4);
const ob5 = Object.assign(ob1, ob2, ob3);
console.log("ob5", ob5);
console.log("ob1", ob1);

//most frequent use merge method
console.log({ ...ob1, ...ob2, ...myObj, ...myObj2 });

// array objects

const arr = [
  tinderUser,
  {
    1: "a",
    2: "b",
  },
  {
    1: "a",
    2: "b",
  },
  {
    1: "a",
    2: "b",
  },
  {
    1: "a",
    2: "b",
  },
];
console.log(arr[0].email);

console.log(Object.keys(ob1));
console.log(Object.values(ob1));
console.log(ob1.hasOwnProperty("a"));
console.log(ob1.hasOwnProperty("1"));

// ------------------------------- object destructuring  oand json------------------------------------

const myInfo = {
  name: "pragati",
  email: "hdjgfg",
};

//destructuring
const { name } = myInfo;
console.log(name);

const { name: a } = myInfo;
console.log(a);

//json
// {
//   "name":"Prgati",
//   "email":"myName"
// }

const fun = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  if (data) {
    return data;
  }
};
let data = null;

fun().then((d) => {
  data = d;
  //json data
  console.log(data);
});
