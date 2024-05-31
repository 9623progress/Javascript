let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let userInput = document.querySelector(".number");
let submit = document.querySelector(".submit");
const hint = document.querySelector(".hint");
const prevGuess = document.querySelector(".prevGuess");
const remaining_chance = document.querySelector(".remaning");
let button = document.querySelector(".start");
let h1 = document.querySelector(".note");
let remaining = 0;
let playGame = true;

submit.addEventListener("click", () => {
  if (playGame) {
    const guess = parseInt(userInput.value);
    validateGauess(guess);
  }
});

const validateGauess = (guess) => {
  if (isNaN(guess)) {
    alert("Enter the valid number");
  } else if (guess < 1) {
    alert("Enter the number greater than 0");
  } else if (guess > 100) {
    alert("Enter the number smaller  than 101");
  } else {
    checkGuess(guess);
  }
  userInput.value = "";
};

const checkGuess = (guess) => {
  if (remaining === 9) {
    endGame("You lost the game");
    return;
  }
  prevGuess.innerHTML += `${guess} ,`;
  remaining++;
  remaining_chance.innerHTML = 10 - remaining;
  if (guess === randomNumber) {
    hint.textContent = "";
    endGame("You Won the game !!!");
  } else if (guess < randomNumber) {
    hint.textContent = "Guess is too low";
  } else if (guess > randomNumber) {
    hint.textContent = "Guess is too high";
  }
};

const endGame = (message) => {
  userInput.setAttribute("disabled", "");
  userInput.placeholder = "";
  button.innerHTML = "Start Game Again";
  h1.textContent = message;
  hint.textContent = "";
  remaining_chance.innerHTML = "0";
  playGame = false;
};

button.addEventListener("click", () => {
  startGame();
});

const startGame = () => {
  userInput.removeAttribute("disabled");
  userInput.placeholder = "Enter the number";
  playGame = true;
  button.innerHTML = "";
  h1.innerHTML = "";
  remaining = 0;
  remaining_chance.innerHTML = "10";
  prevGuess.innerHTML = "";
  randomNumber = parseInt(Math.random() * 100 + 1);
  console.log(randomNumber);
};
