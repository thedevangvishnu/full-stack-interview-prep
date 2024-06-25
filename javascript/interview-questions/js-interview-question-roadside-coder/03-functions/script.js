// Question 1: What is function declaration

// function square(num) {
//   return num ** 2;
// }

// console.log(square(2));

/**
 * Output:
 * 4
 *
 * Answer/Explanation:
 * Function Declaration is a way to define a function using the "function" keyword and an identifier (name) for that function. It is also called as Function Statement
 */

/* ********************************************************* */

// Question 2: What is function expression?

// Function expression using anonymous function
// const cube = function (num) {
//   return num ** 3;
// };
// console.log(cube(3));

/**
 * Output:
 * 27
 *
 * Answer/Explanation:
 * Function Expression is a way to define a function and assign it to a varible. The defined function can be invoked by calling the variable. We can use anonymous, named or arrow functions in the expression.
 */

/* ********************************************************* */

// Question 3: What is the difference between anonymous and named functions?

// const calFactorial = function (num) {
//   let factorial = 1;
//   for (let i = num; i >= 1; i--) {
//     factorial *= i;
//   }
//   return factorial;
// };

// console.log(calFactorial(4));

// const calFactorial2 = function factorial(num) {
//   if (num === 1) return 1;

//   return num * factorial(num - 1);
// };

// console.log(calFactorial2(4));

/**
 * Output:
 *
 * Answer/Explanation:
 * Anonymous functions can only be assigned to a variable or can be passed inside a callback. This is true for named functions as well. The only difference is that we cannot reference anonymous function inside the function itself (because there is no identifier) while we can reference a named function inside itself, hence allowing for something like recursion.
 */

/* ********************************************************* */

// Question 4: What are First Class Functions?

/**
 * Output:
 *
 * Answer/Explanation:
 * Before answering about first class function, I would like to explain what are first class citizens. First class citizens in any programming language are those entities (data-types) that contain these following capabilities:
 * can be assigned to a variable
 * can be passed as an argument to a variable
 * can be return as a value from another function
 * can be stored in other data-structures like arrays and objects
 * Numbers, strings, booleans, array and objects are generally the first class citizens in all languages.
 * In JS, functions are also first class citiznes. So First Class function in nothing but a first class citizen in which the "enttity in question is a function", which means, a function:
 * can be assigned to a variable
 * can be passed as an argument to a variable
 * can be return as a value from another function
 * can be stored in other data-structures like arrays and
 */

/* ********************************************************* */

// Question 5: What is IIFE in JS?

// // example 1
// (function (value) {
//   console.log(value);
// })("Devang"); // "Devang"

// // 5.1: Determine the output

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1); // 1

/**
 * Output:
 *
 * Answer/Explanation:
 * IIFE stand for "Immediately Invoked Function Expression", which is a pattern for invoking a function at the same time while defining it.
 */

/* ********************************************************* */

// Question 6: Determine the output (function scope)

// 6.1

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
// 0 (after 1sec)
// 1 (after 2sec)
// 2 (after 3sec)
// 3 (after 4sec)
// 4 (after 5sec)

// 6.1

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
// 5 (after 1sec)
// 5 (after 2sec)
// 5 (after 3sec)
// 5 (after 4sec)
// 5 (after 5sec)

/**
 * Output:
 *
 * Answer/Explanation:
 * Scoping of var, let and const and also how closure work
 */

/* ********************************************************* */

// Question 7: Determine the output (function hoisting)

// var x = 21;

// console.log(fun); // undefined
// var fun = function () {
//   console.log(x); // undefined
//   var x = 20;
// };

// fun();

/**
 * Output:
 *
 * Answer/Explanation:
 * Different execution context (scope) and hoisting
 */

/* ********************************************************* */

// Question 8: Parameters vs Arguments? Spread vs Rest operators

// explanation using example

// function log(str1, str2, str3) {
//   console.log(str1, str2, str3);
// }

// // using rest operator in params
// function log2(...strs) {
//   console.log(...strs); // then again using spread operator
// }

// const strs = ["Hello", "Hiii", "Hey"];
// log(...strs); // using spread operators to spread strs array to its individual elements
// log2(...strs, "Bye", "Goodbye"); // the benefit it, it can take any number of arguments

// 8.1: Determine the output

// const fn = (a, ...numbers, x, y) => {
//     console.log(x,y)
// }

// fn(5, 6, 7, 8) // SyntaxError: Rest parameter must be the last formal paramter

/**
 * Output:
 *
 * Answer/Explanation:
 * Parameters are the "placeholders" that are used inside the function definition for the actual values which will be provided to the function when it is invoked where as Arhuments are the actual values that are passed to a function when it is invoked.
 *
 * Speard operator is an operator that is used to expand or spread the array to its individual elements. It can be used to pass multiple arguments to a function that it is being invoked where Rest operator is also similar in functionality to spread operator but the only difference is rest operator is used to spread the paramteres inside a function definition.
 *
 * Suppose we have an array, and we want to pass all the individual elements of this array to a function. In this case, we will use spread operator. But, if we want to access all the individual elements of this spreaded array inside function parameter, we can use rest operator
 */

/* ********************************************************* */

// Question 9: What are callback functions?

// function sum(nums) {
//   return nums.reduce((acc, val) => acc + val, 0);
// }

// function print(operation, numbers) {
//   console.log(operation(numbers));
// }

// const nums = [10, 20, 30];
// print(sum, nums);

/**
 * Output:
 *
 * Answer/Explanation:
 * Callback functions are the functions that are passed as arguments to another functions which is then invoked inside the main-parent function. We can use function declaration/expression as callbacks. Both named and anonymous functions are allowed
 *
 * Explain callbacks using this example. Suppose, we want to create a function that takes a callback (a sum, subtract, multiply, divide function) and takes an array numbers to perform such operation
 */

/* ********************************************************* */

// Question 10: What are arrow functions? What are major differences between arrow functions and normal functions?

// 10.1

// const user = {
//   username: "Devang",
//   log1: () => {
//     console.log(this.username);
//   },
//   log2() {
//     console.log(this.username);
//   },
// };

// user.log1(); // undefined (accessing a non-existing property doesn't throw error in js. It simply returns "undefined")
// user.log2();

/**
 * Output:
 *
 * Answer/Explanation:
 * Arrow function, which were introduced in ES6, are a way of defining a function that can be assigned to a variable with a cleaner, shorter syntax and without the use of "function" keyword. The value of "this" keyword and hoisting work slightly different in arrow functions
 * The difference between arrow function and normal function
 * syntax
 * implicit "return" in arrow function
 * no access to "arguments" object inside arrow function
 * no "this" binding in arrow function
 * hoisting behaves differently in arrow functions
 */

/* ********************************************************* */
