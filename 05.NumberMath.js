// normal declarartion
const num = 200;

//explicit number declarartion
// past(const num2 = new Number(400);) it in console and print num2 you can see all related functions in prototype
const num2 = new Number(400);
console.log(num);
console.log(num2);

//---------------Math--------------------
let num3 = 3554.4887;
console.log(num3.toFixed());
console.log(num3.toLocaleString());
console.log(Math.round(num3));
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.random());

const number = 123456.789;
console.log(number.toLocaleString());

console.log(
  number.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // Output: $123,456.79
