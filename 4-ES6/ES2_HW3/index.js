console.log('Program 1: ');
const createPersonObject = (firstName, lastName) => ({
  fname: firstName,
  lname: lastName,
});
console.log(createPersonObject('John', 'Doe'));
console.log('\n');

console.log('Program 2: ');
const getStrProperties = (str) => ({
  length: str.length,
  uppercase: str.toUpperCase(),
});
console.log(getStrProperties('hello'));
console.log('\n');

console.log('Program 3: ');
const getPersonObject = (firstName, lastName, age, phoneNumber) => ({
  fullName: firstName + ' ' + lastName,
  age: age,
  phoneNumber: phoneNumber,
});
console.log(getPersonObject('Bob', 'Johnson', 30, 7511554713));
console.log('\n');

console.log('Program 4: ');
const getProperties = (str1, str2) => ({
  concatenation: str1 + ' ' + str2,
  charCount: str1.length + str2.length,
});
console.log(getProperties('Hello', 'World'));
console.log('\n');

console.log('Program 5: ');
const calculateCircleProperties = (radius) => ({
  circumference: (2 * Math.PI * radius).toFixed(4),
  area: (Math.PI * radius * radius).toFixed(4),
});

console.log(calculateCircleProperties(5));
console.log('\n');

console.log('Program 6: ');
const calculateDifferenceAndQuotient = (num1, num2) => ({
  difference: num1 - num2,
  quotient: num1 / num2,
});

console.log(calculateDifferenceAndQuotient(10, 2));
console.log('\n');

console.log('Program 7: ');
const analyzeSentence = (str) => ({
  wordCount: str.trim().split(' ').length,
});
console.log(analyzeSentence('Javascript is fun'));
console.log('\n');

console.log('Program 8: ');
const calculateSquareAndCube = (num) => ({ square: num ** 2, cube: num ** 3 });
console.log(calculateSquareAndCube(4));
console.log('\n');

console.log('Program 9: ');
const checkNumber = (num) => ({ isPositive: num > 0, isNegative: num < 0 });
console.log(checkNumber(-7));
console.log(checkNumber(5));
