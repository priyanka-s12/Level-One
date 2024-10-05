console.log('Program 1');
const strings = ['hello', 'world', 'javascript', 'openai', 'language'];

const reversed = strings.map((str) => str.split('').reverse().join(''));
console.log(reversed);

console.log('Program 2');
const phrases = ['hello', 'how are you', 'good morning', 'have a nice day'];

const addSymbol = phrases.map((phrase) => phrase + '!');
console.log(addSymbol);

console.log('Program 3');
const shoppingCart = {
  apple: 25,
  banana: 18,
  orange: 32,
};

const values = Object.values(shoppingCart);
const print = values.map((val) => 'Rs. ' + val);
console.log(print);

console.log('Program 4');
const products = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Phone' },
  { id: 103, name: 'Tablet' },
];

const idArray = products.map((product) => product.id);
console.log(idArray);

console.log('Program 5');
const temperatures = [-5, 10, -2, 15, -10, 5];

const filterTemp = temperatures.filter((temp) => temp < 0);
console.log(filterTemp);

console.log('Program 6');
const tasks = [
  { id: 1, title: 'Task 1', priority: 'high' },
  { id: 2, title: 'Task 2', priority: 'medium' },
  { id: 3, title: 'Task 3', priority: 'low' },
  { id: 4, title: 'Task 4', priority: 'high' },
];

const filterHighPriorityTasks = tasks.filter(
  (task) => task.priority === 'high'
);
console.log(filterHighPriorityTasks);

console.log('Program 7');
const sentences = [
  'JavaScript is a programming language.',
  'Python is also a programming language.',
  'JavaScript frameworks are popular.',
  'I love to learn new programming languages.',
];

const filterOnlyJavascript = sentences.filter((sentence) =>
  sentence.includes('JavaScript')
);
console.log(filterOnlyJavascript);

console.log('Program 8');
const students = [
  { name: 'Alice', GPA: 3.5 },
  { name: 'Bob', GPA: 2.8 },
  { name: 'Charlie', GPA: 3.2 },
  { name: 'David', GPA: 2.9 },
];

const filterStudents = students.filter((student) => student.GPA > 2.9);
console.log(filterStudents);

console.log('Program 9');
const words = ['apple', 'banana', 'kiwi', 'lime', 'grape'];
const longestWord = words.reduce(
  (acc, curr) => (curr.length > acc.length ? curr : acc),
  words[0]
);
console.log(longestWord);

console.log('Program 10');
const num = [10, 25, 8, 30, 15];
const highestValue = num.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  num[0]
);
console.log(highestValue);

console.log('Program 11');
const countries = [
  { country: 'USA', capital: 'Washington, D.C.' },
  { country: 'France', capital: 'Paris' },
  { country: 'Japan', capital: 'Tokyo' },
];

const singleObj = countries.reduce((acc, curr) => {
  acc[curr.country] = curr.capital;
  return acc;
}, {});
console.log(singleObj);

console.log('Program 12');
const books = [
  { title: 'Book 1', author: 'Alice' },
  { title: 'Book 2', author: 'Bob' },
  { title: 'Book 3', author: 'Charlie' },
  { title: 'Book 4', author: 'Anna' },
];

const filterBooks = books.filter((book) => book.author.startsWith('A'));
console.log(filterBooks);

console.log('Program 13');
const wordsFilter = ['level', 'apple', 'radar', 'banana', 'civic'];

const filterPalindromStr = wordsFilter.filter(
  (word) => word === word.split('').reverse().join('')
);
console.log(filterPalindromStr);
