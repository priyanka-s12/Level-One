console.log('Program 1: ');
//extract titles
const books = [
  { title: 'The Catcher in the Rye', author: 'J.D.Salinger' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
];

const titles = books.map((book) => book.title);
console.log(titles);
console.log('\n');

console.log('Program 2: ');
//convert only names to uppercase
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'kiwi', color: 'brown' },
];

const namesInUppercase = fruits.map((fruit) => ({
  ...fruit,
  name: fruit.name.toUpperCase(),
}));
console.log(namesInUppercase);
console.log('\n');

console.log('Program 3: ');
//increase salaries of each employee by 10%
const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 70000 },
];

const increasedSalaryArray = employees.map((emp) => ({
  ...emp,
  salary: (emp.salary + emp.salary * 0.1).toFixed(2),
}));
console.log(increasedSalaryArray);
console.log('\n');

console.log('Program 4: ');
//apply 20% discount on prices of each product
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 },
  { name: 'Headphone', price: 100 },
];

const discountedPriceArray = products.map((product) => ({
  ...product,
  price: product.price - product.price * 0.2,
}));
console.log(discountedPriceArray);
console.log('\n');

console.log('Program 5: ');
//convert celcius temp into fahrenheit
const cities = [
  { name: 'New York', temperature: 25 },
  { name: 'Los Angeles', temperature: 30 },
  { name: 'Chicago', temperature: 20 },
];

const convertedIntoFahreinheit = cities.map((city) => ({
  ...city,
  temperature: city.temperature * (9 / 5) + 32,
}));
console.log(convertedIntoFahreinheit);
console.log('\n');

console.log('Program 6: ');
//calcaulate annual salary with bonus $500
const teachers = [
  { name: 'Olivia', monthlySalary: 4500 },
  { name: 'Paul', monthlySalary: 5500 },
  { name: 'rachcel', monthlySalary: 5000 },
];

const annualSalary = teachers.map((teacher) => ({
  name: teacher.name,
  annualIncome: teacher.monthlySalary * 12 + 500,
}));
console.log(annualSalary);
console.log('\n');

console.log('Progrm 7: ');
//calcaulate population density, print only country name and population density
const countries = [
  { name: 'USA', population: 331000000, landArea: 9833517 },
  { name: 'India', population: 1393000000, landArea: 2973190 },
  { name: 'Brazil', population: 213993437, landArea: 8515767 },
];

const populationDensityArray = countries.map((country) => ({
  name: country.name,
  populationDensity: country.population / country.landArea,
}));
console.log(populationDensityArray);
