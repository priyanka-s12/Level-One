console.log('Program 1: ');
//array of objects into obj
const productInfo = [
  { key: 'name', value: 'Laptop' },
  { key: 'price', value: 12000 },
  { key: 'brand', value: 'Dell' },
];
const productObj = productInfo.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(productObj);
console.log('\n');

console.log('Program 2: ');
//array of obj to array of  universities
const colleges = [
  { item: 'Book', university: 'Harvard' },
  { item: 'Book', university: 'MIT' },
  { item: 'Book', university: 'Stanford' },
];
const universityArray = colleges.reduce((acc, curr) => {
  acc.push(curr.university);
  return acc;
}, []);
console.log(universityArray);
console.log('\n');

console.log('Program 3: ');
//array of objects into obj
const userPreferences = [
  { key: 'theme', value: 'Dark Mode' },
  { key: 'fontSize', value: 16 },
  { key: 'notifications', value: true },
];
const userPrefObj = userPreferences.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(userPrefObj);
console.log('\n');

console.log('Program 4: ');
//array of objects into obj
const continents = [
  { key: 'Asia', country: 'India' },
  { key: 'Europe', country: 'France' },
  { key: 'North America', country: 'USA' },
];
const obj = continents.reduce((acc, curr) => {
  acc[curr.key] = curr.country;
  return acc;
}, {});
console.log(obj);
console.log('\n');

console.log('Program 5: ');
//array of objects into obj
const information = [
  { key: 'city', value: 'New York' },
  { key: 'population', value: 8398748 },
  { key: 'area', value: 468.9 },
];
const infoObj = information.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(infoObj);
