//filter array of objects
const tasks = [
  { id: 1, title: 'Task 1', status: 'completed' },
  { id: 2, title: 'Task 2', status: 'pending' },
  { id: 3, title: 'Task 3', status: 'completed' },
  { id: 4, title: 'Task 4', status: 'pending' },
  { id: 5, title: 'Task 5', status: 'not started' },
];

//pending tasks
console.log('Pending tasks: ');
const filterPendingTasks = tasks.filter((task) => task.status === 'pending');
console.log(filterPendingTasks);
console.log('\n');

//not completed tasks
console.log('Not completed tasks: ');
const filterNotCompletedTasks = tasks.filter(
  (task) => task.status !== 'completed'
);
console.log(filterNotCompletedTasks);
console.log('\n');

const books = [
  { id: 1, title: 'Book 1', year: 2005, noOfPages: 250 },
  { id: 2, title: 'Book 2', year: 2012, noOfPages: 400 },
  { id: 3, title: 'Book 3', year: 2015, noOfPages: 280 },
  { id: 4, title: 'Book 4', year: 2008, noOfPages: 350 },
];

console.log('Year greater than 2010 and number of pages more than 300: ');
const filterBooks = books.filter(
  (book) => book.year > 2010 && book.noOfPages > 300
);
console.log(filterBooks);
