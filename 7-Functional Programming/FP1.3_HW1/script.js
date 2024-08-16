const employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Designer' },
  { id: 3, name: 'Charlie', position: 'Manager' },
  { id: 4, name: 'David', position: 'Tester' },
];

const employeeListDiv = document.querySelector('#employeeList');

const employeeListInHTML = employees.map(
  (emp) =>
    `<div>
  <strong>ID: </strong>${emp.id}<br>
  <strong>Name: </strong>${emp.name}<br>
  <strong>Position: </strong>${emp.position}
  <hr>
  </div>
  `
);

// console.log(employeeListInHTML)
employeeListDiv.innerHTML = employeeListInHTML.join('');
