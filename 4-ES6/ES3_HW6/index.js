console.log('Program 1: ');
const printTemperature = ({ location: city, temperature: temp }) =>
  `Location: ${city}, Temperature: ${temp} degree celsius`;

console.log(printTemperature({ location: 'New York', temperature: 15 }));
console.log(printTemperature({ location: 'London', temperature: 10 }));
console.log('\n');

console.log('Program 2: ');
const printFruit = ({
  fruitName: fruit,
  fruitColor: color,
  inStock: availability,
}) =>
  `Fruit Name: ${fruit}, Fruit Color: ${color}, Availability: ${availability}`;
console.log(
  printFruit({ fruitName: 'Apple', fruitColor: 'Red', inStock: true })
);
console.log(
  printFruit({ fruitName: 'Grapes', fruitColor: 'Green', inStock: false })
);
console.log('\n');

console.log('Program 3: ');
const printStudentScores = ([studentName, sub1, sub2, sub3]) =>
  `Student: ${studentName}, Scores: ${sub1}, ${sub2}, ${sub3}`;
console.log(printStudentScores(['Alice', 90, 85, 95]));
console.log(printStudentScores(['Bob', 80, 75, 85]));
console.log('\n');

console.log('Program 4: ');
const printProductDetails = ({ name: productName, price: productPrice }) =>
  `Product: ${productName}, Price: $${productPrice}`;
console.log(printProductDetails({ name: 'Laptop', price: 899 }));
console.log(printProductDetails({ name: 'Phone', price: 599 }));
console.log('\n');

console.log('Program 5: ');
const printPersonDetails = ({
  name: personName = 'Anonymous',
  age: personAge = 'Unknown',
}) => `Name: ${personName}, Age: ${personAge}`;
console.log(printPersonDetails({ name: 'John', age: 30 }));
console.log(printPersonDetails({}));
console.log('\n');

console.log('Program 6: ');
const printCityPopulation = ([
  city,
  { population: cityPopulation, country: country },
]) => `City: ${city}, Populatation: ${cityPopulation}, Country: ${country}`;
console.log(
  printCityPopulation(['New York', { population: 8623000, country: 'USA' }])
);
console.log(
  printCityPopulation(['Tokyo', { population: 37833000, country: 'Japan' }])
);
console.log('\n');

console.log('Program 7: ');
const printCarDetails = ([carName, { model: carModel, price: carPrice }]) =>
  `Name: ${carName}, Model: ${carModel}, Price: Rs. ${carPrice}`;
console.log(
  printCarDetails(['All-Terrain SUV', { model: 'SUV', price: 4500000 }])
);
console.log(
  printCarDetails(['GreenDrive Electric', { model: 'Electric', price: 500000 }])
);
console.log('\n');
