const a = 20;
// a = 30; this will give error because we cant chnage the value of constant
// redecalartion as well as re assignment not allowed in const

console.log(a);

// in var redeclaration as well as reassign ment allowed
var b = 20;
var b = 30;
if (true) {
  // here i redeclare var b but still its scope is globel and it affect outside b also
  var b = 40;
  console.log(b);
}
console.log(b);

let c = 20;

// let c=23; =>this not allwed in let / let only siupport re assignmnet not redeclaration
if (true) {
  // but over here c scope is local and it didnt affect outside
  let c = 40;
  console.log(c);
}
console.log(c);

// on javascript loop conditional sarement make there diffrent scope

//------------------part2 scope and mini hoisting --------------------

function one() {
  const website = "code help";
  function two() {
    const Myname = "Pragati";
    console.log(Myname, website);
  }
  two();
  //   console.log(Myname); ==>this will give error because we cant access it outside scope;
}

one();

if (true) {
  const web = "cyz.com";
  if (true) {
    const name = "Pragati";
    console.log(web, name);
  }
  //   console.log(name); // over here also we cant access the name
}

// mini hoisting
two(); // we can access it before declaration beacuse this type of function support hoisting when they declare there scope is global and hoist at the top;
function two() {
  const Myname = "Pragati";
  console.log(Myname);
}

// arr(); // arrow function dont support the hoisting

const arr = () => {
  console.log("hello");
};

arr();

// this Keyword
console.log("-----------------------");
const obj = {
  userName: "pragati",
  messasage: function () {
    console.log(this.userName);
    console.log(this);
    return 0;
  },
};

console.log(obj.messasage());

function Chai() {
  const user = "pragati";
  console.log("hello");
  //   console.log(this.user);
}
Chai();

console.log(this); // in node this give empty object but in browser you get window object because in browser global object is window object

let myObject = {
  value: 10,
  myFunction: () => {
    console.log(this.value); // 'this' refers to the global object, not myObject
  },
  regularFunction: function () {
    console.log(this.value); // 'this' refers to myObject
  },
  nestedObject: {
    value: 20,
    myFunction: () => {
      console.log(this.value); // 'this' refers to the global object, not nestedObject
    },
  },
};

myObject.myFunction(); // Output: undefined (or whatever the global value is)
myObject.regularFunction(); // Output: 10
myObject.nestedObject.myFunction(); // Output: undefined (or whatever the global value is)
