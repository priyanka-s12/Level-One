//restructuring/ renaming

//function to rename parameters of an object using restructuring
const printPersonDetails = ({ name: personName, age: personAge }) => {
  console.log(`Person: ${personName}, Age: ${personAge}`);
};
printPersonDetails({ name: 'Alice', age: 25 });

//function to rename properties in an array
const printFruits = ([fruitName, fruitColor]) => {
  console.log(`Fruit: ${fruitName} is ${fruitColor} in color.`);
};
printFruits(['Apple', 'Red']);

//nested obj - function to print book details using restructuring
const printBookDetails = ({
  title: bookTitle,
  author: { name: authorName, nationality },
}) => {
  //not written author.name/ author.authorName as we renamed don't need to write these,
  console.log(
    `Book: ${bookTitle}, Author: ${authorName}, Nationality: ${nationality}`
  );
};
printBookDetails({
  title: 'Javascript Basics',
  author: { name: 'John Doe', nationality: 'American' },
});

//default params
const displayPerson = ({ name: personName = 'Bob', age: personAge = 20 }) => {
  console.log(`Person Name: ${personName}, Person Age: ${personAge}`);
};
displayPerson({});
//passing empty object
