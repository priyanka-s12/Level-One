//shorthand property in ES6

let personName = 'Maze';
let age = 20;

// const personObj = {
//   personName: personName,
//   age: age
// }
// console.log(personObj)

// const obj = {personName, age}
// console.log(obj)

//using function - passing parameters, & return object
const createPersonObject = (personName, age) => {
  return { personName, age };
};
console.log(createPersonObject(personName, age));
