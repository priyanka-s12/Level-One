console.log('Program 1: ');
const sumAndDifference = (numbersArr) => {
  const [a, b] = numbersArr;
  return `Sum: ${a + b}, Difference: ${a - b}`;
};
console.log(sumAndDifference([5, 3]));
console.log(sumAndDifference([10, 7]));
console.log('\n');

//rest operator, destructuring usage
console.log('Program 2: ');
const extractFirstAndlast = (str) => {
  const [first, ...last] = str;
  return `First character: ${first}, Last character: ${last[last.length - 1]}`;
};
console.log(extractFirstAndlast('hello'));
console.log(extractFirstAndlast('world'));
console.log('\n');

//destructuring
console.log('Program 3: ');
const calculateRectangleArea = (rectObj) => {
  const { length, width } = rectObj;
  return `The area of rectangle: ${length * width}`;
};
console.log(calculateRectangleArea({ length: 5, width: 3 }));
console.log(calculateRectangleArea({ length: 8, width: 4 }));
console.log('\n');

console.log('Program 4: ');
const getFirstTwoColors = (colorsArr) => {
  const [one, two] = colorsArr;
  return `The first two colors are: ${one} and ${two}`;
};
console.log(getFirstTwoColors(['red', 'blue', 'green', 'yellow']));
console.log(getFirstTwoColors(['orange', 'purple', 'pink']));
console.log('\n');

//nested object
console.log('Program 5: ');
const extractNestedInfo = (obj) => {
  const {
    data: { name, age, country },
  } = obj;
  return `${name} is ${age} years old and lives in ${country}.`;
};
console.log(
  extractNestedInfo({ data: { name: 'John', age: 35, country: 'USA' } })
);
console.log(
  extractNestedInfo({ data: { name: 'Emma', age: 28, country: 'Canada' } })
);
console.log('\n');

console.log('Program 6: ');
const productAndDifference = (numbersArray) => {
  const [first, second, third] = numbersArray;
  return `Product and Difference: ${first * second - third}`;
};
console.log(productAndDifference([5, 3, 5, 6]));
console.log(productAndDifference([10, 7, 35, 30]));
console.log('\n');

console.log('Program 7: ');
const extractData = (productObj) => {
  const {
    product: { itemName, description, manufacturingCountry },
  } = productObj;
  return `Item Name: ${itemName}, Description: ${description}, Manufacturing Country: ${manufacturingCountry}`;
};
console.log(
  extractData({
    id: 1,
    product: {
      itemName: 'Pencil',
      description: 'Extra Dark Pencil',
      manufacturingCountry: 'USA',
    },
  })
);
console.log(
  extractData({
    id: 2,
    product: {
      itemName: 'Sharpener',
      description: 'Faber Castell Premium',
      manufacturingCountry: 'Germany',
    },
  })
);
