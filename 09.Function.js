function print() {
  console.log("hello");
}
print();

//parameterised fuction
function sum(num1, num2) {
  return num1 + num2;
}

sum(2, 3);
console.log(sum(2, 3));

function messasage(messasage = "nothing") {
  console.log(messasage);
}

function messasage2(messasage) {
  if (messasage) {
    console.log(messasage);
  } else {
    console.log("pass the message in argumnets");
  }
}

messasage("hii");
messasage();

messasage2("hii ...................");
messasage2();

// when we call function that time we pass arguments
// and we build function that time we pass parameters

//----------------------- function with array and object-----------------------

//1.object
// how to pass object as a parameter

function myfun(anyObject) {
  // you ned to check also while working on project that this value exist or not
  console.log(
    `hiii ${anyObject.name} this is your roll number ${anyObject.rollNum}`
  );
}

const object = {
  name: "Pragati",
  rollNum: "27",
};

myfun(object);

// or you can directly pass the function

myfun({
  name: "Pragati",
  rollNum: "27",
});

//2.Array
const array = [78, 89, 34];

function functionOfArray(arr) {
  console.log(arr[1]);
}

// rest operator =>which same as spread oprator just by the usecase name is differ

function RestOPerator(...num) {
  console.log(num);
}

function RestOPerator2(num1, num2, ...num) {
  console.log(num);
}

RestOPerator(4, 5, 7, 4, 100, 345, 2);
RestOPerator2(1000000, 6, 4, 56, 34, 4, 56, 34445, 5);
