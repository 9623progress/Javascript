const url = "https://dummyjson.com/products";
let api = document.querySelector(".api");

let xhr = new XMLHttpRequest(); // step1

xhr.open("GET", url); // step2

xhr.onreadystatechange = () => {
  // step3
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    let data = JSON.parse(xhr.responseText);
    const product = data.products;
    // console.log(data.products);
    product.map((p) => {
      //   console.log(p.title);
      let child = document.createElement("div");
      child.innerHTML = `<div class="container">
                            <h1>${p.title}</h1>
                            <img src=${p.thumbnail} alt="">
                            <p class="desc">${p.description}</p>
                            <button class="buy"> But for ${Math.floor(
                              p.price * 10
                            )}</button>
                        </div>`;

      api.appendChild(child);
    });
  }
};

// console.log id not mentioned in official documentation it is just a debugging tool provided by javascript environment

xhr.send(); // step4
