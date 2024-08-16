console.log('Program 1: ');
const getAreaOfTriangle = (length, width) => length * width;
console.log('Area of Rectangle: ', getAreaOfTriangle(4, 5));
console.log('\n');

console.log('Program 2: ');
const checkDivisibility = (firstNum, secondNum) => firstNum % secondNum === 0;
console.log(
  'Is first number divisible by second number? ',
  checkDivisibility(15, 5)
);
console.log('\n');

console.log('Program 3: ');
const getDifference = (num1, num2) => num1 - num2;
console.log('Difference of two numbers are: ', getDifference(15, 5));
console.log('\n');

console.log('Program 4: ');
const concatenateStrings = (str1, str2, str3) => str1 + str2 + str3;
console.log(
  'Concatenate three strings: ',
  concatenateStrings('I ', 'am ', 'happy.')
);
console.log('\n');

console.log('Program 5: ');
function isBigger(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}
console.log('Is 2 bigger than 3? ', isBigger(2, 3));

// const isBigger = (a, b) => a > b
// console.log("Is 2 bigger than 3?", isBigger(2, 3))
console.log('\n');

console.log('Program 6: ');
const printProduct = (a, b) => a * b;
console.log('Product of two numbers: ', printProduct(2, 6));

// function printProduct(a, b) {
//   return a * b
// };
// console.log("Product of two numbers: ", printProduct(2, 6))
console.log('\n');

console.log('Program 7: ');
const getGreeting = (greeting, name) => greeting + name;
console.log(getGreeting('Hello ', 'John'));

// function getGreeting(greeting, name){
//   return greeting + name
// }
// console.log(getGreeting("Hello ", "John"))
