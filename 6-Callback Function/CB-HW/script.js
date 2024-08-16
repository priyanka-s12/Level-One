console.log('Program 1: ');
const getUserName = (username, callback) => {
  let message = 'Hello, ' + username + ' Doe!';
  callback(message);
};

const greetUser = (message) => {
  console.log(message);
};
getUserName('John', greetUser);
console.log('\n');

console.log('Program 2: ');
const calculateAge = (birthYear, callback) => {
  const currentAge = new Date().getFullYear() - birthYear;
  callback(currentAge);
};

const displayAge = (currentAge) => {
  console.log(`You are ${currentAge} years old!`);
};

calculateAge(1992, displayAge);
console.log('\n');

console.log('Program 3: ');
const generateUsername = (firstName, callback) => {
  let user = firstName + '_user';
  callback(user);
};

const displayUsername = (user) => {
  console.log(`Your username is: ${user}`);
};

generateUsername('Bob', displayUsername);
console.log('\n');

console.log('Program 4: ');
const checkTemperature = (currentTemperature, callback) => {
  const convertedTemperature = currentTemperature * (9 / 5) + 32;
  callback(convertedTemperature);
};

const displayTemperatureMessage = (temp) => {
  let message =
    temp > 86 ? 'Hot' : temp > 50 && temp <= 86 ? 'Moderate' : 'Cold';
  console.log(`The temperature is: ${message}`);
};

checkTemperature(25, displayTemperatureMessage);
console.log('\n');

console.log('Program 5: ');
const processArray = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};

const squareArray = (num) => {
  return num * num;
};
const numbersArray = [1, 2, 3, 4, 5];
processArray(numbersArray, squareArray);
console.log('\n');

console.log('Program 6: ');

const processArraySum = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};

const doubleNumber = (num) => {
  return 2 * num;
};
const numberArray = [2, 4, 6, 8, 10];
processArraySum(numberArray, doubleNumber);
console.log('\n');
