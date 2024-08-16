//arrow function to return sum of all numbers in an array
const calculateSum = (numbersArray) => {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum = sum + numbersArray[i];
  }
  return sum;
};
console.log(calculateSum([1, 2, 3, 4, 5]));

//arrow function to reverse a string
const reverseString = (str) => {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  return reversedStr;
};
console.log(reverseString('hello'));
