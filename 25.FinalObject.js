// interview question can we change the value of Math.pi
// ans=>no.
//but why
//because inbult every object has some property like writable ,enumerable like this.
//so inbuilt for Math.pi writable is false and we cant make it true; thats why we cant change the Math.pi value;

const obj = {
  name: "pragati",
  address: "abc",
};

console.log(Object.getOwnPropertyDescriptors(obj));
//output
//{
// name: {
//     value: 'pragati',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   address: {
//     value: 'abc',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

Object.defineProperty(obj, "name", { writable: false });
Object.defineProperty(obj, "name", { enumerable: false }); // by this we also cant traverse on this propertyS

obj.name = "rushi";
// console.log(obj.name); //pragati // i try to,update but it wont update due to writable false

for (const key in obj) {
  console.log(key); // Output: address (name is not enumerable) means iteratable
}
