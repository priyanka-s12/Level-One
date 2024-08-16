//reduce() of array
//return single value like total, sum etc

//traditional way
const numbers = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

const sumOfNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumOfNumbers);

//concatenate into single string
const stringsArray = ['Hello', ' World', '!'];
const combinedStrings = stringsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  ''
);
console.log(combinedStrings);

//find the maximum number in an array
const numbersArray = [10, 5, 8, 20, 15];
//let highest = numbersArray[0]
const maxNumber = numbersArray.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbersArray[0]
);
// const maxNumber = numbersArray.reduce((acc, curr) => {
//   if(curr > acc){
//     console.log('acc: ', acc, 'curr: ', curr)
//     acc = curr
//   }
//   else{
//     console.log('acc: ',  acc, 'curr: ', curr)
//     acc = acc
//   }
//   return acc
// }, numbersArray[0])
console.log(maxNumber);

//count the occurrence of word in array and return object
const fruits = ['apple', 'banana', 'apple', 'orange', 'kiwi', 'kiwi'];
//output -{apple: 2, banana: 1, orange: 1, kiwi: 2} i.e. object in key-value pair
const wordCount = fruits.reduce((accumulator, currentValue) => {
  //dynamically place key in object acc[curr]
  accumulator[currentValue] = accumulator[currentValue]
    ? accumulator[currentValue] + 1
    : 1;

  // accumulator[currentValue] = accumulator[currentValue] ? accumulator[currentValue]+1 : accumulator[currentValue] = 1

  // accumulator[currentValue] = (accumulator[currentValue] || 0) +1
  //initial value 0, here we write acc[curr] only twice -> if no exists, add 1, not exists, initialize 0 then add 1
  // console.log('acc: ', accumulator, 'curr: ', currentValue)
  return accumulator;
}, {});
console.log(wordCount);
