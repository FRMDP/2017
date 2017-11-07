//Receipt Module
const receiptTicketModule = (function () {

  let receiptNumber = 0;
  let itemsForPurchase = [];

  const setReceiptNumber = function () {
    receiptNumber++;
  };
  const getReceiptNumber = function () {
    return receiptNumber;
  };

  return {

    startPurchase: setReceiptNumber,
    addItem: function (item) {
    itemsForPurchase.push(item);
    },
    getTotalItems: function () {
      return itemsForPurchase.length;
    },
    getPurchaseTotal: function () {
      let total = 0;
      itemsForPurchase.forEach(function (item) {
        total = total + item.price;
      });
      return total;
    },
    getItemsInPurchase: function () {
      return itemsForPurchase;
    },
    getReceipt: function () {
      return {

        receipt: getReceiptNumber(),
        items: this.getItemsInPurchase(),
        totalItems: this.getTotalItems(),
        amount: this.getPurchaseTotal()

      };
    }

  };
})();

let itemToPurchase = function (name) {
  return itemList.find(i => i.name == name);
}

const itemList = [
  {name: "Apple", price: 1.50},
  {name: "Banana", price: 3.00},
  {name: "Orange", price: 0.50}
];

const addItem = function (name, price) {
  let newItem = {
    name: name,
    price: price
  };
  itemList.push(newItem);
};
