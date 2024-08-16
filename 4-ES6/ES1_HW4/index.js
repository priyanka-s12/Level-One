console.log('Question 1: ');

const car = {
  brand: 'Toyota',
  model: 'Corolla',
};

console.log(`1.1: ${car.brand}`);
console.log(`1.2: ${car.model}`);
car.brand = 'Honda';
console.log('1.4: ', car);
car.year = 2022;
car.color = 'Blue';
console.log(`1.6: All properties of 'car' object: `);
for (property in car) {
  console.log(`${property} : ${car[property]}`);
}
console.log('\n');

console.log('Question 2: ');

const citizen = {
  age: 65,
  name: 'Ramesh Kumar',
  occupation: 'Retired',
};
citizen.age = 68;
console.log('2.1: Updated age: ', citizen.age);
citizen.age = citizen.age + 2;
console.log('2.2: Updated age after adding 2: ', citizen.age);
citizen.city = 'Delhi';
console.log(`All properties of 'citizen' object: `);
for (property in citizen) {
  console.log(property + ': ' + citizen[property]);
}
console.log('\n');

console.log('Question 3: ');
const person = {
  name: 'Aman',
  age: 62,
};
person.bp = 'Normal';
console.log('3.1: Person Object: ', person);
console.log('3.2: ');
if (person.age > 60 && person.bp === 'Normal') {
  console.log('Fit to travel.');
} else {
  console.log('Not fit to travel');
}
