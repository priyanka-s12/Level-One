console.log('Program 1: ');
//add new property whether passed or failed
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 55 },
  { name: 'Charlie', score: 75 },
];

const resultantArray = students.map((student) => ({
  ...student,
  passed: student.score > 60 ? true : false,
}));
console.log(resultantArray);
console.log('\n');

console.log('Program 2: ');
//convert song duration (seconds) to minutes
const songs = [
  { title: 'Bohemian Rhapsody', duration: 367 },
  { title: 'Hotel California', duration: 420 },
  { title: 'Stairway to Heaven', duration: 482 },
];

const songInMinutes = songs.map((song) => {
  const minutes = Math.floor(song.duration / 60);
  const extraSeconds = song.duration % 60;
  return { ...song, duration: `${minutes}:${extraSeconds}` };
});
console.log(songInMinutes);
console.log('\n');

console.log('Program 3: ');
const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 70000 },
];

const annualIncomeArray = employees.map((emp) => ({
  ...emp,
  annualIncome: emp.salary * 12,
}));
console.log(annualIncomeArray);
console.log('\n');

console.log('Program 4: ');
const newStudents = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 25 },
];

const isAdultOrMinor = newStudents.map((student) => ({
  ...student,
  clasification: student.age >= 18 ? 'adult' : 'minor',
}));
console.log(isAdultOrMinor);
console.log('\n');

console.log('Program 5: ');
//add $ sign to slaries
const employeesArray = [
  { name: 'Emily', salary: 60000 },
  { name: 'David', salary: 45000 },
  { name: 'Grace', salary: 75000 },
];

const addDollarSign = employeesArray.map((emp) => ({
  ...emp,
  salary: `$${emp.salary}`,
}));
console.log(addDollarSign);
console.log('\n');

console.log('Program 6: ');
//whether product expensive or affordable
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 50 },
  { name: 'Smartphone', price: 800 },
];

const addLabel = products.map((product) => ({
  name: product.name,
  label: product.price >= 100 ? 'expensive' : 'affordable',
}));
console.log(addLabel);
console.log('\n');

console.log('Program 7: ');
const books = [
  { title: 'The Catcher in the Rye', year: 1951 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  { title: 'The Hunger Games', year: 2008 },
];

const booksWithCategories = books.map((book) => ({
  title: book.title,
  category: book.year >= 2000 ? 'modern' : 'classic',
}));
console.log(booksWithCategories);
console.log('\n');

console.log('Program 8: ');
const developers = [
  { name: 'John', hourlyRate: 40, hoursPerWeek: 30 },
  { name: 'Lisa', hourlyRate: 50, hoursPerWeek: 35 },
  { name: 'Mike', hourlyRate: 45, hoursPerWeek: 40 },
];

const developersWithAnnualIncome = developers.map((developer) => ({
  name: developer.name,
  annualIncome: developer.hourlyRate * developer.hoursPerWeek * 50,
}));
console.log(developersWithAnnualIncome);
console.log('\n');

console.log('Program 9: ');
const salesReps = [
  { name: 'David', monthlyCommission: 8000 },
  { name: 'Helen', monthlyCommission: 10000 },
  { name: 'Ivan', monthlyCommission: 6000 },
];

const salesRepsWithAnnualIncome = salesReps.map((salesRep) => ({
  name: salesRep.name,
  annualIncome: salesRep.monthlyCommission * 12 + 50000,
}));
console.log(salesRepsWithAnnualIncome);
console.log('\n');

console.log('Program 10: ');
const studentsArray = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 60 },
  { name: 'Charlie', score: 92 },
];

const addGrade = studentsArray.map((student) => {
  const grade =
    student.score >= 90
      ? 'A'
      : student.score >= 80
      ? 'B'
      : student.score >= 70
      ? 'C'
      : student.score >= 60
      ? 'D'
      : 'F';
  return { name: student.name, grade: grade };
});
console.log(addGrade);
