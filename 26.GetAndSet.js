class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter for firstName
  get firstName() {
    return this._firstName;
  }

  // Setter for firstName
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  // Getter for lastName
  get lastName() {
    return this._lastName;
  }

  // Setter for lastName
  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter for fullName
  set fullName(newFullName) {
    [this._firstName, this._lastName] = newFullName.split(" ");
  }
}

// Example usage
const person = new Person("John", "Doe");

console.log(person.fullName); // John Doe

person.firstName = "Jane";
console.log(person.fullName); // Jane Doe

person.fullName = "Mary Johnson";
console.log(person.firstName); // Mary
console.log(person.lastName); // Johnson

function Person2(firstName, lastName) {
  let _firstName = firstName;
  let _lastName = lastName;

  // Getter for firstName
  Object.defineProperty(this, "firstName", {
    get: function () {
      return _firstName;
    },
    set: function (newFirstName) {
      _firstName = newFirstName;
    },
    enumerable: true,
    configurable: true,
  });

  // Getter for lastName
  Object.defineProperty(this, "lastName", {
    get: function () {
      return _lastName;
    },
    set: function (newLastName) {
      _lastName = newLastName;
    },
    enumerable: true,
    configurable: true,
  });

  // Getter for fullName
  Object.defineProperty(this, "fullName", {
    get: function () {
      return `${_firstName} ${_lastName}`;
    },
    set: function (newFullName) {
      [_firstName, _lastName] = newFullName.split(" ");
    },
    enumerable: true,
    configurable: true,
  });
}

// Example usage
const person2 = new Person2("John", "Doe");

console.log(person2.fullName); // John Doe

person.firstName = "Jane";
console.log(person2.fullName); // Jane Doe

person.fullName = "Mary Johnson";
console.log(person2.firstName); // Mary
console.log(person2.lastName); // Johnson
