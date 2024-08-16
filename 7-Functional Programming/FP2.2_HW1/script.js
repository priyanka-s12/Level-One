//filter out means remove / object should not be present in the new array
console.log('Program 1: ');
//filter out means remove
//filter out the students with a grade lower than 70%
const students = [
  { name: 'Alice', grade: 80 },
  { name: 'Bob', grade: 65 },
  { name: 'Charlie', grade: 90 },
];

const filterStudents = students.filter((student) => student.grade > 70);
console.log(filterStudents);
console.log('\n');

console.log('Program 2: ');
//filter out the products with a price higher than $1000
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 500 },
];
const filterProducts = products.filter((product) => product.price < 1000);
console.log(filterProducts);
console.log('\n');

console.log('Program 3: ');
//filter out the employees with a salary lower than $50,000
const employees = [
  { name: 'Alice', salary: 60000 },
  { name: 'Bob', salary: 45000 },
  { name: 'Charlie', salary: 70000 },
];
const filterEmployees = employees.filter((emp) => emp.salary > 50000);
console.log(filterEmployees);
console.log('\n');

console.log('Program 4: ');
// filter out movies with a rating lower than 7.0
const movies = [
  { title: 'Inception', rating: 8.8 },
  { title: 'Interstellar', rating: 8.6 },
  { title: 'The Dark Knight', rating: 9.0 },
];
const filterMovies = movies.filter((movie) => movie.rating > 7.0);
console.log(filterMovies);
console.log('\n');

console.log('Program 5: ');
// filter out the cars older than 5 years
const cars = [
  { brand: 'Toyota', year: 2018 },
  { brand: 'Honda', year: 2019 },
  { brand: 'Ford', year: 2010 },
];
const filterCars = cars.filter(
  (car) => car.year >= new Date().getFullYear() - 5
);
console.log(filterCars);
console.log('\n');

console.log('Program 6: ');
//filter out the  students with a GPA lower than 3.5
const studentsData = [
  { name: 'Alice', gpa: 3.8 },
  { name: 'Bob', gpa: 3.2 },
  { name: 'Charlie', gpa: 3.9 },
];
const filterStudentsData = studentsData.filter((student) => student.gpa > 3.5);
console.log(filterStudentsData);
console.log('\n');

console.log('Program 7: ');
//filter out the fruits with a price higher than $2.00 per pound
const fruits = [
  { name: 'Apple', pricePerPound: 1.5 },
  { name: 'Banana', pricePerPound: 2.2 },
  { name: 'Orange', pricePerPound: 1.8 },
];
const filterFruits = fruits.filter((fruit) => fruit.pricePerPound < 2);
console.log(filterFruits);
console.log('\n');

console.log('Program 8: ');
//filter out the employees who are not currently employed
const employeesData = [
  { name: 'Alice', employed: true },
  { name: 'Bob', employed: false },
  { name: 'Charlie', employed: true },
];
const filterEmployessData = employeesData.filter(
  (emp) => emp.employed === true
);
console.log(filterEmployessData);
console.log('\n');

console.log('Program 9: ');
// filter out the products that are not in stock
const productsData = [
  { name: 'Laptop', inStock: true },
  { name: 'Smartphone', inStock: false },
  { name: 'Tablet', inStock: true },
];
const filterProductsData = productsData.filter(
  (product) => product.inStock === true
);
console.log(filterProductsData);
console.log('\n');

console.log('Program 10: ');
// filter out the laptops with a screen size less than 15 inches
const laptops = [
  { brand: 'Dell', screenSize: 14 },
  { brand: 'HP', screenSize: 15.6 },
  { brand: 'Lenovo', screenSize: 13 },
  { brand: 'Acer', screenSize: 17 },
];
const filterLaptops = laptops.filter((laptop) => laptop.screenSize > 15);
console.log(filterLaptops);
