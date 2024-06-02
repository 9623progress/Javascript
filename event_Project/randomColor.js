const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
console.log(start);

let hex = "0123456789ABCDEF";

let color = "#";

const generateRandom = () => {
  color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color = color + hex[random];
  }
  document.body.style.backgroundColor = color;
  //   console.log(color);
};

let interval;

const StartChangeColor = () => {
  console.log("startChange call");
  if (!interval) {
    interval = setInterval(generateRandom, 500);
  }
};

const stopChangeColor = () => {
  clearInterval(interval);
  interval = null;
};

start.addEventListener("click", StartChangeColor);
stop.addEventListener("click", stopChangeColor);
