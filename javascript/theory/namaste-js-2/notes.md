### 1 - Callback Hell

Good parts of callback

- Plays an important role in handling async operations

```js
const cart = ["shoes", "bags", "shirts"];
const processPayment = api.proceedToPayment();
const shorOrderSummary = api.showOrderSummary();
const updateWallet = api.updateWallet();

// createOrder() takes the cart and only calls processPayment() when an order is created.
api.createOrder(cart, () => {
  // once payment is done, show the order summary
  processPayment(() => {
    // after showing the order summary, update the wallet
    showOrderSummary(() => {
      updateWallet();
    });
  });
});
```

#### Bad parts of callback

- Callback hell (aka Pyramid of Doom)

  - Callback hell is a state/pattern in many languages (that use callbacks) in which the code starts to grow horizontally due to deeply nested callbacks when handling multiple asynchronous operations where one async operation depends upon the other and so on.

- Inversion of control

  - It is a practice/pattern of passing the control of code flow or code execution to some other function or framework and become dependent on that function or framework to execute our code (mostly callbacks) in some future time.

### 2 - Promises

#### Definition and Significance

- What:

  - Promise is an object that represents the eventual completion of an asynchronous operation.
  - It is an object that stores the state of an async operation. As soon as an async operation starts, an object is returned (a promise). This object stores the "state" and the "result" of the operation. The state can be "pending", "fullfilled" or "rejected" and the result can be any data or error.
  - This object is initially empty (in general sense) and is filled with some data, based on the result of the async operation in the future
  - Promise objects are immutable

- Significance

  - Pre-promises, async operations were handled using callbacks. And two major problems with callbacks are the "Callback Hell" and "Inversion of control."

  - Promises solve both the problems and allow for a more controlled, readable, managable and effective hanlding of async operations.

#### Promise object

- Prototype: `Promise` constructor
- Promise state:
  - pending
  - fullfilled
  - rejected
- Promise result:
  - `Result` object
  - `.then()` method
  - `.catch()` method

### 3 - Creating Promises and Promise Chaining

```js
// syntax for creating promise

function createPromise() {
  const promise = new Promise((resolve, reject) => {
    // some validation logic defining when should this promise be resolved and after that call the resolve()
    if (someValidationTrue) {
      const data = "someData";
      resolve(data);
    } else {
      reject();
    }

    return promise;
  });
}
```

### 4 - Promise APIs

#### Promise.all()

`Promise.all()` takes in an iterable of promises and return a single Promise that is:

- resolved

  - when all of the input promises have been resolved.
  - return an array of values from in all the resolved input promises in the same order as the order of input promises.

- rejected
  - when "any" of the input promises has been rejected
  - return the error reason, if handled properly, otherwise will throw an `UncaughtError`

#### Promise.any()

`Promise.any()` takes in an iterable of promises and return a single Promise that is:

- resolved:

  - when any of the input promises is resolved (the first one that is resolved).
  - return the value of the first resolved input promise.

- rejected:
  - when none of the input promises have been resolved (meaning, all of them have been rejected).
  - return an `AggregateError` object that contains all an array of reasons of all rejected input promises.
  - `console.log(err.errors)` to get all the reasons/error-messages

#### Promise.allSettled();

`Promise.allSettled()` takes in an iterable of promises and return a single Promise that is:

- "settled" when all of the input promises have been settled (whether resolved or rejected)
- return an array of "settled output" (which is an object containing status, value or reason) for each input promise depending upon their settled outcome (fulfilled or rejected).

#### Promise.race()

`Promise.race()` takes in an iterable of promises and return a single Promise that is settled:

- as soon as "any" of the input promises is settled (the first one to settle).
- return the "value or error" of the first settled input promise.

### 5 - Async/Await

- async functions always return a Promise
- if returned a value (that isn't a promise), then the async function by design wraps that "value" in a promise and returns that promise.

async/await are used to handle promises.

- `await` keyword can only be used inside an `async` function

- Why even the need of async/await

### 6 - `this` keyword

#### `this` in the global space

- `this` keyword in global space refers to the "global object"
  - in browser, it refers to the `Window` object
  - in nodejs, it refers to the `global` object but logs `{}` for global statements like `console.log(this)`

#### `this` inside a function

- the value of `this` keyword inside a function is `undefined`.
- `this` keyword inside a function behaves differently depending upon whether it is being used in "strict mode" or "non-strict mode"
  - in non-strict mode: its value is "global object"
  - in strict mode: its value is `undefined`.

#### `this` in non-strict mode (this substitution)

- In non-strict mode, there is a mechanism in js that is known as "this substitution." Whenever the value of `this` keyword is `undefined` or `null` then js replaces that value with the "global object". This is known as "this substitution."

#### `this` value depends on how `this` is called (window)

- the value of `this` refers to the object calling the function in which `this` keyword is present (in both strict or non-strict mode).

```js
function x() {
  console.log(this);
}

window.x(); // Window object
```

- In strict mode:
  - if there is no reference of the object and the function is being called directly, then the value of `this` is `undefined`.

```js
"use strict";

function x() {
  console.log(this);
}

x(); // undefined
```

#### `this` inside an object's method

- the value of `this` inside an object's method refers to the most closest object in which that method is defined in which the `this` keyword is present.

```js
const user = {
  name: "Devang",
  skills: {
    skill: "JS",
    years: 1,

    showSkills() {
      console.log(this);
    },
  },

  showUser() {
    console.log(this);
  },
};

user.skills.showSkills(); // skills object
user.showUser(); // user object
```

#### call, apply, bind methods (sharing methods)

- `call()`, `apply()` and `bind()` methods are used to share methods among objects

- call()

```js
const student = {
  name: "Devang",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Vishnu",
};

student.printName.call(student2);
```

#### `this` inside arrow function

- arrow function do not provide their own `this` binding

- the value of `this` inside an arrow function is the value of `this` in the enclosed lexical context for that arrow function (where that arrow function is lexically enclosed)

- example 1: `this` present inside arrow function (which is a direct method of an object)

```js
const developer = {
  name: "Devang",
  skills: {
    skill: "JS",
    printSkill: () => {
      console.log(this);
    },
  },
  printName: () => {
    console.log(this);
  },
};

developer.printName(); // Window object
developer.skills.printSkill(); // Window object

// here printSkill() and printName() method are arrow functions and they are lexically enclosed in the global context, hence the value of `this` keyword refers to the global ojbect which is Window obj in case of the browser
```

- example 2: `this` present inside an arrow function, which is direct method of an object and the object is present in another function

```js
function local() {
  const user = {
    name: "Amika",
    printName: () => {
      console.log(this);
    },
  };

  user.printName();
}

local(); // Window object in non-strict mode and "undefined" in strict mode
```

#### `this` inside nested arrow functions

- example 1: `this` present in arrow function, which is enclosed in a function (which is the direct method of the object)

```js
const developer = {
  name: "Devang",
  skills: {
    skill: "JS",
    printSkill() {
      const showSkill = () => {
        console.log(this);
      };
      showSkill();
    },
  },
  printName: function () {
    const showName = () => {
      console.log(this);
    };
    showName();
  },
};

developer.printName(); // developer object
developer.skills.printSkill(); // skills object

// Here, arrow function showSkill() is enclosed in a method printSkill() and the arrow function showName() is enclosed in a method printName(). Becuase these arrow functions are lexically enclosed in printSkill() and printName() methods, the value of `this` refers to the object where these methods are present respectively.
```

- example 2: `this` present inside an arrow function, which is wrapped in a function, which is direct method of an object and the object is present in another function

```js
function local2() {
  const user = {
    name: "Amika",
    printName: function () {
      const print = () => {
        console.log(this);
      };
      print();
    },
  };

  user.printName();
}

local2(); // user object
```

#### `this` inside DOM

- the value of `this` inside DOM is the reference to the "HTML Element" on which the `this` keyword has been used

#### `this` inside class, constructors
