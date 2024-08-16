//convert array of objects to object
const data = [
  { key: 'name', value: 'John' },
  { key: 'age', value: 25 },
  { key: 'city', value: 'London' },
];
//o/p - {name: 'John', age: 25, city: 'London'}
const transformedData = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(transformedData);

//nested array into single array - flatten an array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray);

//only extract grade, array of objects to array
const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'John', grade: 'C' },
];
//o/p ['A', 'B', 'C']
const grades = students.reduce((acc, curr) => {
  acc.push(curr.grade);
  return acc;
}, []);
console.log(grades);
