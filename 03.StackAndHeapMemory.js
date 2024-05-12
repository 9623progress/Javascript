// two types of memeory

//1 stack ==========> for premitive data types which is pass by value;
let s = "hfjh";
let b = s;
// now if we change the value of b then there is no change in s
b = "efjh";
console.log(b);
console.log(s);

// heap ========> pass by reference non-premitive data types
let obj = {
  email: "xyz@gmail.com",
  name: "pragati",
};

let a = obj;
let c = obj;

console.log(a);
console.log(c);

c.email = "abc.com";
// no there is change in everywhere who is pointing toward obj and also in obj
console.log(a);
console.log(c);
console.log(obj);
