//arrow function that generates random number bet 1 to 10 - no parameter

const getRandomNumber = () => Math.floor(Math.random() * 10);

console.log(getRandomNumber());

//arrow function that returns current date
const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());

//arrow function that returns a greeting
const getGreeting = () => 'Hello, Welcome to neoG Camp!';
console.log(getGreeting());

//pass one parameter
// const getSquareValue = (num) => num * num
const getSquareValue = (num) => num ** 2;
console.log(getSquareValue(3));

//arrow function to check if number is positive
const isPositive = (num) => num > 0;
console.log(isPositive(3));
console.log(isPositive(-2));

//arrow function to check if number is even
const isEven = (num) => num % 2 === 0;
console.log(isEven(4));
console.log(isEven(5));

//when pass 1 parameter, even if not pass parameter in (), it works, but in case of no params and more than 1 params need to pass paramaters in () bracket
