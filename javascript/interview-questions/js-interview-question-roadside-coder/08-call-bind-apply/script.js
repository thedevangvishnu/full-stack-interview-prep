// Question 1: Determine the output

// const person = { name: "Piyush" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24)); // ?
// console.log(sayHi.bind(person, 24)); // ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 2: Determine the output

// const age = 10;

// var person = {
//   name: "Piyush",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 24 };
// console.log(person.getAge.call(person2)); // ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 3: Determine the output

// var status = "High on life!";

// setTimeout(() => {
//   const status = "Busy!";

//   const data = {
//     status: "Smile and live happily!",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); // ?
//   console.log(data.getStatus.call(this)); // ?
// }, 0);

/**
 * Output:
 *
 * Answer/Explanation:
 * In callback context (of setTimeout, setInterval), "this" points to the window object in both strict and non-strict mode.
 */

/* ********************************************************* */

// Question 4: Call printAnimals in a way sucn that it prints all animals in object

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ":" + this.name);
//   };

//   this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//   printAnimals.call(animals[i], i);
// }

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 5: Find min/max number in an array

// const numbers = [5, 6, 2, 3, 7];

// const min = Math.min.apply(this, numbers);
// const max = Math.max.apply(this, numbers);

// console.log(min);
// console.log(max);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Determine the output

// function f() {
//   console.log(this);
// }

// let user = {
//   g: f.bind(this),
// };

// user.g(); // ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 7: Bind Chaining

// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" });
// f();

/**
 * Output:
 *
 * Answer/Explanation:
 * Bind chaining does not exist. A function that is bound using the bind keyword will only be bound to the "first context" and cannot be re-bound to another context
 */

/* ********************************************************* */

// Question 8: Fix the last line in the code to make it work properly

// 8.1.1

// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password == "1234") success();
//   else failed();
// }

// let user = {
//   name: "Devang Vishnu",
//   loginSuccessful() {
//     console.log(`${this.name} logged in!`);
//   },
//   loginFailed() {
//     console.log(`${this.name} failed to log in!`);
//   },
// };

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

// 8.1.2: How will you call the checkPassword function now?

// let user = {
//   name: "Devang Vishnu",
//   login(result) {
//     console.log(
//       `${this.name}: ${result ? "login successful" : "login failed!"}!`
//     );
//   },
// };

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 9: Create a polyfill for call() method

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased a ${this.color} ${this.company} car for ${currency}${price}!`
  );
}

Function.prototype.customCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not callable as a function.`);
  }

  context.fn = this;
  context.fn(...args);
};

purchaseCar.customCall(car1, "$", "800K");

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 10: Create a polyfill for apply

Function.prototype.customApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not callable as a function!`);
  }
  if (!Array.isArray(args)) {
    throw new Error(`${args} is not an array!`);
  }

  context.fn = this;

  context.fn(...args);
};

purchaseCar.customApply(car1, ["$", "2M"]);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 11: Create a polyfill for bind method

const car2 = {
  color: "Black",
  company: "Bugati",
};

Function.prototype.customBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not callable as a function`);
  }

  context.fn = this;
  return function (...args2) {
    context.fn(...args, ...args2);
  };
};

const myBind = purchaseCar.customBind(car2, "$", "5M");
myBind();

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */
