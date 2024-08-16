//map method of an array, charAt(), slice(), toUpperCase(), toString()
//map() - array method, takes callback function and returns new array, and original array won't changed, and don't need to use for loop to iterate over each element in the array
// creates a new array populated with the results of calling a provided function (callback function) on every element in the calling array.
//returns exact number of elements in array i.e. input array and output array length same

//traditional way - create empty array, write for loop, do operations and push the result into empty array

//multiplying array with 2
const numbers = [1, 2, 3, 4, 5];
const numbersMultipliedByTwo = numbers.map((num) => num * 2);
console.log(numbersMultipliedByTwo);
// console.log('Original array: ', numbers)

//doubling the array
const numbersArray = [2, 4, 5, 6];
const doubleNumbersInArray = numbersArray.map((num) => num * num);
console.log('Doubled Array: ', doubleNumbersInArray);

//capitalize first character of each word
const wordsArray = ['apple', 'mango', 'grapes'];
const capitalizeWordsArray = wordsArray.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
console.log(capitalizeWordsArray);

//change numbers array to string
const numericArray = [1, 2, 3, 4, 5];
const stringArray = numbersArray.map((num) => num.toString());
console.log('String array: ', stringArray);
