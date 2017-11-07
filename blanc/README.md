# How to use the Module Pattern test module

- Open "index.html" in browser.
- Use the Developer Tools console to start playing around with the module.-
- The global "addItem" function adds new items to the "itemList" array, from which the items to be added to the receipt are then taken via use of the "itemToPurchase" function.
- The receipt variables are manipulated via use of the public functions it has. "startPurchase" sets a receipt number to the receipt, the local "addItem" function adds an item to the receipt, simulating a cash register scanner, and then "getReceipt" prints out its private information as well as the result of its inner functions.
