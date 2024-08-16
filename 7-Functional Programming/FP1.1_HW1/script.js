console.log('Program 1: ');
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const stringLengthArray = words.map((word) => word.length);
console.log(stringLengthArray);
console.log('\n');

console.log('Program 2: ');
const numbers = [1, 2, 3, 4, 5];
const squareNumbersArray = numbers.map((num) => num * num);
console.log(squareNumbersArray);
console.log('\n');

console.log('Program 3: ');
const fruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const fruitsInUppercaseArray = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsInUppercaseArray);
console.log('\n');

console.log('Program 4: ');
const nums = [4, 9, 16, 25, 36];
const sqrtOfNumbersArray = nums.map((num) => Math.sqrt(num));
console.log(sqrtOfNumbersArray);
console.log('\n');

console.log('Program 5: ');
const prefixFruits = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const fruitPrefixArray = prefixFruits.map((fruit) => 'fruit-' + fruit);
console.log(fruitPrefixArray);
console.log('\n');

console.log('Program 6: ');
const numbersArray = [1, 2, 3, 4, 5];
const addTenInArray = numbersArray.map((num) => num + 10);
console.log(addTenInArray);
console.log('\n');

console.log('Program 7: ');
const numsArray = [1, 2, 3, 4, 5];
const addSquareArray = numsArray.map((num) => num + num * num);
console.log(addSquareArray);
console.log('\n');

console.log('Program 8: ');
const numsArr = [-5, 3, -8, 12, -1, 6];
const convertToAbsoluteArray = numsArr.map((num) => Math.abs(num));
console.log(convertToAbsoluteArray);
console.log('\n');

console.log('Program 9: ');
const phrases = ['Hello', 'How are you', 'Goodbye'];
const appendStrArray = phrases.map((str) => str.concat('!'));
console.log(appendStrArray);
console.log('\n');

console.log('Program 10: ');
//slice(start, end) - end not included
const wordsArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const capitalizeThirdLetterArray = wordsArray.map(
  (word) =>
    word.slice(0, 2) + word.charAt(2).toUpperCase() + word.slice(3, word.length)
);
console.log(capitalizeThirdLetterArray);
