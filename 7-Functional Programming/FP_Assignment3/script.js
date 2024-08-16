const expenses = [
  { id: 1, name: 'Groceries', amount: 150 },
  { id: 2, name: 'Utilities', amount: 80 },
  { id: 3, name: 'Dining Out', amount: 120 },
  { id: 4, name: 'Transportation', amount: 50 },
];

const expenseListContainer = document.querySelector('#expenseList');
const expenseCheckbox = document.querySelector('#expenseCheckbox');
const totalExpense = document.querySelector('#totalExpense');

function renderItems(checkedValue) {
  const filteredItems = checkedValue
    ? expenses.filter((item) => item.amount > 100)
    : expenses;

  const itemListHTML = filteredItems.map(
    (item) => `
  <li>
  <strong>Expense: </strong>${item.name}<br>
  <strong>Amount: </strong>${item.amount}<hr>
  </li>
  `
  );
  expenseListContainer.innerHTML = itemListHTML.join('');

  const total = filteredItems.reduce((acc, curr) => acc + curr.amount, 0);
  totalExpense.textContent = `$${total.toFixed(2)}`;
}

renderItems(false);

expenseCheckbox.addEventListener('change', function () {
  renderItems(expenseCheckbox.checked);
});
