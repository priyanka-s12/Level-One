console.log('Program 1: ');
const createPerson = (name, age) => {
  return { name, age };
};
console.log(createPerson('Alice', 25));
console.log(createPerson('Bob', 30));
console.log('\n');

console.log('Program 2: ');
//create an object with default values
const createFruit = (name = 'Apple', color = 'Red') => {
  return { name, color };
};
console.log(createFruit());
console.log(createFruit('Banana', 'Yellow'));
console.log('\n');

console.log('Program 3: ');
const createBookObj = (title, author, genre) => {
  return { title, author, genre };
};
console.log(createBookObj('The Great Gatsby', 'F.Scott Fitzgerald', 'Classic'));
console.log(createBookObj('The Beatles Anthology', 'The Beatles', 'Music'));
console.log('\n');

console.log('Program 4: ');
const createBook = (
  bookName = "The Hitchhiler's Guide to the Galaxy",
  author = 'Douglas Adams'
) => {
  return { bookName, author };
};
console.log(createBook());
console.log(createBook('A Suitable Boy', 'Vikram Seth'));
console.log('\n');

console.log('Program 5: ');
let aaloo = 1;
let bhaloo = 2;
const obj = (aaloo, bhaloo) => {
  return { aaloo, bhaloo };
};
console.log(obj(aaloo, bhaloo));
console.log('\n');

console.log('Program 6: ');
const calculateArea = (length, width) => {
  const area = length * width;
  return { length, width, area };
};
// const calculateArea = (length, width, area = length * width) => {
//   return {length, width, area}
// }
console.log(calculateArea(5, 8));
console.log('\n');

//takes two arrays and returns an object with properties for each array
console.log('Program 7: ');
const printObjOfArrays = (arr1, arr2) => {
  return { arr1, arr2 };
};
console.log(printObjOfArrays([1, 2, 3], ['a', 'b']));
console.log('\n');

console.log('Program 8: ');
const createTriangle = (side1, side2, side3) => {
  const perimeter = side1 + side2 + side3;
  return { side1, side2, side3, perimeter };
};
console.log(createTriangle(3, 4, 5));
console.log('\n');

console.log('Program 9: ');
const createPoint = (x, y) => {
  return { x, y };
};
console.log(createPoint(3, 7));
console.log('\n');

console.log('Program 10: ');
const createEmail = (username, domain) => {
  const fullAddress = username + '@' + domain;
  return { username, domain, fullAddress };
};
console.log(createEmail('john.doe', 'example.com'));
