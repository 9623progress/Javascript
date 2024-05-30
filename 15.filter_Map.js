const arr = [2, 4, 5, 7, 7, 4, 67, 8, 1, 3, 4, 65];
//1st way
const filterArray = arr.filter((num) => num > 3);
// over here we keep condition num>3 and it directly written after arrow thats why it directly return without any scope;
console.log(filterArray);

//second way
const filterArray2 = arr.filter((num) => {
  return num > 3;
});

console.log(filterArray2);

//in above i created scope by {} thats why need to return;

const array = [];
arr.forEach((num) => {
  if (num > 3) {
    array.push(num);
  }
});
console.log(array);

// we can add multiple condition
const filterArray4 = arr.filter((num) => {
  return num > 3 && num < 10;
});
console.log(filterArray4);

//map method

const arr2 = arr.map((num) => {
  return num + 10;
});
console.log(arr2);

//chaining of functions

const newArr = arr
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num / 2;
  })
  .filter((num) => {
    return num > 30;
  });

console.log(newArr);

//reduce function

//syntex-

// arr.reduce((prevValue,CurrValue)=>{
//   return operation;
// },intitialize Prev Value)

const total = arr.reduce((prev, curr) => {
  return prev + curr;
}, 0);
console.log(total);
