## Core Frontend Interview - Akshay Saini

### 1 - `call()`, `apply()` and `bind()` method

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

### 2 - Polyfill for `bind()` method

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

### 3 - Currying

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

## 4 - Debouncing in JS

## 5 - `async` and `defer` attributes

- Three important concepts:
  - HTML parsin
  - Script fetching
  - Script execution

#### Normal script (without async or defer)

- inside `<head>` tag

  - As soon the script tag is encoutered, the HTML parsing stops and the script is fetched and once it is fetched, it is executed immediately. The parsin continues, once the script is done executing.
  - Shouldn't do it if script is accesscing elements from the HTML document. It will throw error.
  - Bad UI experience and poor SEO, as no content avaiable untill script is loaded and executed completely.

- above the closing `<body>` tag

  - script is executed once all HTML inside body tag are parsed.
  - script is then fetched and executed.
  - good for smaller scripts that access elements from the html document.

#### `aysnc`

- For Normal scripts:

  - script file is fetched concurrently with HTML parsing.
  - Once script file is ready, it is executed immediately and pauses the HTML parsing.
  - If multiple scripts are present, all with async attributes, then their order of execution is the order of which one is fetched and is ready to be executed.

- For Module scripts:

  - the script and all of its dependencies are fetched concurrently with HTML parsing
  - executes the module script once it is ready (after doing the first step).

- Use case:
  - used for scripts that are modular and independant of our HTML documents. It is good for loading libraries such as google analytics or similar.

#### `defer`

- For Normal scripts:

  - the script is fetched concurrently with HTML parsing and is executed only after HTML parsing is completed.
  - For multiple scripts with defer attribute, the scripts are executed in their insertion order.

- For Module scripts:

  - modules are by default defered. Hence, using defer will just be ignored (as the same behavior is by default).

- **Note**: if using async and defer together, then async will take precendence, ignoring the defer attribute. The behavior for module scripts (which are deferred by default) also changes to async in this scenario.

## 6 - Events

#### Event Propagation

Event propagation refers to the way events move through the DOM tree. There are two main phases of event propagation:

1. **Capturing Phase**: The event starts from the window and propagates down to the target element.
2. **Bubbling Phase**: The event starts from the target element and propagates up to the window.

#### Event Bubbling

Event bubbling occurs when an event starts at the target element and then bubbles up through its ancestors. By default, most events bubble up.

- used by default by browsers
- In early days, Microsoft advocated to use event bubbling.

#### Event Capturing

Event capturing (or trickling) happens before the target phase and starts from the window object down to the target element. You can capture events by specifying `true` as the third argument to `addEventListener`.

- the third parameter inside event listeners also takes an object, which has multiple properties:

  - {capture: true/false} -> enables/disables event capturing
  - {once: true} -> runs the event handler only once

- In early days, Netspace used event capturing inside their browsers and advocated it for other browsers as well.

- Use Case / Practical Examples
  - centralized logging of all events
  - preventing default early, ensuring consitent behavior across browsers
  - input validation
    - catching the input value early (using event handler on form's "input" event) and applying some validation before the value actually reaches the input.

#### Stopping propagation

- Stop the propagation using this method: `e.stopPropagation()` or `e.stopImmediatePropagation()`
- What is the consequence of using this method in case of bubbling and capturing?

  - the propogation is stopped at the element.
  - In case of bubbling, the event won't bubble up and would only execute the handler attache on that element.
  - In case of capturing, the event won't trickle down and would execute all the handlers until that element on which we have used stopPropagation() method.

- `e.stopPropagation()` vs `e.stopImmediatePropagation()`

  - `stopPropagation()` stops the event from propagating from the target element. Though, if there are different handlers attached to the same element, they will be executed.
  - `stopImmediatePropagation()` stops the event from propagating from the target element and also stops all other handlers that might be attached to the element from getting exectued.

- `e.target` vs `e.currentTarget`
  - `e.target` specifies the element on which the event was triggered initially. It points to the exact element on which the event happened (regardless of bubbling or capturing phase).
  - `e.currentTarget` specifies the element whose event handler is being executed based on the triggering of an event ( at e.target).

#### Event Delegation

Event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements. This takes advantage of event bubbling. Instead of adding separate event listeners to each child element, you add a single listener to their common ancestor.

- Advantages

  - Memory
  - Lesser code
  - DOM manipulation (lesser event handlers)

- Disadvantages
  - Not applicable on all events
  - Cannot work if child elements use stopPropagation()

### Event Simulators

- .click()
- .focus()
- .blur()
- .submit() (on form element)
- .reset() (on form element)
