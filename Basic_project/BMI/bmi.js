const form = document.querySelector("form");
const h1 = document.querySelector("h1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value) / 100;
  const weight = parseInt(document.querySelector("#weight").value);

  const bmi = (weight / (height * height)).toFixed(2);
  h1.textContent = `your bmi is ${bmi}`;
});
