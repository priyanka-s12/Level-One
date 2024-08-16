let numericVariable = 42;
console.log(numericVariable);

let stringVariable = 'Hello';
console.log(stringVariable);

let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
//can declare numeric, string variable using let, also concatenate string

let numberVariable = 10;
numberVariable = 20;
console.log(numberVariable);
//can reassign variable

let num1 = 10;
let num2 = 3;
let sum = num1 + num2;
let difference = num1 - num2;
console.log('Sum: ', sum);
console.log('Difference: ', difference);
//can perform arithmetic operaions

let newName; //declar but not assign now
newName = 'Priyanka';
console.log(newName);
//can assign value later

const numericConst = 30;
console.log(numericConst);

const stringConst = 'Hello!, John';
console.log(stringConst);
//can't reassign value to const variable -> TypeError - Assignment to constant variable

//can't assign value later, you should assign/initialize value to const variable while declaring it only.-> Syntax Error - Missing initializer in const declaration

const numericArr = [1, 2, 3, 4];
numericArr[0] = 9;
console.log(numericArr);
//can change value inside of the array and object

const obj = {
  name: 'John Doe',
  marks: 90,
};
obj.name = 'Alice'; //dot notation
obj['marks'] = 80; //bracket notation
console.log(obj);

//static value - const - constant
