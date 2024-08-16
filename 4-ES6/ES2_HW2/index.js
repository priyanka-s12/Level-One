console.log('Program 1: ');
const isOdd = (num) => num % 2 !== 0;
console.log('Is number odd? ', isOdd(5));
console.log('\n');

console.log('Program 2: ');
const getLengthOfString = (str) => str.length;
console.log('Length of the string: ', getLengthOfString('I am happy'));
console.log('\n');

console.log('Program 3: ');
const getCapitalized = (str) => str.toUpperCase();
console.log(getCapitalized('hello john'));
console.log('\n');

console.log('Program 4: ');
const getCurrentDate = () => new Date().toLocaleDateString();
console.log('Current Date: ', getCurrentDate());
console.log('\n');

console.log('Program 5: ');
const getCurrentTime = () => new Date().toLocaleTimeString();
console.log('Current Time: ', getCurrentTime());
console.log('\n');

console.log('Program 6: ');
const convertToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
console.log(
  `Convert Fahrenheit to Celsius: ${convertToCelsius(60).toFixed()} °C`
);
console.log('\n');

console.log('Program 7: ');
const isEmptyString = (str) => str.length === 0;
console.log(isEmptyString('Hello'));
console.log(isEmptyString(''));
console.log('\n');

console.log('Program 8: ');
const getRandomNumber = () => Math.floor(Math.random() * 30);
console.log(getRandomNumber());
console.log('\n');

console.log('Program 9: ');
const getSquareRoot = () =>
  Math.sqrt(Math.floor(Math.random() * 100)).toFixed(4);
console.log(getSquareRoot());
console.log('\n');

console.log('Program 10: ');
const convertToLowerCase = (str) => str.toLowerCase();
console.log(convertToLowerCase('WORLD'));
