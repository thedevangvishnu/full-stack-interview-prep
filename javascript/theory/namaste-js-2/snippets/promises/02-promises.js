// Explain promises using an example

// Suppose we have an e-commerce store. For every order, we first create an order, then process the payment, then update the wallet and show the order summary, then show the tracking details

// Given these APIs, how would you wirte this program with or without promises.

const cart = ["Marvel T-shirt", "Blue Denim"];

const createOrder = api.createOrder();
const processPayment = api.processPayment();
const showOrderSummary = api.showOrderSummary();
const updateWallet = api.updateWallet();
const trackOrder = api.trackOrder();

// Wihout promises: we use callbacks

createOrder(cart, () => {
  // some logic that iterates over all the items in the cart and creates an order id which is passed to the processPayment()
  const orderId = "someId";
  processPayment(orderId, () => {
    // once the payment is successfull, the order summary is shown with the order id and final amount
    const paymentAmount = "$ someAmount";
    showOrderSummary(orderId, paymentAmount, () => {
      // some logic to update the wallet
      const updatedAmount = oldAmount - paymentAmount;
      updateWallet(updatedAmount);

      // then show the tracking details
      trackOrder(orderId);
    });
  });
});

// Two major problem with this approach: Callback hell and Inversion of control

// With Promises
createOrder(cart)
  .then((orderId) => processPayment(orderId))
  .then((orderId, amount) => showOrderSummary(orderId, amount))
  .then((orderId, amount) => {
    updateWallet(amount);
    trackOrder(orderId);
  });
