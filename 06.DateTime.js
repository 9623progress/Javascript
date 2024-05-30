const mydate = new Date();
console.log(mydate);
console.log(mydate.getTime()); //mllisecond
console.log(mydate.getFullYear());
console.log(mydate.getMonth());
console.log(mydate.getHours());

// in this way you can explore all functions and there convesions

console.log(mydate.toLocaleDateString());
console.log(
  mydate.toLocaleDateString("default", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  })
);
