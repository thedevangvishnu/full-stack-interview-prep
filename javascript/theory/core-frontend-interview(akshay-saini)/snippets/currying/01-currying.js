function sum(a, b, c) {
  return a + b + c;
}

// example 1: basic currying

function sum2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result2 = sum2(3)(4)(5); // full currying
console.log(result2); // 12

/////////////////////////////////////////

// example 2: intermediate currying

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}
// this function is better abstracted and dyanmic. We can pass any function such as sum, multiply and divide.

const curriedSum = curry(sum);
const result3 = curriedSum(10)(20)(30);
console.log(result3); // 60

const result4 = curriedSum(10); // function (b)
console.log(result4(5)(20)); // 35
// This is still full currying where each argument is passed individually in successive calls.

/////////////////////////////////

// example 3 - advance currying implementation that allows curried function to be called normally, partially or fully.

// explain this example using debugger in the console. If I can explain this example, then no more questions will be asked.

function advCurry(func) {
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

const advCurriedSum = advCurry(sum);
console.log(advCurriedSum(20, 30, 20)); // 70 (normal call)
console.log(advCurriedSum(1)(2, 3)); // 6 (partial)
console.log(advCurriedSum(10)(10)(10)); // 30 (full currying)

/////////////////////////////////////

// example 4 - this advance currying implementation should not define the argument function with rest parameters. The partial or full currying won't work in such case.

function advCurry(func) {
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

// argument function defined using rest parameter
function multiply(...args) {
  return args.reduce((acc, value) => acc * value, 1);
}

const advCurriedMultiply = advCurry(multiply);
console.log(advCurriedMultiply(2, 3, 4)); // 24 (normal call)
// console.log(advCurriedMultiply(1)(2, 3)); // TypeError: because advCurriedMultiple(1) return a value and value(1)(2) is a function

////////////////////////////////////////////////////

// example 5 - currying using bind() method
// When using bing() method, we can define the function that is invoked using rest paramters. That is better implementation that applying it with fixed number of argumenets

const curriedMultiply = multiply.bind(this, 2, 3);
console.log(curriedMultiply()); // 6

const curriedMultiplyBy4 = multiply.bind(this, 4);
console.log(curriedMultiplyBy4(10, 2)); // 80
