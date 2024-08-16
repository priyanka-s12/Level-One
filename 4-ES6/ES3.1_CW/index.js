//default parameters

const addTwoNumbers = (a, b = 1) => a + b;
console.log(addTwoNumbers(2));
//o/p - NaN - as no passing b in function call -> passing default parameter for b in function declaration

const multiplyNumbers = (a, b = 1) => a * b;
console.log(multiplyNumbers(2, 2));
//if pass actual values in function call, default param in fun declaration will be ignored

const concatenateStrings = (name, greeting = 'Hello ') => greeting + name;
console.log(concatenateStrings('Bob'));

const greetUser = (name = 'neoGrammer', greeting = 'Hello ') => greeting + name;
console.log(greetUser());

const addThreeNumbers = (a, b, c = 3) => a + b + c;
console.log(addThreeNumbers(1, 2));
//sequence of parameters are important, if give b =3, give NaN
