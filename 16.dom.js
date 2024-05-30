console.log(
  document.getElementById("test").getAttribute("class"),
  document.getElementById("test").getAttribute("id"),
  document.getElementById("test").setAttribute("class", "head"),
  document.getElementById("test").setAttribute("class", "headding head")
);

const test = document.getElementById("test");

test.style.backgroundColor = "green";
test.style.borderRadius = "10px";
test.style.padding = "10px";

// test.innerText = "Hello i changed the heading";

// difference between textContent and innertext

console.log(test.textContent); // i also show hidden text
console.log(test.innerText); // it only show text which is render
console.log(test.innerHTML); // show along with html

const NodeList = document.querySelectorAll("li");
console.log(NodeList);

// we can apply for each loop in node list not a map method

NodeList.forEach((li) => {
  return (li.style.backgroundColor = "red");
});

// or

NodeList[2].style.backgroundColor = "green";

const htmlCollection = document.getElementsByClassName("li");

// htmlCollection.forEach((li) => {
//   return (li.style.width = "100px");
// });
// we could not traverse on html collection directly by for each thats why convert it in array and then traverse
console.log(htmlCollection);

const array = Array.from(htmlCollection);

array.forEach((li) => {
  return (li.style.width = "100px");
});

//create new element
const parent = document.querySelector(".parent"); // it will return html collection for each not apply
console.log(parent);
console.log(parent.children);
console.log(parent.children[0].innerText);

console.log(parent.length);
console.log(parent.children.length);
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerText);
}

parent.children[0].style.backgroundColor = "red";

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const day = document.querySelector(".day");
console.log(day.parentElement);

// actual creation of element

const div = document.createElement("div");
div.innerText = "hiii "; // it traverse whole dom thats why not optimize

div.style.backgroundColor = "green";
div.style.padding = "10px";
div.style.borderRadius = "5px";

// another method of adding text

const textNode = document.createTextNode("hellll");
div.appendChild(textNode); // this was optimize

document.body.appendChild(div);

// edit

const liSelecter = document.querySelector("li:nth-child(1)");
console.log(liSelecter);
// 1 st method by inner text/ innerhtml

liSelecter.innerHTML = "1"; // not optimize;

//2nd method // optimize
const li = document.createElement("li");
li.textContent = "1";
liSelecter.replaceWith(li);

//remove

const liSelecter2 = document.querySelector("li:nth-child(2)");
liSelecter2.remove();
