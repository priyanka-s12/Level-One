const arr = [5, 12, 7, 25, 18, 3];

console.log('Program 1: ');
function printArray() {
  console.log('Original Array: ', arr);
}
printArray();
console.log('\n');

console.log('Program 2: ');
const newArr = [];
function addTen() {
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 10);
  }
  return newArr;
}
console.log('Added 10 to each number: ', addTen());
console.log('\n');

console.log('Program 3: ');
function convertOddToEven() {
  let convertedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      convertedArr.push(arr[i] + 1);
    } else {
      convertedArr.push(arr[i]);
    }
  }
  return convertedArr;
}
console.log(
  'Array with odd numbers converted to even number: ',
  convertOddToEven()
);
console.log('\n');

console.log('Program 4: ');
function divisibleByTwo() {
  let numberDivByTwoArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      numberDivByTwoArr.push(arr[i]);
    }
  }
  return numberDivByTwoArr;
}
console.log('Numbers divisible by 2: ', divisibleByTwo());
console.log('\n');

console.log('Program 5: ');
function sumOfNumbers() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log('Sum of all numbers in the array: ', sumOfNumbers());
console.log('\n');

console.log('Program 6: ');
function sumOfEvenAndOdd() {
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumOfEven = sumOfEven + arr[i];
    } else {
      sumOfOdd = sumOfOdd + arr[i];
    }
  }
  console.log('Sum of all even numbers: ', sumOfEven);
  console.log('\nSum of all odd numbers: ', sumOfOdd);
}

sumOfEvenAndOdd();
