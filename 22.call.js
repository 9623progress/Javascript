function setUsername(userName) {
  this.userName = userName;
}

function assigndata(username, email, password) {
  setUsername(username); // if you call like this then this will call and come in execution stack execute and delete but it dont return reference and the name which assign to user name also remeove
  //   so output=>assigndata { email: 'xyz@gmail.com', password: '123' }

  // if you want reference should have to be return
  // then
  setUsername.call(this, username); // now we are passing our function context means this then that will assign to our context
  this.email = email;
  this.password = password;
}

const object = new assigndata("pragati", "xyz@gmail.com", "123");
console.log(object);
