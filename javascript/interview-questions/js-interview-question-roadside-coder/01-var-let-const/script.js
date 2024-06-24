// Variable scoping, shadowing
// Question 1: Determine the output

// {
//   var a = 10;
//   let b = 5;
// }

// console.log(a);
// console.log(b);

/**
 * Answer:
 * 10
 * ReferenceError: b is not defined
 *
 * Explanation:
 * Variables declared with var are functional scoped while variables declared with let are blocked scoped. Hence, b cannot be accessed outside the block
 */

/* ********************************************************* */

// Question 2: Determine the output. Define shadowing.

// function test() {
//   let a = "Bye";

//   if (true) {
//     let a = "Goodbye";
//     console.log(a);
//   }
//   console.log(a);
// }

// test();

/**
 * Answer:
 * "Goodbye"
 * "Bye"
 *
 * Explanation:
 * Shadowing is a pattern of variable declaration in js in which a variable decalred in a certain scope(say, local) uses the same name as the variable in the outer scope (parent or global). The inner variable is said to "shadow" the outer variable.
 * The inner "a" is blocked scoped and hence first console log prints the value of "a" in that scope, while the second console log accesses the variable "a" within its scope. Hence, prints "Bye"
 */

/* ********************************************************* */

// Question 3: Determine output. What is illegical shadowing?

// function test() {
//   var a = "Hello";
//   let b = "Bye";

//   if (true) {
//     let a = "Hiii";
//     var b = "Goodbye";
//     console.log(a);
//   }
//   console.log(a);
// }

// test();

/**
 * Answer:
 * Uncaught SyntaxError: Identifier b has already been defined.
 *
 * Explanation:
 * While shadowing a variable, it should cross the boundary of scope
 * Illegal shadowing occurs when a variable declared with let or const attempts to shadow a varialbe decalred with var in the same scope.
 * The rule is simple: You cannot decalre two variables with the same name in the same scope.
 */

/* ********************************************************* */

// Variable declaration, initialization, reassignment

// Question 4: Determine output

// 4.1

// var a;
// var a;
// {
//   var a;
//   console.log(a); // undefined
// }
// console.log(a); // undefined
// // all of these variables are same, there are just being redecalred again and again.

// // 4.1

// var a;
// let b;
// console.log(a);  // undefined
// console.log(b);  // undefined

// 4.3

// let a;
// let a; // Uncaught SyntaxError: Identifier 'a' has already been defined

// 4.4

// let a;
// {
//   let a;
//   console.log(a); // undefined (accesses the inner 'a' variable)
// }
// console.log(a); // undefined (accesses the outer 'a' variable)

// 4.5

// var x;
// let y;
// const z; // Uncaught SyntaxError: Missing initializer in const declaration

// 4.6

// var x = 1;
// let y = 2;
// const z = 3;
// x = 10;
// y = 20;
// z = 30; // Uncaught TypeError: Assignment to constant variable

/**
 * Explanation:
 * Variables declared with same name in the same scope are not allowed (illegal shadowing).
 * Variables decalred with "var" can be initialized without value, can be re-assigned to a new value and can be re-decalred again with var
 * Variables declared with "let" can be initialized without value, can be re-assigned to a new value but cannot be redeclared again with let
 * Variables decalred with "const" must be initialized with a value, cannot be re-assigned to a new value and cannot be redeclared again with const
 */

/* ********************************************************* */

// Hoisting
// Question 5:

// 5.1

// console.log(a); // undfined
// var a = 10;

// 5.2

// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// let b;

// 5.3

// function abc() {
//   console.log(a, b, c); // ReferenceError: Cannot access 'b' before initialization

//   var a = 10;
//   let b = 20;
//   const c = 30;
// }
// abc();
// In this case, even "undefined" for a won't be printed because that console.log() is a single statement that will be executed in one go. It is different from 2 seperate console logs like console.log(a); consol.log(b);

// 5.4

// console.log(a); // undefined
// console.log(b); // function b() {...}
// console.log(c); // undefined

// console.log(b()); // "byee"
// console.log(c()); // TypeError: c in not a function

// var a = 10;

// function b() {
//   console.log("byee");
// }

// var c = function () {
//   console.log("hello");
// };

/**
 * Explanation:
 * Hoisting and how it works.
 * Temporal Dead Zone fot let and const
 */

/* ********************************************************* */
