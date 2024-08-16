//destructuring - to get an value from array, obj - useful in nested object and array

//to extract an element from an array
//traditional way - accessing index number
const extractVal = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // console.log(arr[0], arr[1], arr[2])
};
// extractVal([12, 13, 14])

//ES6 way
const extractArrayValue = (arr) => {
  const [a, b, third] = arr;
  console.log(a);
  console.log(b);
  console.log(third);
};
extractArrayValue([1, 2, 3]);
console.log('\n');

//to extract value from object - otherwise access using obj.name
const extractValueFromObj = (obj) => {
  const { name, age, city } = obj;
  console.log(`${name} is ${age} years old and lives in ${city}.`);
};
extractValueFromObj({ name: 'Alice', age: 25, city: 'Paris' });
console.log('\n');

//extract value from nested object - complex project
const obj1 = {
  id: 1,
  info: {
    title: 'Javascript Basics',
    description: 'Learn Fundamentals',
  },
};

const getObjValues = (obj) => {
  const {
    info: { title, description },
  } = obj;
  console.log(title);
  console.log(description);
};
getObjValues(obj1);
