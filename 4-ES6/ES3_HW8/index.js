console.log('Program 1: ');
const displayWeather = (city, temperature) => {
  return `The weather in ${city} is ${temperature} degree Celsius.`;
};
console.log(displayWeather('New York', 20));
console.log(displayWeather('London', 15));
console.log('\n');

console.log('Program 2: ');
const formatCurrency = (currencyAmt, currencyMode) => {
  return `You have ${currencyAmt} ${currencyMode}.`;
};
console.log(formatCurrency(50.5, 'USD'));
console.log(formatCurrency(100, 'EUR'));
console.log('\n');

console.log('Program 3: ');
const displayBookSummary = (title, author, genre) => {
  return `The book "${title}" written by ${author} belongs to the ${genre} genre.`;
};
console.log(
  displayBookSummary('To Kill a Mockingbird', 'Harper Lee', 'Fiction')
);
console.log('\n');

console.log('Program 4: ');
const displayMovieInfo = (title, releaseYear, director) => {
  return `The movie "${title}" was released in ${releaseYear} and directed by ${director}.`;
};
console.log(displayMovieInfo('Inception', 2010, 'Christopher Nolan'));
console.log('\n');

console.log('Program 5: ');
const constructEmail = (recipient, subject) => {
  return `
  To: ${recipient}
  Subject: ${subject}
  
  Dear ${recipient}, 
  
  ...
  `;
};
console.log(constructEmail('alice@example.com', 'Meeting Reminder'));
console.log('\n');

console.log('Program 6: ');
const assessGrade = (marks) => {
  return `You are ${marks >= 60 ? 'passing' : 'failing'}.`;
};
console.log(assessGrade(75));
console.log(assessGrade(60));
console.log(assessGrade(45));
console.log('\n');

console.log('Program 7: ');
const showMessage = (item, quantity) => {
  return `You have ${quantity} ${item}${quantity > 1 ? 's' : ''}.`;
};
console.log(showMessage('bangle', 10));
console.log(showMessage('lipstick', 1));
console.log('\n');

console.log('Program 8: ');
const assessMarks = (marks, grade) => {
  return `You are ${marks >= 60 && grade === 'A' ? 'passing' : 'failing'}.`;
};
console.log(assessMarks(95, 'A'));
console.log(assessMarks(62, 'C'));
console.log(assessMarks(45, 'D'));
console.log('\n');

console.log('Program 9: ');
const showMsg = (item1, quantity1, item2, quantity2) => {
  return `${
    quantity1 > 10 && quantity2 > 5
      ? 'You have a good collection.'
      : 'You need to update your collection.'
  }`;
};
console.log(showMsg('bangle', 11, 'lipstick', 6));
console.log(showMsg('bangle', 5, 'lipstick', 1));
console.log(showMsg('bangle', 12, 'lipstick', 4));
console.log('\n');

console.log('Program 10: ');
const shareStationaryMessage = (pencils, erasers) => {
  return `${
    (pencils > 10 && erasers > 5) || (pencils > 5 && erasers > 10)
      ? 'Please share stationary with friends.'
      : 'Please ask your friends for stationary.'
  }`;
};
console.log(shareStationaryMessage(12, 8));
console.log(shareStationaryMessage(7, 15));
console.log(shareStationaryMessage(5, 3));
