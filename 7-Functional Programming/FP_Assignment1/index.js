console.log('Program 1: ');
//use .map() to subtract the square of each number from that number - map with array
const numsArray = [10, 5, 8, 4, 6];
const resultantArray = numsArray.map((num) => num - num ** 2);
console.log(resultantArray);
console.log('\n');

console.log('Program 2: ');
//use .map() to double the negative numbers and then subtract it from the original number
const numbsArray = [3, -2, -5, 12, 8, -4, 7];
const posNumArray = numbsArray.map((num) => (num < 0 ? num - num * 2 : num));
console.log(posNumArray);
console.log('\n');

console.log('Program 3: ');
//use .map() to create an array with each sentence followed by the count of words in it
const sentencesArray = [
  'JavaScript is a powerful programming language.',
  'Web development involves frontend and backend technologies.',
  'Coding is a skill that can be learned and mastered over time.',
];
const count = sentencesArray.map(
  (sentence) => `${sentence} ${sentence.split(' ').length}`
);
console.log(count);
console.log('\n');

console.log('Program 4: ');
//extract the brands using .map()
const cars = [
  { brand: 'Toyota', model: 'Camry' },
  { brand: 'Honda', model: 'Accord' },
  { brand: 'Ford', model: 'Mustang' },
];
const brandsArray = cars.map((car) => car.brand);
console.log(brandsArray);
console.log('\n');

console.log('Program 5: ');
//extract the genres using .map()
const movies = [
  { title: 'Inception', genre: 'Sci-Fi' },
  { title: 'The Shawshank Redemption', genre: 'Drama' },
  { title: 'The Dark Knight', genre: 'Action' },
];
const genreArray = movies.map((movie) => movie.genre);
console.log(genreArray);
console.log('\n');

console.log('Program 6: ');
//increase the dimensions by 10% using .map() - array of objects
const furniture = [
  { type: 'Sofa', width: 200, height: 80 },
  { type: 'Table', width: 120, height: 60 },
  { type: 'Chair', width: 50, height: 45 },
];
const increaseDimensions = furniture.map((item) => ({
  ...item,
  width: (item.width + item.width * 0.1).toFixed(1),
  height: (item.height + item.height * 0.1).toFixed(1),
}));
console.log(increaseDimensions);
console.log('\n');

console.log('Program 7: ');
//add a new property indicating whether the product is affordable
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Smartphone', price: 800 },
  { name: 'Headphones', price: 50 },
  { name: 'Camera', price: 300 },
];
const isAffordable = products.map((product) => ({
  ...product,
  affordable: product.price <= 100,
}));
console.log(isAffordable);
console.log('\n');

console.log('Program 8: ');
//filter negative nos into new array
const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];
const negNumArray = numbers.filter((num) => num < 0 && num % 2 === 0);
console.log(negNumArray);
console.log('\n');

console.log('Program 9: ');
//filter the students who scored more than 70 in their exams, are active participants, and belong to either the "Math" or "Science" club
const students = [
  { name: 'Alice', score: 85, activeParticipant: true, club: 'Math' },
  { name: 'Bob', score: 55, activeParticipant: false, club: 'History' },
  { name: 'Charlie', score: 75, activeParticipant: true, club: 'Science' },
];
const studentArray = students.filter(
  (stud) =>
    (stud.score > 70 && stud.activeParticipant && stud.club === 'Math') ||
    stud.club === 'Science'
);
console.log(studentArray);
console.log('\n');

console.log('Program 10: ');
//filter the words that contain the letter 'a' and have more than 5 characters into a new array
const words = [
  'apple',
  'banana',
  'kiwi',
  'grape',
  'pear',
  'orange',
  'strawberry',
];
const moreThanFiveChar = words.filter(
  (word) => word.includes('a') && word.length > 5
);
console.log(moreThanFiveChar);
