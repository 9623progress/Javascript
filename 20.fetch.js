// const data = fetch("https://dummyjson.com/products");
// data
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// second method

async function fetchFunction() {
  const data = await fetch("https://dummyjson.com/products");
  const product = await data.json();
  console.log(product);
}

fetchFunction();

// fetch has it own prority queue in web api thats why it get first priority while execution
