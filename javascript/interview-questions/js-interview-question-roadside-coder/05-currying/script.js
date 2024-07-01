// Question 1: What is currying? Explain using example

/**
 * Output:
 *
 * Answer/Explanation:
 *
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

function evaluate(operation, num1, num2) {
  return operation(num1, num2);
}
const num1 = 4;
const num2 = 2;
function sum(num1, num2) {
  return num1 + num2;
}

console.log(evaluate(sum, num1, num2));

function evaluate2(operation) {
  return function (num1) {
    return function (num2) {
      return operation(num1, num2);
    };
  };
}
console.log(evaluate2(sum)(5)(5));

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 4: What is infinite currying? -> sum(1)(2)(3)...(n)

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 5: What is the difference between Currying and Partial Application?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Real World currying applicationi?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 7: Implement a curry function that curries any function?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */
