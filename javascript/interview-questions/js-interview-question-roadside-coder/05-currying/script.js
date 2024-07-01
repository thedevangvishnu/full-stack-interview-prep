// Question 1: What is currying? Explain using example

/**
 * Output:
 *
 * Answer/Explanation:
 * Currying is a functional programming technique that is used to transform a function that takes multiple arguments at a time (say, f(a, b, c)) into a sequence of functions (like, f(a)(b)(c)) that take one argument at a time and return another function(hence, forming closure) that takes the next argument, continuing so, until all the arguments have been provided.
 */

/* ********************************************************* */

// Question 2: Implement a sum function that can be called like sum(2)(6)(1);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 3: How would be implement a function called "evaluate" that behaves like:
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2

// function evaluate(operation, num1, num2) {
//   return operation(num1, num2);
// }
// const num1 = 4;
// const num2 = 2;
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(evaluate(sum, num1, num2));

// function evaluate2(operation) {
//   return function (num1) {
//     return function (num2) {
//       return operation(num1, num2);
//     };
//   };
// }
// console.log(evaluate2(sum)(5)(5));

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 4: What is infinite currying? -> sum(1)(2)(3)...(n)

// function sum(...nums) {
//   return nums.reduce((acc, val) => acc + val);
// }

// console.log("Normal sum:", sum(10, 20, 30, 40, 50));

// function sum2(a) {
//   return function (b) {
//     if (b) return sum2(a + b);
//     return a;
//   };
// }

// console.log("Sum 2:", sum2(2)(4)(6)()); // the problem with this implementation is that it restricts the sum2 being called with only 1 argument at a time.

// follow up: Implement a polyfil for a function that takes a function and implements infinite currying to it
// this is very important

// function infiniteCurry(func) {
//   return function curried(...args) {
//     return function (...nextArgs) {
//       if (nextArgs.length === 0) {
//         return func.apply(this, args);
//       }
//       return curried.apply(this, [...args, ...nextArgs]);
//     };
//   };
// }

// const curriedSum = infiniteCurry(sum);
// console.log("Polyfill infinite:", curriedSum(2, 3, 4)(3, 3)());

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 5: What is the difference between Currying and Partial Application?

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curriedSum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// function partialSum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const sum1 = sum(10, 20, 30);
// const sum2 = curriedSum(20)(30)(40);
// const sum3 = partialSum(5)(10, 15);

// console.log("Normal sum:", sum1);
// console.log("Curried sum:", sum2);
// console.log("Partial sum:", sum3);

/**
 * Output:
 *
 * Answer/Explanation:
 * Currying and Partial Application are both functional programming techniques that are used to transform functions. They are almost similar but are slightly different in their application and also approach.
 * Currying transform a function that takes multiple arguments into a sequence of functions tha take one argument at a time until all arguments have been provided.
 * Partial application transforms a function that takes multiple arguments into another function with lesser fixed number of arguments and return a function that then accepts the remaining arguments.
 */

/* ********************************************************* */

// Question 6: Real World currying applicationi?

// application example 1: Suppose a package has a functionality that allows users to log a provided message for current time based on a particular trigger
// function log(time, action, message) {
//   console.log(`Log info:
//   Time: ${time}
//   Action: ${action.toUpperCase()}
//   Message: ${message}
//     `);
// }

// log(new Date().toLocaleTimeString(), "debug", "Fix this immediately");

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, [...args, ...args2]);
//       };
//     }
//   };
// }

// const curriedLog = curry(log);

// // helper function to log info for current time
// const logNow = curriedLog(new Date().toLocaleTimeString());
// logNow("enhancement", "Create a scrolling animation for header!"); // partial application
// logNow("bug")("Navbar position is not fixed to the top");

// const debug = logNow("debug");
// const enhancement = logNow("enhancement");
// const testing = logNow("testing");

// debug("createNewUser API throws UncaughtError");
// enhancement("Collapsable sidebar with a sign up form.");
// testing("Write e2e test for collapsable sidebar component");

// application 2: DOM Manipulation, we want to create a function that takes any element id and updates the inner content

// function updateElementContent(elementId) {
//   return function (content) {
//     document.getElementById(elementId).textContent = content;
//   };
// }

// const updateSubtitle = updateElementContent("subtitle");
// updateSubtitle("Just practice more!");

// const updateBtn = updateElementContent("trigger");

// setTimeout(() => {
//   updateSubtitle("Why not practicing more?");
// }, 3000);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 7: Implement a curry function that curries any function?

// function multiply(a, b, c, d) {
//   return a * b * c * d;
// }

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

// const curriedMultiply = curry(multiply);

// console.log(curriedMultiply(2)(3)(4)(5));

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: Write a curried function greet that takes three parameters: greeting, name, and punctuation, with default values for greeting ("Hello") and punctuation ("!"):
// greet("Hi")("John")("?"); // returns "Hi John?"
// greet()("Jane")(); // returns "Hello Jane!"

// function simpleGreet(greeting = "Hello", name, punctuation = "!") {
//   return `${greeting} ${name}${punctuation}`;
// }
// console.log(simpleGreet("Heyyy", "Devang", "?"));
// console.log(simpleGreet("Amika"));

// function greet(greeting = "Hello") {
//   return function (name) {
//     return function (punctuation = "!") {
//       return greeting + " " + name + punctuation;
//     };
//   };
// }

// console.log(greet("Oye")("Devang")("?"));
// console.log(greet()("Devang")());

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 9: Write a curried function concat that concatenates multiple strings together:
// concat("Hello")(" ")("World")("!")(); // returns "Hello World!"
// concat("Man,")("I")(" love")(" currying")(".")(); // returns "Man, I love currying."

// // simple implementation
// function concat(str) {
//   return function (nextStr) {
//     if (nextStr) return concat(str + nextStr);
//     return str;
//   };
// }

// console.log(concat("Hello")(" ")("World")("!")());
// console.log(concat("Hello")(" ")("World")("!")(" My name is Devang.")());

// // more dynamic implementation
// function advConcat(...args) {
//   let concated = "";
//   args.forEach((arg) => {
//     concated += arg;
//   });

//   return function (...nextArgs) {
//     if (nextArgs.length === 0) {
//       return concated;
//     }

//     let nextConcated = "";
//     nextArgs.forEach((nextArg) => {
//       nextConcated += nextArg;
//     });
//     return advConcat(concated, nextConcated);
//   };
// }

// console.log(
//   advConcat("Hello", ", Hiiii")(" ")("Julian")("!")(
//     " My name is Devang.",
//     " ",
//     "How have you been?"
//   )()
// );

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 10: Implement a curried function compose that takes two functions and returns their composition:
/**
 * const add1 = x => x + 1;
 * const multiply2 = x => x * 2;
 * const composed = compose(multiply2)(add1);
 * console.log(composed(5)); // returns 12
 */

// const add1 = (x) => x + 1;
// const multiply2 = (x) => x * 2;

// function compose(func) {
//   return function (func2) {
//     return function (num) {
//       const nextInput = func2.call(this, num);
//       return func.call(this, nextInput);
//     };
//   };
// }

// const composed = compose(multiply2)(add1);
// console.log(composed(5));

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 11: Create a curried function filterBy that filters an array based on a predicate function:
/**
 * const isEven = num => num % 2 === 0;
const filterBy = curry((predicate, arr) => arr.filter(predicate));
const filterEvens = filterBy(isEven);
console.log(filterEvens([1, 2, 3, 4, 5, 6])); // returns [2, 4, 6]
 */

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */
