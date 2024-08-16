const items = [
  { id: 1, item: 'Item 1', price: 10 },
  { id: 2, item: 'Item 2', price: 20 },
  { id: 3, item: 'Item 3', price: 15 },
  { id: 4, item: 'Item 4', price: 25 },
];

const itemListContainer = document.querySelector('#itemList');
const totalCostContainer = document.querySelector('#totalCost');
const avgCostContainer = document.querySelector('#avgCost');

const itemList = items.reduce(
  (acc, curr) => {
    const listElement = document.createElement('li');
    listElement.textContent = `${curr.item} - $${curr.price}`;
    itemListContainer.appendChild(listElement);

    acc.totalCost = acc.totalCost + curr.price;
    // totalCostContainer.textContent = `$${(acc.totalCost).toFixed(2)}`
    // console.log(acc)
    return acc;
  },
  { totalCost: 0 }
);

totalCostContainer.textContent = `$${itemList.totalCost.toFixed(2)}`;

const averageCost = itemList.totalCost / items.length;
avgCostContainer.textContent = `$${averageCost}`;
