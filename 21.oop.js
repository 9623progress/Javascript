const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  // constructor function
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor); // refernce to its own constructor function
//console.log(userTwo);

// when we use  new keyword it initialize the empty object
// then value assign to constructor object
// then that context is pass to the this

// this  contains refrence of current context
//object are a collection of properties and methods
