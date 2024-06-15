//classes are introduce in es6 and they are just syntactical sugar in javascript without classes all things can done in javascript

// but this is the part of javascript then we have to learn it

class User {
  constructor(user) {
    this.username = user;
  }

  print() {
    console.log(`print something in class ${this.username}`);
  }
}

//object by class
const tea = new User("pragati1");
tea.print();

//constructor function

function user2(username) {
  this.username = username;
}

//in constructor function to add method use .prototype
user2.prototype.print = function () {
  console.log(`print something in constructor function  ${this.username}`);
};
//same functionality by constructor function
const chai = new user2("pragati2");

chai.print();

//inheritance

class person extends User {
  constructor(user, email, password) {
    super(user);
    this.email = email;
    this.password = password;
  }

  logMe() {
    console.log(`name: ${this.username}`);
  }

  // this is static methid can access it out side function and nor call by child
  static generateCertificate() {
    console.log("certificate generated");
  }
}

const per = new person("abc", "i.gmail.com", "123");

per.logMe();
// per.generateCertificate();
