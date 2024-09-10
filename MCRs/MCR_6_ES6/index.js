console.log('Program 1');
const calculateAverage = (a, b, c) => (a + b + c) / 3;
console.log(calculateAverage(1, 2, 3));

console.log('Program 2');
const multiplicationFunc = (a, b, c = 4) => a * b * c;
console.log(multiplicationFunc(3, 1));
console.log(multiplicationFunc(3, 10));

console.log('Program 3');
const combineWords = (...strings) => strings.join(' ');
console.log(combineWords('This', 'is', 'an', 'amazing', 'day'));

console.log('Program 4');
const combineArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(combineArrays([10, 20, 30], [40, 50, 60]));

console.log('Program 5');
const concatenateWithSeparator = (separator, ...str) => str.join(separator);
console.log(
  concatenateWithSeparator(
    '->',
    'Violet',
    'Indigo',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Red'
  )
);

console.log('Program 6');
const product = {
  title: 'iPhone',
  price: 5999,
  description: 'The iPhone is a smartphone developed by Apple',
};

const productDestructuring = (product) => {
  const { title, price, description } = product;
  console.log(title);
  console.log(price);
  console.log(description);
};

productDestructuring(product);

console.log('Program 7');
const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };

const isSportsCar = (car) => car.horsepower >= 300;
console.log(isSportsCar(car1)); // Expected Output: true
console.log(isSportsCar(car2)); // Expected Output: false

console.log('Program 8');
const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
  },
};

const getData = (person) => {
  const {
    name,
    address: { city, state },
  } = person;
  console.log(name);
  console.log(city);
};
getData(person);

console.log('Program 9');
const sumFirstElement = (first, ...rest) => first + rest[rest.length - 1];
console.log(sumFirstElement(1, 2, 3, 5)); // Expected Output: 6

console.log('Program 10');
const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' };
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' };

const personInfo = (person) => {
  const { name, age, occupation } = person;
  return `${name} is ${age} years old.`;
};

console.log(personInfo(person1)); // Expected output: "John is 25 years old."
console.log(personInfo(person2)); // Expected output: "Jane is 45 years old."

console.log('program 11');
const findPerson = (person, name) => {
  for (let i = 0; i < person.length; i++) {
    if (person[i].name === name) {
      return person[i];
    }
  }
  return 'Not Found';
};
console.log(
  findPerson(
    [
      { name: 'Amay', age: 25 },
      { name: 'Akhil', age: 25 },
    ],
    'Akhil'
  )
);

// Expected Output: { name: "Akhil", age: 25 }

console.log('Program 12');
const pickFirstAndSecond = ([first, second]) => ({ first, second });
console.log(pickFirstAndSecond(['orange', 'banana', 'apple']));
// Expected Output: {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(['red', 'blue', 'green']));
// Expected Output: {first: 'red', second: 'blue'}
