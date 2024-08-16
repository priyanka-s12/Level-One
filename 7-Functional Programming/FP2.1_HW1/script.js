console.log('Program 1: ');
//filter no more than 10
const nums = [12, 5, 20, 8, 15, 30];
const moreThanTen = nums.filter((num) => num > 10);
console.log(moreThanTen);
console.log('\n');

console.log('Program 2: ');
//contain 'o' letter
const words = ['hello', 'world', 'apple', 'orange', 'banana'];
const wordsContainingO = words.filter((word) => word.includes('o'));
console.log(wordsContainingO);
console.log('\n');

console.log('Program 3: ');
//prime num
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter((num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
});
console.log(primeNumbers);
console.log('\n');

console.log('Program 4: ');
//multiple of 3
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipleOfThree = threeMultiples.filter((num) => num % 3 === 0);
console.log(multipleOfThree);
console.log('\n');

console.log('Program 5: ');
//not divisible by 2 and 3
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbs.filter((num) => num % 2 !== 0 && num % 3 !== 0);
console.log(result);
console.log('\n');

console.log('Program 6: ');
//words that are in uppercase
const wordsArray = ['APPLE', 'banana', 'KIWI', 'ORANGE', 'GRAPE'];
const wordsInUppercase = wordsArray.filter(
  (word) => word === word.toUpperCase()
);
console.log(wordsInUppercase);
console.log('\n');

console.log('Program 7: ');
//string that don't end with y
const wordsY = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const notEndingWithY = wordsY.filter((word) => word[word.length - 1] !== 'y');
console.log(notEndingWithY);
console.log('\n');

console.log('Program 8: ');
//numbers that are multiple of 2 and 3
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipleOfTwoAndThree = numsArray.filter(
  (num) => num % 2 === 0 && num % 3 === 0
);
console.log(multipleOfTwoAndThree);
console.log('\n');

console.log('Program 9: ');
//strings that include y and u letter
const feelingWords = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const wordYAndU = feelingWords.filter(
  (word) => word.includes('y') && word.includes('u')
);
console.log(wordYAndU);
console.log('\n');

console.log('Program 10: ');
//multiples of 5 or 3
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiples = newNums.filter((num) => num % 5 === 0 || num % 3 === 0);
console.log(multiples);
