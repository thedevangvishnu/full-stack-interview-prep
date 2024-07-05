// Question 1: What is "this" keyword

/**
 * Output:
 *
 * Answer/Explanation:
 * "this" keyword in JavaScript is a special keyword whose value depends upon the context in which it is used. Most widely, this is used in the context of object and it refer to the object itself when "this" keyword is used inside one of the methods of the object. But, a lof of naunces and rule when its comes to the value of "this" keyword in different contexts
 */

/* ********************************************************* */

// Question 2: Determine output

// 2.1
// var a = 5;
// function getParams() {
//   console.log(this.a);
// }
// getParams();

// 2.2: Both for strict and non-strict mode

// "use strict";

// var a = 5;
// const getParams = () => {
//   console.log(this.a);
// };
// getParams();

// 2.3
// let user = {
//   name: "Devang",
//   age: 24,
//   getDetails() {
//     console.log(this.name, this.age);
//   },
// };

// user.getDetails();

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 3: Determine output. ("this" keyword inside a class)

// class User {
//   constructor(n) {
//     this.name = n;
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// const user = new User("Devang");
// user.getName();

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 4: Determine output

// const user = {
//   firstName: "Devang",
//   getName() {
//     const firstName = "Devang!";
//     return this.firstName;
//   },
// };

// console.log(user.getName()); // ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 5: What is the result of accessing its ref? Why?

// function makeUser() {
//   return {
//     name: "Devang",
//     ref: this,
//   };
// }
// const user = makeUser();
// console.log(user.ref.name);

// follow up: How can you fix it?

// function makeUser() {
//   const obj = {
//     name: "Devang",
//     ref() {
//       return this;
//     },
//   };
//   return obj;
// }
// const user = makeUser();
// console.log(user);
// console.log(user.ref().name);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: What is the output?

// "use strict";

// const user = {
//   name: "Devang Vishnu",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(user.logMessage, 2000); // ?

// // follow up: How to fix it?

// setTimeout(function () {
//   user.logMessage();
// }, 4000);

// setTimeout(() => {
//   user.logMessage();
// }, 6000);

/**
 * Output:
 *
 * Answer/Explanation:
 * Understanding the "callback context": The callback function is called with "this" set to the global object, Directly using callback works as a standalone function
 */

/* ********************************************************* */

// Question 7: Create an object calculator, in which:
// calculator.read() should prompt user for two values
// calculator.sum() sums two values from the calculator obj
// calculator.multiply() multiplies two values from the calculator obj

// const calculator = {
//   read() {
//     this.num1 = +prompt("Num1:", 0);
//     this.num2 = +prompt("Num2:", 0);
//     return `Num1: ${this.num1}, Num2: ${this.num2}`;
//   },
//   sum() {
//     return this.num1 + this.num2;
//   },
//   multiply() {
//     return this.num1 * this.num2;
//   },
// };

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.multiply());

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: Determine the output. For all cases for both strict and non-strict mode
// "use strict";

// 8.1.1
// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// object.method(callback);

// 8.1.2
// let length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// object.method(callback);

// 8.2
// var length = 4; // redecalre with let? Will there be any change?
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn.call(this);
//   },
// };
// object.method(callback);

// 8.3
// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method() {
//     console.log(arguments);
//     arguments[0]();
//   },
// };
// object.method(callback, 3, 2);

// 8.4.1

// "use strict";

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   setTimeout(function () {
//     console.log("Hello, my name is " + this.name); // ?
//   }, 2000);
// };

// var person = new Person("Alice");
// person.sayHello();

// // 8.4.2

// Person.prototype.sayHello = function () {
//   setTimeout(() => {
//     console.log("Hello, my name is " + this.name); // ?
//   }, 2000);
// };

// var person = new Person("Alice");
// person.sayHello();

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 9: Implement a calculator function that does this:
// const result = calculator.add(10).multiply(5).subtract(30).add(10);

// const calculator = {
//   total: null,
//   add(num) {
//     this.total = !this.total ? num : this.total + num;
//     return this;
//   },
//   multiply(num) {
//     this.total = !this.total ? num : this.total * num;
//     return this;
//   },
//   subtract(num) {
//     this.total = !this.total ? num : this.total - num;
//     return this;
//   },
// };

// const result = calculator.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */
