//Important for Interview perspective

//Javascript Execution Context

//Javascript run in two context

//1.Global execution context=> this
//for browser ,node ,bun global execution contest is different .
// for browser global execution contest is window object

//2.functional execution context

//3. in some documentation another execution context is eval like in mongoose

//

//Javascript code run in two phase
//1.memory creation
//2.execution phase

// for example

{
  let var1 = 10;
  let var2 = 5;
  function add(num1, num2) {
    let temp = num1 + num2;
    return temp;
  }
  let res1 = add(var1, var2);
  let res2 = add(3, 5);
}

// execution steps of above code
//1.global execution
// this

//2.memory allocation
//var1=undefined;
//var2=undefined;
// add= defination
//res1=undefined;
//res2=undefined

//3.execution
//var1=10;
// var2=5;
// add ==================> creation of new context and again memory allocation and execution => this means for res1 and res2;
// when this done then
// res1=15 =>return to global execution context
//res2=8 =>return to global execution context

//call stack=>>>>>>>>>>>secuence of execution => when done then get out of stack => follow last in first out LIFO
