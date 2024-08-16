console.log('Program 1: ');
//array of objects into an obj
const data = [
  { key: 'item', value: 'Pencil' },
  { key: 'price', value: 250 },
  { key: 'inStock', value: true },
];
const intoObj = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(intoObj);
console.log('\n');

console.log('Program 2: ');
//convert array of objs into array of colors
const students = [
  { item: 'Pen', color: 'blue' },
  { item: 'Pen', color: 'black' },
  { item: 'Pen', color: 'red' },
];
const colorsArray = students.reduce((acc, curr) => {
  acc.push(curr.color);
  return acc;
}, []);
console.log(colorsArray);
console.log('\n');

console.log('Program 3: ');
//array of objs into array of cities
const countries = [
  { item: 'Car', manufacturingCity: 'New York' },
  { item: 'Car', manufacturingCity: 'Los Angeles' },
  { item: 'Car', manufacturingCity: 'Chicago' },
];
const citiesArray = countries.reduce((acc, curr) => {
  acc.push(curr.manufacturingCity);
  return acc;
}, []);
console.log(citiesArray);
console.log('\n');

console.log('Program 4: ');
//array of objs into array of fruits
const groceryItems = [
  { item: 'Fruit', name: 'Apple' },
  { item: 'Fruit', name: 'Banana' },
  { item: 'Fruit', name: 'Orange' },
];
const fruitsArray = groceryItems.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);
console.log(fruitsArray);
console.log('\n');

console.log('Program 5: ');
//array of obj into obj
const details = [
  { key: 'category', value: 'Electronics' },
  { key: 'rating', value: 4.5 },
  { key: 'available', value: true },
];
const itemObj = details.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(itemObj);
