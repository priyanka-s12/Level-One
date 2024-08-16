//arrow function that takes a string and returns an object () - {text: str}
const createStringObject = (str) => ({ text: str });
console.log(createStringObject('Hello'));

//arrow function that takes two numbers and returns an object with sum, product of those numbers {sum: 5, product: 6}
const calculateSumAndProduct = (a, b) => ({ sum: a + b, product: a * b });
console.log(calculateSumAndProduct(2, 3));

//arrow function that takes person name & age, returns an object person with properties
const createPersonObject = (name, age) => ({ name: name, age: age });
console.log(createPersonObject('Aice', 25));
