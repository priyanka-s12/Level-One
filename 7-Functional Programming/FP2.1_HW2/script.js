console.log('Program 1: ');
const nums = [12, 5, 20, 7, 8, 15, 30];
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers);
console.log('\n');

console.log('Program 2: ');
//string's length greater than 5
const words = ['kiwi', 'mango', 'apple', 'orange', 'banana'];
const lengthGreaterThanFive = words.filter((word) => word.length > 5);
console.log(lengthGreaterThanFive);
console.log('\n');

console.log('Program 3: ');
//whether string starts with 'S'
const wordsArray = ['Sun', 'Moon', 'Star', 'Planet', 'Saturn'];
const startsWithS = wordsArray.filter((word) => word.startsWith('S'));
console.log(startsWithS);
console.log('\n');

console.log('Program 4: ');
//not multiples of 3
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notThreeMultiples = threeMultiples.filter((num) => num % 3 !== 0);
console.log(notThreeMultiples);
console.log('\n');

console.log('Program 5: ');
//numbers divisible by both 7 and 3
const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const divisibleByThreeAndSeven = numbs.filter(
  (num) => num % 7 === 0 && num % 3 === 0
);
console.log(divisibleByThreeAndSeven);
console.log('\n');

console.log('Program 6: ');
//strings that are in lowercase
const strings = ['APPLE', 'banana', 'KIWI', 'orange', 'GRAPE'];
const inLowercase = strings.filter((str) => str === str.toLowerCase());
console.log(inLowercase);
console.log('\n');

console.log('Program 7: ');
//do not contain with the letter 'a'
const wordsY = ['happy', 'sad', 'sunny', 'cloudy', 'rainy'];
const noWordsY = wordsY.filter((word) => !word.includes('a'));
console.log(noWordsY);
console.log('\n');

console.log('Program 8: ');
//multiples of either 2 or 3
const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOfTwoOrThree = numsOnetoTen.filter(
  (num) => num % 2 === 0 || num % 3 === 0
);
console.log(multiplesOfTwoOrThree);
console.log('\n');

console.log('Program 9: ');
//strings that includes the letter 'y' or 'a'
const feelingWords = ['happy', 'sad', 'weepy', 'sleepy', 'rainy'];
const includesYAndA = feelingWords.filter(
  (word) => word.includes('y') || word.includes('a')
);
console.log(includesYAndA);
console.log('\n');

console.log('Program 10: ');
//numbers between 20 to 40
const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];
const betweenTwentyToForty = newNums.filter((num) => num > 20 && num < 40);
console.log(betweenTwentyToForty);
console.log('\n');
