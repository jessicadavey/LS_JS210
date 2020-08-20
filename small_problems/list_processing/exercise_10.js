function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({ id }) => id === inventoryItem);
}

/*
1. get all the transactions for the item
2. reduce to the quantity available
3. return whether or not the quantity is greater than zero


get quantity
1. if movement === 'in', add quantity
2. else subtract quantity
*/

function isItemAvailable(item, transactions) {
  let inventoryList = transactionsFor(item, transactions);

  let quantity = inventoryList.reduce((total, currentItem) => {
    let { movement, quantity } = currentItem;
    total = movement === 'in' ? total + quantity : total - quantity;
    return total;
  }, 0);

  return quantity > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true