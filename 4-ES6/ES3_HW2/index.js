console.log('Program 1: ');
const logFirstAndRest = (num1, ...numbers) => {
  console.log('First: ', num1);
  console.log('Rest: ', numbers);
};
logFirstAndRest(1, 2, 3, 4, 5);
console.log('\n');

console.log('Program 2: ');
const logFirstAndSecond = (num1, num2, ...others) => {
  console.log('First: ', num1);
  console.log('Second: ', num2);
  console.log('Rest: ', others);
};
logFirstAndSecond(12, 22, 33, 44, 55);
console.log('\n');

console.log('Program 3: ');
const calculateProduct = (...numbers) => {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product = product * numbers[i];
  }
  return product;
};

console.log('Product: ', calculateProduct(2, 3, 4));
console.log('Product: ', calculateProduct(5, 2, 1, 3));
console.log('\n');

console.log('Program 4: ');
const createSentence = (...words) => words.join(' ');
console.log(
  'Words into sentence: ',
  createSentence('Javascript', 'is', 'awesome')
);
console.log('\n');

console.log('Program 5: ');
const findSum = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};
console.log('Sum of numbers: ', findSum(2, 4, 6, 8, 10));
console.log('\n');

console.log('Program 6: ');
const containsValue = (a, ...args) => {
  for (let i = 0; i < args.length; i++) {
    // console.log(args[i], a)
    if (args[i] === a) {
      return true;
    }
  }
  return false;
};
console.log(containsValue(3, 1, 2, 3, 4));
console.log(containsValue('apple', 'banana', 'orange'));
console.log('\n');

console.log('Program 7: ');
const calculateAverage = (...numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total / numbers.length;
};
console.log('Average: ', calculateAverage(10, 5, 15));
console.log('Average: ', calculateAverage(2, 4, 6, 8));
