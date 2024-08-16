//1
console.log('Program 1: ');

function calculateSalary(hoursWorked, hourlyRate) {
  return hoursWorked * hourlyRate;
}

console.log('Total Salary: ', calculateSalary(35, 500));
console.log('\n');

//2
console.log('Program 2: ');
function calculateBonus(workedHours, marks, salary) {
  let bonus;
  if (workedHours > 25 && marks > 85) {
    bonus = 0.1;
  } else if (workedHours > 15 && marks > 75) {
    bonus = 0.05;
  } else {
    bonus = 0;
  }
  return salary + salary * bonus;
}
console.log('Salary: ', calculateBonus(20, 80, 5000));
console.log('\n');

//3
console.log('Program 3: ');
function calculateFinalAmount(price1, quantity1, price2, quantity2) {
  return price1 * quantity1 + price2 * quantity2;
}
console.log('Total Amount: ', calculateFinalAmount(200, 10, 500, 5));
console.log('\n');

//4
console.log('Program 4: ');
function calculateAllowance(age, isStudent, baseAllowance) {
  if (age < 18 && isStudent === true) {
    return baseAllowance + 100;
  } else if (age >= 18 && age <= 25 && isStudent === true) {
    return baseAllowance + 50;
  } else {
    return baseAllowance;
  }
}
console.log('Allowance: ', calculateAllowance(16, true, 500));
console.log('\n');

//5
console.log('Program 5: ');
function calculateShippingCost(totalWeight, country, baseCost) {
  if (totalWeight <= 1 && country === 'Local') {
    return baseCost + 10;
  } else if (totalWeight > 1 && country === 'International') {
    return baseCost + 20;
  } else {
    return baseCost;
  }
}
console.log('Shipping Cost: ', calculateShippingCost(0.5, 'Local', 50));
