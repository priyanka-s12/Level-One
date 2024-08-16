//filter() of array, includes() string method
//traditional way - create empty array, write for loop, do operations, check condition using if and push the result into empty array
//same as map(), accepts callback function & returns new array but here new array length is different than input array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ['Apple', 'Mango', 'Banana', 'Orange'];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

//get an array with positive numbers
const numbersArray = [2, -7, 5, 7, -8, -6, 9];
const positiveNumbersArray = numbersArray.filter((num) => num > 0);
console.log(positiveNumbersArray);

//fruits that contain 'a' letter
const fruits = ['apple', 'kiwi', 'orange', 'grapes', 'melon'];
const fruitsContainingA = fruits.filter((fruit) => fruit.includes('a'));
console.log(fruitsContainingA);
//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false
