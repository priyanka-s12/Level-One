//spread operator (... like rest operator but usage different)

//duplicate an array
//traditional way
let numArr = [51, 52, 53];
let newNumArr = numArr;

newNumArr.push(54);
//if add new num to duplicated array, original array also get affected
// console.log('Original Array', numArr)
// console.log('Duplicated Array: ', newNumArr)

//using spread operator, ES6 way
let numberArr = [1, 2, 3];
let newNumberArr = [...numberArr];
newNumberArr.push(4);
//even if add new num to duplicated array, original array won't get affected
console.log('Original Array: ', numberArr);
console.log('Duplicated Array: ', newNumberArr);
console.log('\n');

const duplicatedArray = (arr) => [...arr];
console.log(duplicatedArray(['apple', 'banana']));
console.log('\n');

//adding new element to an array
const addNewElement = (arr, element) => [...arr, element];
console.log(addNewElement(['Kiwi', 'Orange'], 'Apple'));
console.log('\n');

//combining two arrays
const combineArray = (arr1, arr2) => [...arr1, ...arr2];
console.log(combineArray([11, 12, 13], [14, 15, 16]));
console.log('\n');

//coping an array of objects
//then add another property to an object - dynamically adding key use []
const copyObject = (obj, key, value) => ({ ...obj, [key]: value });
console.log(copyObject({ name: 'Alice', age: 20 }, 'favColor', 'blue'));
