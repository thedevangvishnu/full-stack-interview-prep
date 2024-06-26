// Question 1: What is Lexical Scope?

/**
 * Output:
 *
 * Answer/Explanation:
 * Lexical scope is the region of the source code or the context within which a binding (variable or function) is valid. It is determined at the creation phase and cannot be changed. It defines which variables are accessbile where. E.g: A variable defined in global scope is accessible in local scope while the opposite is not true.
 */

/* ********************************************************* */

// Question 2: What are closures in JS?

// example
// function outer(x) {
//   var outerVar = 100 * x;

//   function inner(y) {
//     var innerVar = 200 + outerVar * x * y;
//     console.log(innerVar); // 1400
//     console.log(outerVar); // 200
//   }
//   return inner;
// }

// outer(2)(3);
// const inner = outer(2)
// inner(3)

/**
 * Output:
 *
 * Answer/Explanation:
 * A closure is a function that is bundled together with the reference to its lexical environment. A closure "remembers the creation context", even when it is used/invoked outside of that context. Explain it with the example of "Family Tree" in which, how a grandchild can use his money, his parent's money and his grandparent's money.
 *
 * Follow up question: What is a closure scope chain?
 * It is a mechanism in JS that is used to resolve variable references. Scope chain is an upstream chain of all the lexical environment, starting from the current scope, upto the global scope. If a binding cannot be found inside the current scope, then it is looked for inside the parent's scope. And not found, then again looked for inside parent's parent's (grandparent's) scope and so on.
 */

/* ********************************************************* */

// Question 3: Determine the output

// 3.1

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // 1
//   }
//   console.log(count); // 0
// })();

// 3.2

// var count = 0;
// (function printCount() {
//   if (count === 0) {
//     var count = 1;
//     console.log(count);  // won't even be executed
//   }
//   console.log(count); // undefined
// })();
// console.log(count); // 0

// 3.2

// var count = 0;
// (function printCount() {
//   if (!count) {
//     var count = 1;
//     console.log(count); // 1
//   }
//   console.log(count); // 1
// })();

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 4: Write a function that would allow you to do this

// function createBase(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// var addSix = createBase(6);
// // addSix(10);  should return 16
// // addSix(21);  should return 27

// console.log(addSix(10)); // does return 16
// console.log(addSix(21)); // does return 27

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 5: How can you optimize the time of this code

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   console.log(a[index]);
// }

// console.time("6");
// find(6);
// console.timeEnd("6");

// console.time("12");
// find(12);
// console.timeEnd("12");

// // optimized code
// function optimisedFind() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const result = optimisedFind(); // this will indeed take the required time as in previous case. But this will happen only once.

// console.time("6");
// result(6);
// console.timeEnd("6");

// console.time("12");
// result(12);
// console.timeEnd("12");

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Determine the output. Block scope and setTimeout

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
// 3 after 1 sec
// 3 after 2 sec
// 3 after 3 sec

// Follow up: How can you print 0, 1, 2?

// function b() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// b();

// Follow up: How can you print 0, 1, 2 but using var only. Not allowed to use let!

// function c() {
//   for (var i = 0; i < 3; i++) {
//     function inner(num) {
//       setTimeout(function () {
//         console.log(num);
//       }, i * 1000);
//     }
//     inner(i);
//   }
// }
// c();

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 7: How would you use a closure to create a private counter

// This is also called data-hiding

// function counter() {
//   let _counter = 0;

//   function incrementByValue(value) {
//     _counter += value;
//   }

//   function decrementByValue(value) {
//     _counter -= value;
//   }

//   function getValue() {
//     return _counter;
//   }

//   return {
//     incrementByValue,
//     decrementByValue,
//     getValue,
//   };
// }

// const c = counter();
// c.incrementByValue(5);
// c.incrementByValue(20);
// c.decrementByValue(2);

// const value = c.getValue();
// console.log(value); // 23

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: What is a module pattern?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 9: Make this run only once

// let message;
// function logMessage() {
//   message = "Hello";
//   console.log("Message:", message);
// }

// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();

// let message2;
// function logMessage2() {
//   let called = 0;
//   return function () {
//     if (called === 0) {
//       message2 = "Hello";
//       called++;
//       return message2;
//     } else return;
//   };
// }

// const log = logMessage2();
// console.log(log());
// console.log(log());
// console.log(log());
// console.log(log());

// Followup: Make this into a generic function
function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const connect = once((message) => `Message: ${message}`);
console.log(connect("Server connected...."));
console.log(connect("Server disconnected...."));
console.log(connect("Server destroyed...."));
console.log(connect("Server connected...."));

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 1:

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 1:

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 1:

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */
