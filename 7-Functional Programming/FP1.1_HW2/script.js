//toFixed() returns string, 1 decimal place - Math.round(num  * 10)/ 10
console.log('Program 1: ');
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const firstThreeCharsArray = words.map((word) => word.slice(0, 3));
console.log(firstThreeCharsArray);
console.log('\n');

console.log('Program 2: ');
const nums = [1, 2, 3, 4, 5];
const cubeArray = nums.map((num) => num ** 3);
console.log(cubeArray);
console.log('\n');

console.log('Program 3: ');
const fruitsArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const resultantArray = fruitsArray.map((fruit) => fruit.slice(2));
console.log(resultantArray);
console.log('\n');

console.log('Program 4: ');
const salaries = [5000, 7500, 12000, 3000, 9000];
const bonusArray = salaries.map((salary) => salary + salary * 0.1);
console.log(bonusArray);
console.log('\n');

console.log('Program 5: ');
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const addHelloArray = names.map((name) => `Hello, ${name}`);
console.log(addHelloArray);
console.log('\n');

console.log('Program 6: ');
const sentences = [
  'Hello, how are you?',
  'Javascript is fun!',
  'Arrays are versatile.',
];
const findLengthArray = sentences.map((sentence) => sentence.length);
console.log(findLengthArray);
console.log('\n');

console.log('Program 7: ');
//one decimal place
//Math.round() -returns the value of a number rounded to the nearest integer
const temperaturesCelsius = [0, 20, 37, -5, 10];
const convertToFahrenheitArray = temperaturesCelsius.map(
  (temp) => Math.round((temp * (9 / 5) + 32) * 10) / 10
);
console.log(convertToFahrenheitArray);
console.log('\n');

console.log('Program 8: ');
const prices = [50, 75, 120, 30, 90];
const discountedArray = prices.map((price) => price - price * 0.1);
console.log(discountedArray);
console.log('\n');

console.log('Program 9: ');
//tofixed() returns string
const decimalNumbers = [50.2456, 750.5677, 12.56705, 300.5065, 9.23406789];
const twoDecimalNumbersArray = decimalNumbers.map((num) => num.toFixed(2));
console.log(twoDecimalNumbersArray);
console.log('\n');

console.log('Program 10: ');
const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
const addLengthArray = namesArray.map((name) => `${name}${name.length}`);
console.log(addLengthArray);
console.log('\n');
