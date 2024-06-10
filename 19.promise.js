// promise is a success or failure of operation

// method one of writeing promise

let promise = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve();
  } else {
    reject();
  }
});

const thenReturn = promise.then(() => {
  console.log("promise resolve");
});

thenReturn.catch(() => {
  console.log("inside catch");
});

//method 2 // by direct chaining
new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {
    console.log("promise2 resolve");
  })
  .catch(() => {
    console.log(() => {
      console.log("promise2 reject");
    });
  });

//method 3
// we can pass data also in resolve and reject

new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    resolve({ name: "pragati", password: "123" });
  } else {
    reject("something went wrong");
  }
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//method 4 by async wait
let promise4 = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve({ name: "pragati", password: "1234" });
  } else {
    reject("error");
  }
});

const helperFunction = async () => {
  try {
    const data = await promise4;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

helperFunction();

//method 5
// chaining of then
new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve({ name: "pragati", password: "123" });
  } else {
    reject("something went wrong");
  }
})
  .then((data) => {
    console.log(data);
    return "pass to then";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
