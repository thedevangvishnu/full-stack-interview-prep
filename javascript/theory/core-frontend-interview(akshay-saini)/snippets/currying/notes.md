### Currying

#### Resources

- Currying explained by Akshay Saini: https://www.youtube.com/watch?v=vQcCNpuaJO8&t=3s&pp=ygUVYWtzaGF5IHNhaW5pIGN1cnJ5aW5n

- Another amazing video on Currying: https://www.youtube.com/watch?v=YB2hPKFqdRE

- Video on Partial Application: https://www.youtube.com/watch?v=Nbeakq_RDtc

- Articles:
  - https://javascript.info/currying-partials
  - https://dev.to/darkmavis1980/a-practical-example-on-how-to-use-currying-in-javascript-1ae9

#### What is currying?

- Currying is "a functional programming technique" in which a function that takes multiple arguments (say "n" number of arguments) is transformed into a series of functions that each take a single argument.
- This process results in a series of nested functions, where each function takes a single arguments and return the next function (forming closure), continuing until all the arguments have been provided.

#### Currying using closures

- Normal function:

```js
function sum(a, b, c) {
  return a + b + c;
}

const result = sum(3, 4, 5);
console.log(result); // 12
```

- Example 1: Basic currying

```js
// example 1

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result = sum(3)(4)(5);
console.log(result); // 12
```

- Example 3 - More dyanmic currying that can be applied to any function that takes three arguments.

```js
function sum(a, b, c) {
  return a + b + c;
}

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
const result = curriedSum(10)(20)(30);
console.log(result); // 60
```

- Example 4 - Advance currying implementation that allows curried function to be called normally, partially or fully.

```js
function sum(a, b, c) {
  return a + b + c;
}

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
```

- Example 5 - This currying implementation requires the function to have a fixed number of arguments. A function that uses rest parameters, such as func(...args), can’t be curried this way.

```js
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

function multiply(...args) {
  return args.reduce((acc, value) => acc * value, 1);
}

const advCurriedMultiply = advCurry(multiply);
console.log(advCurriedMultiply(2, 3, 4)); // 24 (normal call)
console.log(advCurriedMultiply(1)(2, 3)); // TypeError: because advCurriedMultiple(1) return a value and value(1)(2) is a function
```

#### Currying using `bind()` method

- The `bind()` function handles arguments very smartly. It handles all edge cases for arguments.
- When using bing() method, we can define the function that is invoked using rest paramters. That is better implementation that applying it with fixed number of argumenets

```js
function multiply(...args) {
  return args.reduce((acc, value) => acc * value, 1);
}

const curriedMultiply = multiply.bind(this, 2, 3);
console.log(curriedMultiply()); // 6

const curriedMultiplyBy4 = multiply.bind(this, 4);
console.log(curriedMultiplyBy4(10, 2)); // 80
```
