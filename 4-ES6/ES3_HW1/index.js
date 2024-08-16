console.log('Program 1: ');
const rectangleArea = (l = 5, b = 3) => l * b;
console.log('Area of rectangle: ', rectangleArea());
console.log('Area of rectangle: ', rectangleArea(4));
console.log('\n');

console.log('Program 2: ');
const concatenateStrings = (str1, str2 = ' neoG') => str1 + str2;
console.log('Concatenate two strings: ', concatenateStrings('Hello', 'World'));
console.log('Concatenate two strings: ', concatenateStrings('Hello'));
console.log('\n');

console.log('Program 3: ');
const cylinderVolume = (radius = 2, height = 4) =>
  Math.PI * radius ** 2 * height;
console.log('Volume of cylinder: ', cylinderVolume(3));
console.log('Volume of cylinder: ', cylinderVolume(3, 5));
console.log('\n');

console.log('Program 4: ');
const shoppingCartTotal = (price = 0, quantity = 1) => price * quantity;
console.log('Total cost of shopping cost: ', shoppingCartTotal(10));
console.log('Total cost of shopping cart: ', shoppingCartTotal(15, 3));
console.log('Total cost of shopping cart: ', shoppingCartTotal());
console.log('\n');

console.log('Program 5: ');
const generateUserProfile = (
  username = 'Guest',
  age = 25,
  country = 'Unknown'
) => {
  return `Username: ${username}, Age: ${age}, Country: ${country}`;
};
//if return object ({username: username})
console.log(generateUserProfile());
console.log(generateUserProfile('Alice', 30, 'USA'));
console.log('\n');

console.log('Program 6: ');
// function sum(a, b) {
//   if (b === undefined) {
//     b = 5;
//   }
//   return a + b;
// }
const sum = (a, b = 5) => a + b;

console.log('Sum: ', sum(2, 4));
console.log('Sum: ', sum(3));
console.log('\n');

console.log('Program 7: ');
const calculatePower = (base, exponent = 1) => base ** exponent;
console.log('Power: ', calculatePower(2, 3));
console.log('Power: ', calculatePower(5));
console.log('\n');

console.log('Program 8: ');
const triangleArea = (base, height = 4) => 0.5 * base * height;
console.log('Area of triangle: ', triangleArea(5));
console.log('Area of triangle: ', triangleArea(3, 6));
console.log('\n');

console.log('Program 9: ');
const concatenateTwoStrings = (str1, str2 = '') => str1 + str2;
console.log('Concatenate two strings: ', concatenateTwoStrings('Good'));
