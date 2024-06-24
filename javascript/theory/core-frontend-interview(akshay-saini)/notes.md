## Core Frontend Interview - Akshay Saini

### 2 - `call()`, `apply()` and `bind()` method

- `call()`

  - the call() method invokes a function with a new specified `this` value (which is the first argument given to call() method) and agruments provided one by one.

  ```js
  const printMessage = function (greet, message) {
    console.log(`${greet}, I'm ${this.name}: ${message}`);
  };

  const person = {
    name: "Devang",
    age: 24,
  };
  printMessage.call(person, "Hello", "What a lovely day!");
  ```

- `apply()` method

  - the apply() method is similar to call() method and it also invokes a function with a specified `this` value and an array of arguments one-by-one.

  ```js
  const printMessage = function (greet, message) {
    console.log(`${greet}, I'm ${this.name}: ${message}`);
  };

  const person = {
    name: "Devang",
    age: 24,
  };
  printMessage.apply(person, ["Hello", "What a lovely day!"]);
  ```

- `bind()` method

  - the bind() method return/creates a new function which when called has the new specified `this` value (which is provided as the first argument to the bind() method) and the arguments provided one-by-one (either to bind() or to the function created by the bind() method)

  ```js
  const printMessage = function (greet, message) {
    console.log(`${greet} I'm ${this.name}: ${message}`);
  };

  const person = {
    name: "Devang",
  };
  const print = printMessage.bind(person, "Hello", "What a lovely day!");
  print(); // Hello, I'm Devang: What a lovely day!

  const person2 = {
    name: "Vishnu",
  };
  const print2 = printMessage.bind(person2);
  print2("Hi eveyone!", "What are you all up to?"); // Hi everyone! I'm Vishnu: What are you all up to?
  ```

### 3 - Polyfill for `bind()` method

- "Polyfill" is a piece of code or a script that provides modern functionality to old browsers that do not support those functions natively.

- With new languages or newer versions of an existing language, come new in-built functions that may not be supported by all the browsers. Hence, we need something (piece of code or a script), that can provide implementation for "those newer-missing-functions" for the older browers. This piece of code or script is known as polyfill.

- Math.trunc() is not supported by all browser. Hence, polyfill for Math.trunc() could be a script that contains this piece of code:

```js
if (!Math.trunc) {
  Math.trunc = function (number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

- Implement polyfill for `bind()` method
  - implemented in the code snippet
  - remember to handle all the arguments that can be passed to your bind function or to the returned-bounded function

### 4 - Currying

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
console.log(advCurriedMultiply(1)(2, 3)); // TypeError: because advCurriedMultiple(1) return a value and value(1)(2) is not a function
```

#### Currying using `bind()` method

- The `bind()` function handles arguments very smartly. It handles all edge cases for arguments.
- When using bind() method, we can define a function that is invoked using rest paramters. That is better implementation than applying it with fixed number of arguments.

```js
function multiply(...args) {
  return args.reduce((acc, value) => acc * value, 1);
}

const curriedMultiply = multiply.bind(this, 2, 3);
console.log(curriedMultiply()); // 6

const curriedMultiplyBy4 = multiply.bind(this, 4);
console.log(curriedMultiplyBy4(10, 2)); // 80
```
