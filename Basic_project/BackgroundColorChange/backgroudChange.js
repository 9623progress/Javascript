let button = document.querySelectorAll(".button");
let body = document.body;
console.log(button);
console.log(body);

button.forEach((b) => {
  b.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
    if (e.target.id === "black") {
      body.style.color = "white";
    } else {
      body.style.color = "black";
    }
  });
});
