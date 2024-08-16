const employees = [
  { id: 1, name: 'Alice', experience: 2 },
  { id: 2, name: 'Bob', experience: 9 },
  { id: 3, name: 'Charlie', experience: 4 },
  { id: 4, name: 'John', experience: 19 },
];

const moreThanFiveYOECheckbox = document.querySelector(
  '#moreThanFiveYOECheckbox'
);
const employeeListContainer = document.querySelector('#employeeList');

function renderEmployees(checkedValue) {
  const filteredEmployees = checkedValue
    ? employees.filter((emp) => emp.experience > 5)
    : employees;

  const employeeListHTML = filteredEmployees.map(
    (emp) => `
  <li>
  <strong>ID: </strong>${emp.id}<br>
  <strong>Name: </strong>${emp.name}<br>
  <strong>Experience: </strong>${emp.experience} years<br>
  <hr>
  </li>
  `
  );
  employeeListContainer.innerHTML = employeeListHTML.join('');
}

renderEmployees(false);

moreThanFiveYOECheckbox.addEventListener('change', function () {
  renderEmployees(moreThanFiveYOECheckbox.checked);
  // console.log(moreThanFiveYOECheckbox.checked)
});
