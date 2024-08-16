console.log('--- Q1 ---');
let age = 20;
console.log('Original age: ', age);
age = 22;
console.log('Updated age: ', age);

console.log('--- Q2 ---');
const num1 = 20;
const num2 = 5;
console.log('Product of num1 and num2: ', num1 * num2);
console.log('Difference between num1 and num2: ', num1 - num2);

console.log('--- Q3 ---');
const numberOfGates = 5;
// numberOfGates = 6
console.log(numberOfGates);

console.log('--- Q4---');
const person = {
  name: 'John',
  age: 30,
};
console.log('Original person: ', person);
person.age = 31;
console.log('Updated person: ', person);

console.log('--- Q5 ---');
const colors = {
  primary: 'red',
  secondary: 'blue',
};
console.log('Original Object: ', colors);
colors.tertiary = 'green';
console.log('Updated Object: ', colors);

console.log('--- Q6 ---');
const numbers = [1, 2, 3, 4];
numbers[2] = 99;
console.log(numbers);

console.log('--- Q7 ---');
const coordinates = { x: 10, y: 20 };
// console.log(coordinates);
const newCoordinates = { x: 30, y: 40 };
// coordinates = newCoordinates;
// console.log(coordinates);
//console.log(coordinates)

console.log('--- Q8 ---');
let obj = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
obj = obj2;
console.log(obj);
console.log(obj2);

console.log('--- Q9 ---');
const numericVar = 2;
// numericVar = 3
// console.log(numericVar)

console.log('--- Q10 ---');
const greeting = 'Hello';
console.log(greeting);
let name = ' Jay';
name = ' Shawn';
console.log(greeting + name);
