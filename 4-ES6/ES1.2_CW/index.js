const a = 2; //declared at top means accessible throughout the code below -> globar variable

//let and const both are block scope
if (true) {
  const a = 2;
  console.log(a);
}
console.log(a);
//ReferenceError = a is not defined

// let num = 100;
function printNum() {
  console.log(num);
  //checks if there num variable declared inside this block
  let num = 40;
  console.log(num);
}
printNum();
//ReferenceError: can't access num before initialization

// let num = 100;
function printNum() {
  console.log(num);
  //checks if there num variable declared inside this block. here another variable is found
  let num1 = 40;
  console.log(num1);
}
// printNum();

let num = 100;
function printNum() {
  const num = 40;
  console.log(num);

  if (true) {
    const num = 50;
    console.log(num);
  }
  console.log(num);
}
console.log(num);
printNum();

let num1 = 10; //global variable e.g. count = 0

if (true) {
  num1 = 20; //changed value inside the block, it is changed globally too -> true for function and for loop also
  console.log(num1);
}
console.log(num1);
//const can't reassigned -> gives TypeError

// console.log(name3)
let name3 = 'Bob';
//ReferenceError - can't access before initialization

let name; //just declare not initialized any value to it
// console.log(name)// o/p - undefined
name = 'John';

// console.log(name1)
const name1 = 'Alex';
//ReferenceError - can't access name1 before initialization

// console.log(name2)
var name2 = 'Joe'; //o/p-> undefined
//hoisting - interpreter hoist your variable at the top of code -> not happened with let and const variable -> not used var nowadays -> Interview Q

var name4;
// console.log(name4)// o/p undefined
name4 = 'Alexa';
