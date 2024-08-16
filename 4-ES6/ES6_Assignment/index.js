console.log('Program 1: ');
//rest param use
const concatenateStrings = (...str) => str.join(' ');
console.log(concatenateStrings('Hello', 'world', '!'));
console.log(concatenateStrings('Javascript', 'is', 'fun', 'to', 'learn.'));
console.log('\n');

console.log('Program 2: ');
//spread operator use
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(['a', 'b'], ['c', 'd', 'e']));
console.log('\n');

console.log('Program 3: ');
const concatenateWithSeparator = (separator, ...args) => args.join(separator);
console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue', 'yellow'));
console.log('\n');

//destructuring
console.log('Program 4: ');
const extractObjectValues = (obj) => {
  const { name, age } = obj;
  return `Name: ${name}, Age: ${age}`;
};
console.log(extractObjectValues({ name: 'Alice', age: 25 }));
console.log(extractObjectValues({ name: 'Bob', age: 30 }));
console.log('\n');

console.log('Program 5: ');
const extractArrayValues = (arr) => {
  const [first, second, third] = arr;
  return `Values: ${first}, ${second},  ${third}`;
};
console.log(extractArrayValues([1, 2, 'Hello', 3]));
console.log(extractArrayValues(['apple', 'orange', 'banana']));
console.log('\n');

console.log('Program 6: ');
const extractNestedValues = (obj) => {
  const {
    data: { firstName, lastName, age },
  } = obj;
  return `${firstName} ${lastName} will be ${age + 5} years old in five years.`;
};
console.log(
  extractNestedValues({
    data: { firstName: 'Priya', lastName: 'Gupta', age: 20 },
  })
);
console.log(
  extractNestedValues({ data: { firstName: 'John', lastName: 'Doe', age: 25 } })
);
console.log('\n');

//restructuring
console.log('Program 7: ');
const printInfo = ({
  name: { firstName: empFirstName, lastName: empLastName },
  department,
}) => {
  return `${empFirstName} ${empLastName} works in ${department} department.`;
};
console.log(
  printInfo({ name: { firstName: 'John', lastName: 'Dow' }, department: 'IT' })
);
console.log(
  printInfo({
    name: { firstName: 'Alice', lastName: 'Smith' },
    department: 'Legal',
  })
);
console.log('\n');

console.log('Program 8: ');
const printUserDetails = ({
  name,
  username: userName = 'anonymous',
  post: userPost = 'Hello World!',
}) => {
  return `${userName} posted ${userPost}`;
};
console.log(
  printUserDetails({
    name: 'John',
    username: 'john',
    post: 'Hello this is John. I am from England.',
  })
);
console.log(printUserDetails({}));
console.log('\n');

//template literal
console.log('Program 9: ');
const checkEvenOdd = (number) => {
  return `${number} ${
    number % 2 === 0 ? 'is an even number' : 'is an odd number'
  }.`;
};
console.log(checkEvenOdd(8));
console.log(checkEvenOdd(15));
console.log('\n');

console.log('Program 10: ');
const checkDiscountEligibility = (purchaseAmt, isPremiumCustomer) => {
  return `You are eligibile for a ${
    purchaseAmt > 100 && isPremiumCustomer === true ? 10 : 5
  }% discount.`;
};
console.log(checkDiscountEligibility(120, true));
console.log(checkDiscountEligibility(90, false));
console.log('\n');

//spread operator
console.log('Program 11: ');
const object1 = { name: 'Alice', age: 30 };
const object2 = { city: 'London', country: 'UK' };
const mergeObjects = (object1, object2) => ({ ...object1, ...object2 });
console.log(mergeObjects(object1, object2));
console.log('\n');

console.log('Program 12: ');
const object = { name: 'Dave', age: 25 };
const addKeyValuePair = (obj, key, value) => ({ ...obj, [key]: value });
console.log(addKeyValuePair(object, 'city', 'New York'));
