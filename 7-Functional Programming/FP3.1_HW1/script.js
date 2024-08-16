console.log('Program 1: ');
//find the longest word
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const longestWord = words.reduce(
  (acc, curr) => (curr.length > acc.length ? curr : acc),
  words[0]
);
// const longestWord = words.reduce((acc, curr) => {
//   curr.length > acc.length ? acc = curr : acc
//   console.log('curr: ', curr,  'acc: ', acc)
//   return acc
// }, words[0])
console.log(longestWord);
console.log('\n');

console.log('Program 2: ');
//find the minimum
const numbers = [10, 5, 8, 20, 15];
// const minNumber = numbers.reduce((acc, curr) =>{
//   curr < acc ? acc = curr : acc
//   return acc
// }, numbers[0])
const minNumber = numbers.reduce(
  (acc, curr) => (curr < acc ? curr : acc),
  numbers[0]
);
console.log(minNumber);
console.log('\n');

console.log('Program 3: ');
//find the total length of all strings
const wordsLength = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const totalLength = wordsLength.reduce((acc, curr) => curr.length + acc, 0);
console.log(totalLength);
console.log('\n');

console.log('Program 4: ');
//count the number of even numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const countEvenNumbers = nums.reduce((acc, curr) => {
//   if(curr % 2 === 0){
//     acc++
//     console.log('curr: ', curr, 'acc: ', acc)
//   }else{
//     acc
//     console.log('curr: ', curr, 'acc: ', acc)
//   }
//   return acc
//   }, 0)
const countEvenNumbers = nums.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + 1 : acc),
  0
);
console.log(countEvenNumbers);
console.log('\n');

console.log('Program 5: ');
//capitalize first letter of each word and concatenate them into single string
const wordsCaps = ['hello', 'world', 'how', 'are', 'you'];
// const combinedString = wordsCaps.reduce((acc, curr) => {
//   acc = acc + curr.charAt(0).toUpperCase() + curr.slice(1) + ' '
//   console.log('curr: ',  curr, 'acc: ', acc)
//   return acc
// }, '')
const combinedString = wordsCaps.reduce(
  (acc, curr) => acc + curr.charAt(0).toUpperCase() + curr.slice(1) + ' ',
  ''
);
console.log(combinedString);
console.log('\n');

console.log('Program 6: ');
//calculate average
const numsAvg = [10, 15, 20, 25, 30];
// const findAvg = numsAvg.reduce((acc, curr) => {
//   acc = acc + curr
//   console.log(acc)
//   return acc
// }, 0)
const findAvg = numsAvg.reduce((acc, curr) => acc + curr, 0);
console.log(findAvg / numsAvg.length);
console.log('\n');

console.log('Program 7: ');
//find sum of square of each num
const numbersArray = [1, 2, 3, 4, 5];
const sumOfSquare = numbersArray.reduce((acc, curr) => acc + curr ** 2, 0);
console.log(sumOfSquare);
console.log('\n');

console.log('Program 8: ');
//create obj with occurrence of words
const stationeryWords = [
  'pen',
  'notebook',
  'eraser',
  'notebook',
  'pencil',
  'notebook',
  'pencil',
];
const wordCount = stationeryWords.reduce((acc, curr) => {
  // acc[curr] = acc[curr] ? acc[curr]+1 : 1
  acc[curr] = (acc[curr] || 0) + 1;
  // console.log('curr: ',  curr, 'acc: ', acc)
  return acc;
}, {});
console.log(wordCount);
console.log('\n');

console.log('Program 9: ');
//occurrences of words but key should be first letter of each word
const wordsLetter = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const firstLetterKey = wordsLetter.reduce((acc, curr) => {
  // acc[curr.charAt(0)] = acc[curr.charAt(0)] ? acc[curr.charAt(0)]+1 : 1
  acc[curr.charAt(0)] = (acc[curr.charAt(0)] || 0) + 1;
  // console.log('curr: ', curr, 'acc: ', acc)
  return acc;
}, {});
console.log(firstLetterKey);
console.log('\n');

console.log('Program 10: ');
//product of positive numbers
const numPositive = [-2, 3, 4, -5, 6];
// const productOfPos = numPositive.reduce((acc, curr) => {
//   if(curr > 0){
//     acc = acc * curr
//   }
//   return acc
// }, 1)
const productOfPos = numPositive.reduce(
  (acc, curr) => (curr > 0 ? acc * curr : acc),
  1
);
console.log(productOfPos);
