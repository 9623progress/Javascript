//important points
//event propagation,bubbling,delegation,preventDefault

//basic syntax of addEventListner=>
// Element.addEventListner(
//   "event_name",
//   (e) => {
//     console.log("xyz");
//   },
//   false or true
// );

// false=>event bubbling means event capture bottom to top,default behaviour
//true=> capturing phase ,means top to bottom

// generally true or false not mentioned alot its by default false but interviwer can ask

// Event Propagation: The way events travel through the DOM in three phases: capturing, target, and bubbling.
// Event Bubbling: The phase where the event moves from the target element up to the root.
// Event Delegation: Attaching a single event listener to a parent element to manage events for multiple child elements.
// preventDefault: A method to stop the default action of an event from occurring.

// Capturing Phase: The event starts from the root and travels down the DOM tree to the target element.
// Target Phase: The event reaches the target element itself

const owl = document.querySelector("#owl");
// owl.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();
//     console.log("owl click");
//     console.log(e.target.parentNode);
//   },
//   false
// );

const ul = document.querySelector("ul");
// ul.addEventListener(
//   "click",
//   (e) => {
//     console.log("ul click");
//   },
//   false
// );

const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  //when we click on link it will open it was its default behaviour so we are stopping that
});

ul.addEventListener("click", (e) => {
  const parent = e.target.parentNode;
  if (e.target.nodeName === "IMG") {
    parent.remove();
  }
});

//setTimeOut
const time = setTimeout(() => {
  console.log("hii");
}, 5000);

// for clear the time out
// clearTimeout(time);

// set interval

const interval = setInterval(() => {
  console.log(100);
}, 2000);

// clearInterval=> it need reference of set Interval
clearInterval(interval); // on metting some condition if you want to clear the interval then you can stop;

//another way of creating setTimeout and set interval
// passing a function
// (function_referance,time,parameter)

const print = (message) => {
  console.log(message);
};

setTimeout(print, 2000, "hello");
setInterval(print, 1000, "hiiiIIIIIIII");
