console.log('Program 1: ');
//function should return a new array containing only the books from the "Fantasy" genre
const books = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
  },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Drama' },
  { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
];
const fantasyBooks = books.filter((book) => book.genre === 'Fantasy');
console.log(fantasyBooks);
console.log('\n');

console.log('Program 2: ');
//filter out the movies released before 2010, with a rating less than 8.0, and not in the "Action" or "Adventure" genre
const movies = [
  { title: 'Inception', year: 2010, rating: 8.8, genre: 'Sci-Fi' },
  { title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action' },
  { title: 'Interstellar', year: 2014, rating: 8.6, genre: 'Sci-Fi' },
  { title: 'Tripple Frontier', year: 2023, rating: 9.0, genre: 'Action' },
  { title: 'Jurassic Park', year: 1993, rating: 8.1, genre: 'Adventure' },
];
const moviesArray = movies.filter(
  (movie) =>
    movie.year > 2010 &&
    movie.rating > 8.0 &&
    (movie.genre === 'Action' || movie.genre === 'Adventure')
);
console.log(moviesArray);
console.log('\n');

console.log('Program 3: ');
//filter out the restaurants with less than 4 stars, not serving Italian cuisine, and not open on Sundays
const restaurants = [
  {
    name: 'Pasta Paradise',
    stars: 4.5,
    cuisine: 'Italian',
    openOnSundays: false,
  },
  {
    name: 'Sushi Sensation',
    stars: 3.8,
    cuisine: 'Japanese',
    openOnSundays: true,
  },
  {
    name: 'Burger Binge',
    stars: 4.2,
    cuisine: 'American',
    openOnSundays: true,
  },
  { name: 'Nasi', stars: 4.5, cuisine: 'Italian', openOnSundays: true },
];
const resultantArray = restaurants.filter(
  (restaurant) =>
    restaurant.stars > 4 &&
    restaurant.cuisine === 'Italian' &&
    restaurant.openOnSundays
);
console.log(resultantArray);
console.log('\n');

console.log('Program 4: ');
//function should return new array with only names containing bread
const products = [
  { name: 'Bread', price: 480, quantity: 3 },
  { name: 'Clips', price: 200, quantity: 5 },
  { name: 'green Bread Knife', price: 3077, quantity: 1 },
  { name: 'Slipper', price: 150, quantity: 2 },
];
// const nameBreadArray = products.filter(product => product.name.includes('Bread')).map(product => product.name)
// console.log(nameBreadArray)
const nameBreadArray = products.reduce((acc, curr) => {
  curr.name.includes('Bread') ? acc.push(curr.name) : curr.name;
  return acc;
}, []);
console.log(nameBreadArray);
console.log('\n');

console.log('Program 5: ');
//calculate and add a new property indicating whether their salary is above or below the average salary of all employees using .map(). Use .reduce() to calculate the average salary
const employees = [
  { name: 'David', salary: 60000 },
  { name: 'Emma', salary: 75000 },
  { name: 'Alex', salary: 90000 },
  { name: 'Sophie', salary: 55000 },
];
const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);
// console.log(totalSalary)
const avgSalary = totalSalary / employees.length;
// console.log(avgSalary)
const empArray = employees.map((emp) => ({
  ...emp,
  aboveAverage: emp.salary > avgSalary,
}));
console.log(empArray);
console.log('\n');

console.log('Program 6: ');
//Find the person who is the most active in the community and spends most of the time in it using reduce() method. - nested array
const community = [
  { name: 'Raju', role: 'student', hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: 'Aakash', role: 'mentor', hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: 'Ramesh', role: 'student', hours: [1, 2, 3, 1, 2, 3, 3] },
  { name: 'Jiten', role: 'TA', hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: 'Harsh', role: 'student', hours: [1, 7, 3, 2, 2, 3, 0] },
  { name: 'Akshay', role: 'student', hours: [1, 6, 3, 1, 2, 3, 0] },
  { name: 'Rohan', role: 'mentor', hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: 'Mohan', role: 'student', hours: [1, 8, 3, 0, 2, 3, 0] },
];

// assume most active in 0th index
const mostActive = community.reduce((mostActivePerson, currentPerson) => {
  const currentPersonHours = currentPerson.hours.reduce(
    (acc, curr) => acc + curr,
    0
  );
  // console.log('current: ', currentPersonHours)

  const mostActivePersonHour = mostActivePerson.hours.reduce(
    (acc, curr) => acc + curr,
    0
  );
  // console.log('most active: ', mostActivePersonHour)

  mostActivePerson =
    currentPersonHours > mostActivePersonHour
      ? currentPerson
      : mostActivePerson;

  return mostActivePerson;
}, community[0]);
console.log(mostActive);

// const mostActive = community.reduce((mostActivePerson, currentPerson) => {
//     const totalHours = currentPerson.hours.reduce((acc, curr) => acc + curr, 0);
//     // console.log(totalHours);
//     if (totalHours > mostActivePerson.totalHours) {
//       return { ...currentPerson, totalHours };
//     } else {
//       return mostActivePerson;
//     }
//   },
//   { name: "", role: "", hours: [], totalHours: 0 },
// );
// console.log(mostActive);
// //using object desctructing with rest operator
// const {totalHours, ...result} = mostActive
// console.log(result)

console.log('\n');

console.log('Program 7: ');
//Give the tag of regular to students who are active in the community and spends more than 20 hours a week - nested array
const communityData = [
  { name: 'Raju', role: 'student', hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: 'Aakash', role: 'mentor', hours: [1, 2, 3, 4, 5, 6, 7] },
  { name: 'Ramesh', role: 'student', hours: [4, 5, 6, 4, 5, 6, 0] },
  { name: 'Jiten', role: 'TA', hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: 'Harsh', role: 'student', hours: [7, 8, 9, 7, 8, 9, 0] },
  { name: 'Akshay', role: 'student', hours: [1, 3, 5, 7, 9, 0, 2] },
  { name: 'Rohan', role: 'mentor', hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: 'Mohan', role: 'student', hours: [4, 6, 8, 0, 1, 9, 2] },
];

// const activeStudents = communityData.reduce((accumulator, currentStudent) => {
//   const spendingHours = currentStudent.hours.reduce((acc, curr) => curr + acc ,0);
//   // console.log(spendingHours, currentStudent.name)

//   if(spendingHours > 20 && currentStudent.role === 'student'){
//     accumulator.push({...currentStudent, tag: 'Regular'})
//   }
//   else{
//     accumulator.push({...currentStudent})
//   }
//   return accumulator;
// }, []);

// console.log(activeStudents);

const activeStudents = communityData.map((person) => {
  const spendingHours = person.hours.reduce((acc, curr) => acc + curr, 0);
  // console.log(spendingHours)

  if (spendingHours > 20 && person.role === 'student') {
    return { ...person, tag: 'Regular' };
  }
  return person;
});
console.log(activeStudents);
