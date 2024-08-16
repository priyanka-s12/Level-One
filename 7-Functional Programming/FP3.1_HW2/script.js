console.log('Program 1: ');
//find total length of all strings
const stationeryWords = [
  'pen',
  'notebook',
  'eraser',
  'notebook',
  'pencil',
  'notebook',
  'pencil',
];
const totalLength = stationeryWords.reduce((acc, curr) => acc + curr.length, 0);
console.log(totalLength);
console.log('\n');

console.log('Program 2: ');
//sum of all even numbers
const numbersArray = [1, 2, 3, 4, 5, 6];
const sumOfEvenNum = numbersArray.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
  0
);
console.log(sumOfEvenNum);
console.log('\n');

console.log('Program 3: ');
//count odd numbers
const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];
const countOddNum = numsArr.reduce(
  (acc, curr) => (curr % 2 !== 0 ? acc + 1 : acc),
  0
);
console.log(countOddNum);
console.log('\n');

console.log('Program 4: ');
//create an object with the count of even and odd numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenOdd = nums.reduce((acc, curr) => {
//   curr % 2 === 0 ? acc['even'] = (acc['even'] || 0) + 1 : acc['odd'] = (acc['odd'] || 0) + 1
//     console.log('curr: ', curr, 'acc: ', acc)
//   return acc
// }, {})

// const evenOdd = nums.reduce((acc, curr) => {
//   curr % 2 === 0 ? acc.even = acc.even + 1 : acc.odd = acc.odd + 1
//   console.log('curr: ', curr, 'acc: ', acc)
//   return acc
// }, {even: 0, odd: 0})

const evenOdd = nums.reduce(
  (acc, curr) => {
    curr % 2 === 0
      ? (acc['even'] = acc['even'] + 1)
      : (acc['odd'] = acc['odd'] + 1);
    // console.log('curr: ', curr, 'acc: ', acc)
    return acc;
  },
  { even: 0, odd: 0 }
);
console.log(evenOdd);
console.log('\n');

console.log('Program 5: ');
//create an object with the count of positive and negative numbers
const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
const posNegNums = allNumns.reduce(
  (acc, curr) => {
    curr > 0 ? acc['pos']++ : acc['neg']++;
    // console.log('curr: ', curr, 'acc: ', acc)
    return acc;
  },
  { pos: 0, neg: 0 }
);
console.log(posNegNums);
console.log('\n');

console.log('Program 6: ');
//the product of negative numbers
const numPositive = [-2, 3, 4, 0, -5, 6];
const productOfNeg = numPositive.reduce(
  (acc, curr) => (curr < 0 ? acc * curr : acc),
  1
);
console.log(productOfNeg);
console.log('\n');

console.log('Program 7: ');
//capitalize all the letter of each word and concatenate them into a single string
const wordsCaps = ['reduce', 'method', 'needs', 'a', 'lot', 'of', 'practice'];
// const combinedString = wordsCaps.reduce((acc, curr) => {
//   acc = acc + curr.toUpperCase() + ' '
//   return acc
// }, '')
const combinedString = wordsCaps.reduce(
  (acc, curr) => acc + curr.toUpperCase() + ' ',
  ''
);
console.log(combinedString);
console.log('\n');

console.log('Program 8: ');
//create an object with the count of positive even numbers and count of all the other numbers
const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];
// const countPosNum = allNumsArr.reduce((acc, curr) => {
//   if(curr > 0 && curr % 2 === 0){
//     acc['posEven']++
//   }else{
//     acc['others']++
//   }
//   return acc
// }, {'posEven': 0, 'others': 0})

const countPosNum = allNumsArr.reduce(
  (acc, curr) => {
    curr > 0 && curr % 2 === 0 ? acc['posEven']++ : acc['others']++;
    return acc;
  },
  { posEven: 0, others: 0 }
);
console.log(countPosNum);
console.log('\n');

console.log('Program 9: ');
//the sum of all negative odd number
const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];
const sumOfNeg = numbersArr.reduce(
  (acc, curr) => (curr < 0 && curr % 2 !== 0 ? acc + curr : acc),
  0
);
console.log(sumOfNeg);
console.log('\n');

console.log('Program 10: ');
//concatenate all letters into a single word
const letters = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't'];
const concatenate = letters.reduce((acc, curr) => acc + curr, '');
console.log(concatenate);
