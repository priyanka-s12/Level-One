// Program 1
const isBirthDay = true;
let age = 25;
if (isBirthDay) {
  age = age + 1;
}
console.log('Program 1: ');
console.log(`Current Age: ${age}`);
console.log('\n');

// Program 2
console.log('Program 2: ');
const passangerAge = 58;
const ticketPrice = 100;
const discountedPrice = ticketPrice - ticketPrice * 0.15;

if (passangerAge > 60) {
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log('\n');

//Program 3
console.log('Program 3: ');
const num1 = 20;
const num2 = 25;
const num3 = 15;

if (num3 > num1 && num3 > num2) {
  console.log(`The third number ${num3} is the largest.`);
} else {
  console.log(`The third number ${num3} is not the largest.`);
}
console.log('\n');

//Program 4
console.log('Program 4: ');
const items = [
  {
    itemName: 'Saree',
    itemPrice: 500,
  },
  {
    itemName: 'Kurta',
    itemPrice: 300,
  },
  {
    itemName: 'Jeans',
    itemPrice: 900,
  },
  {
    itemName: 'Shoes',
    itemPrice: 400,
  },
];
let total = 0;
const optDeliveryCharge = 99;
let deliveryStatus;

function calculateCartPrice(data) {
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].itemPrice;
  }
  return total;
}
total = calculateCartPrice(items);

function determineDeliveryStatus(total) {
  if (total < 1999) {
    total = total + optDeliveryCharge;
    deliveryStatus = optDeliveryCharge;
  } else {
    deliveryStatus = 'No Delivery Charges';
  }
  console.log(`Delivery Charges: ${deliveryStatus}`);
  console.log('---------------------------------------------------');
  console.log(`Total Cart Price: ${total}`);
  // return deliveryStatus;
}

function printShoppingCart() {
  console.log('Shopping Cart: ');
  console.log('---------------------------------------------------');
  for (let i = 0; i < items.length; i++) {
    console.log(`Item: ${items[i].itemName}, Price: ${items[i].itemPrice}`);
  }
  console.log('---------------------------------------------------');
  determineDeliveryStatus(total);
  console.log('\n');
}

printShoppingCart();

//Program 5
console.log('Program 5: ');
const num = 8;
if (num > 0) {
  console.log('The number is positive.');
} else if (num < 0) {
  console.log('The number is negative.');
} else {
  console.log('The number is zero.');
}
console.log('\n');

//Program 6
console.log('Program 6: ');
const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = 'Rahul';
const student2 = 'Priya';
const student3 = 'Tina';

if (marks1 > marks2 && marks1 > marks3) {
  console.log(`${student1}, scored the highest marks.`);
} else if (marks2 > marks3 && marks2 > marks1) {
  console.log(`${student2}, scored the highest marks.`);
} else {
  console.log(`${student3}, scored the highest marks.`);
}
console.log('\n');
