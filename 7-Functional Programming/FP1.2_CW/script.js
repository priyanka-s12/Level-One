//map() with array of objects, object
//array of objects/ object
//extract only names of array of objects
//map() runs on array
const students = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 27 },
  { name: 'Charlie', age: 25 },
];
const names = students.map((student) => student.name);
console.log(names);

//adding grade property/  key-val to each object
//round bracket as return object, spread operator duplicates array (ES6)
const studentsWithGrades = students.map((student) => ({
  ...student,
  grade: 'A',
}));
console.log('Students with grades: ', studentsWithGrades);
// console.log('Original Array: ', students)

//calculate BMI of each person
const people = [
  { name: 'Alice', weight: 60, height: 1.65 },
  { name: 'Bob', weight: 70, height: 1.75 },
  { name: 'Charlie', weight: 68, height: 1.8 },
];

const peopleWithBMI = people.map((person) => ({
  ...person,
  bmi: (person.weight / person.height ** 2).toFixed(2),
}));
console.log('People with BMI: ', peopleWithBMI);

//extract only values from object and put it into array
const person = { name: 'John', age: '30', city: 'New York' };
console.log(Object.values(person));

//convert values into uppercase
const dataInUppercase = Object.values(person).map((value) =>
  value.toUpperCase()
);
console.log(dataInUppercase);

//extract keys  of object
console.log(Object.keys(person));
