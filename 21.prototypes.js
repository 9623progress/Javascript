function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2; // is function are object?=> yes  they are we can assign properties to them

console.log(multipleBy5(5));
console.log(multipleBy5.power); // accesing function assign property
console.log(multipleBy5.prototype);

function createUser(username, score) {
  // constructor function
  this.username = username;
  this.score = score;
}

// A prototype is an object that another object can reference and use to access properties and methods. Every JavaScript object has a prototype, which acts as a template object from which it inherits methods and properties.

// here i was adding increment method in object by prototype functionality

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// Array=>object
// string=>object
// function=>object

// if you add any prperty to object then they are share in string ,function,array

Object.prototype.print = function () {
  console.log(
    "object access property now it will share to string ,array,function"
  );
};

const array = [1, 2, 3, 4];
array.print(); // property access by array as well as object
chai.print();

// hitesh sir code

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance  => old method that allow one object to get access of another object property by __proto__

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax => new method by setPrototypeof property
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
