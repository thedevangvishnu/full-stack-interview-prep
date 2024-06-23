// Explain promises using an example

// Suppose we have an e-commerce store. For every order, we first create an order, then process the payment, then update the wallet and show the order summary, then show the tracking details

/*
createOrder(cart)
  .then((orderId) => processPayment(orderId))
  .then((orderId, amount) => showOrderSummary(orderId, amount))
  .then((orderId, amount) => {
    updateWallet(amount);
    trackOrder(orderId);
  });

  For something like this, implement these APIs and write your own functions that return promises.

*/

const cart = ["Marvel T-shirt", "Blue Denim"];

createOrder(cart)
  .then((orderId) => console.log(orderId))
  .then((orderId) => processPayment(orderId))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log(err.message));

function createOrder(cart) {
  // validate cart and if validation succeeds, create an order id and resolve it.
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart not valid!");
      reject(err);
    }

    const orderId = "someOrderId1234";
    // creating a fake delay
    setTimeout(() => {
      resolve(orderId);
    }, 2000);
  });
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    // some logic for processing payment for only valid order ids
    if (!validOrder(orderId)) {
      const err = new Error("Invalid order id");
      reject(err);
    }

    const paymentInfo = "Payment successful!";
    resolve(paymentInfo);
  });
}

function validateCart(cart) {
  // do some validation based on your application logic
  return true;
}

function validOrder(orderId) {
  return false;
}
