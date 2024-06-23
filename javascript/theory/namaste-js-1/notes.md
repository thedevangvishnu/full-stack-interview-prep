### 1 - Execution Context

#### What

- EC is an abstract concept in js that defines the environment in which js code is executed.
- It is like a big box where the entire JS code is executed.
- It has two main components:

  - Memory (aka Variable Environment):

    - This is the place where all variables and functions are stored as key value pairs.

  - Code (Thread of Execution)

    - This is the place where the entire js code is executed one line at a time.

- Key point to remember:

          JavaScript is synchronous single-threaded language

  - Explanation:

        - Synchronous: In Js, the code runs sequentially. Synchronous means that, only when one operation is done, the next one can be executed. If any one operation takes a long time, the code execution gets blocked at that point and continues when that operation is finished.

        - Single-threaded: Thread is the smallest sequence of instructions that can be managed independently by the OS. Single thread can only run one instruction at a time. Meaning JS can only run one line at a time and can only perform one task in the given flow of execution. It cannot executed multiple intructions concurrently.

### 3 - Hoisting

- It is a mechanism in Javascript to put all the variable and function declarations on top in their respective execution context during the compilation phase (technically during the memory creation phase). This allows to access them before they are even initialized when the code is executed.

- In the creation phase of execution context, all the variables and functions within the context are allocated memory and assigned values (variables are assigned undfined and functions are assigned their activation object (arguments, parameters, declaration)).

- Hoisting is only possible for variables declared with `var` and function declarations. In case of `let` and `const`, hoisting does work but gives different outputs due to another mechanism know as `Temporal Dead Zone.`

  - In memory creation phase, arrow functions behave just like other variables decalred with var

### 6 - `undefined` vs "not defined"

- `undfined` is a special keyword in javascript.

- A variable having value `undfined` means that, the variable has a placeholder value (which is `undefined` just like any other value of stirng or num like "apple" or 1). `undefined` also takes memory and doesn't mean that there is no value.

- "not defined" means that there is no value, not even "undefined" for a variable in memory pointing to the fact that variable "doesn't exist in memory."

### 7 - Scope, Lexical environment and Scope chain

- Scope:

  - The context within which the variables, functions and objects are accessible.
  - Three types:
    - Global
    - Functional
    - Block

- Lexical environment

  - A data structure that stores identifier-variables mapping. It consists of the current scope and the lexical environment of the parent (parent's scope + grandparent's lexical environment and so on).

- Scope Chain

  - It is a mechanism in js that resolves variable references. It is an upstream chain of all lexical environments starting from the current scope to the global scope.

  - If a variable is not found in a current scope, then js looks for that variable in its parent's scope (upto global scope) until that variable is found. If not found, returns a ReferenceError stating variable is not defined.

- Global
- Block
- Local
- Script

#### 8 - var, let and const scope and related errors and their scopes

- Temporal dead zones

  - It's a state that defines the period between the hoisting of variables declared with let and const and the time when they are actually decalred or initialized.

#### Block, scope and shadowing

- Block

  - a group of statements combined together to execute to return/have a single value/statement
  - we group multiple statements together in a block so that we can use it where js expects a single statement.

- Block scope

  - What all variables and function can we access in a block
  - let and const are "block scoped"
  - var is "function scoped"

  - To note:
    - Scope and `for` loop with varibles declared with `let` and `var`. These two behave differently

- Shadowing

### 8 - Closures

- Closures

  - A function binded together with the reference to its lexical environment.
  - lame definition: a function returning another function.

  - When a function is taken out of its original scope, it still remembers its scope alongwith its lexical environment where it was originally present.

- Advantages
  - currying function
  - data hiding
  -
- Disadvantages

### 9 - Functions

#### Function Statement/Declaration

- Functions defined using the `function` keyword and its syntax are called as function statements or function declarations

```js
function greet() {
  console.log("Hello");
}
```

#### Function Expression

- Functions can also be assigned to a variable in js. Here, function acts like a value (just like a value of string or number or boolean)

```js
var greet = function () {
  conosle.log("Hello");
};
```

- Difference between function statement and function expression is hoisting. FSs are hoisted and assigned their definition (activation object) while FEs behave similar to other variables when hoisted and hence have `undefined` value when accessed before they are initialized.

#### Anonymous functions

- Functions that do not have a name/identifier.
- AFs are used as function expresssions. Using AFs are function statements will result in SyntaxError

```js
var print = function () {
  consoel.log("hello");
};
```

#### Named function expression

- These are function expresssions that do have a name/identifier.

```js
var print = function printName() {
  console.log(printName);
};

// will print the definition of entire function printName
```

- The advantage of NFEs over AFs is that NFEs can be accessed within thei own scope using the same name/identifier which is not possible in AFs where there is no name to refer/point to

#### Parameters vs Arguments

- Parameters

  - A parameter is a "placeholder" that is passed as an input to a function in the function definition. This is just "an identifier/placeholder" for the actual value that will be used when the function will be called.

- Argument

  - An argument is the actual "value" that is passed to a function when it is called. It replaces the placeholder value (parameter) when the function is being executed.

#### First class function

- First class citizens

  - In programming, first class citizens, or first class objects are "entities" that have the following capabilities:

    - can be assigned to a varible
    - can be used as an argument to a function
    - can be returned from a function
    - can be stored in a data structure like array or object

  - Such entities are typically data type like numbers, strings, boolean, arrays, object and functions (in most of the languages).
  - Such entities are building blocks of the language.

- In JS, functions can also be treated as first class citizens. Meaning that entity in question in case of this first class citizen is a function and hence this function can be:

  - assigned to a varible
  - passed as an argument to another function
  - returned from another function
  - stored in any data structure like array or object

- First class functions allow for the creation of "Higher order functions."

#### Pure and Impure functions

#### Arrow function

### 10 - Callback Functions

- Functions passed as arguments to another functions are called as callback function.

### 11 - Event Loop

- Web APIs

  - These are interfaces that provide additional feature that are not fundamentally supported in javascript such as the ability to store data in the browser (local storage), access and manipulate the DOM, make network requests (fetch), access the console (console object), use a timer (setTimeout) and much more.

  - Some of these Web APIs are as follows:

    - DOM API
    - fetch API
    - localStorage API
    - canvas API

  - Hence, these abilities are provided to javascript by the browser (or other runtime in which js code is executed such as Nodejs)

- Callback queue (aka Macrotask or Task queue)

  - It is a queue that stores and manages all the tasks that are waiting to be executed. When an async operation is completed, any callback associated with that asyn operation is pushed to the queue and is made ready to be exectued.

- Event loop

  - Event loop is a mechanism in JS runtime environment that monitors and manages the callstack, callback queue and microtask queue.
  - It is responsible for handling asynchronous operations by managing the execution of code, collecting and processing tasks that are queued after success/failure of asychronous events.

- Micro task queue

  - Microtask queue is a queue (similar to the callback queue) that stores and manages all the tasks and runs them immediately after the callstack is done executing the current synchronous code and before any task from the "callback queue"
  - This queue includes callbacks assocaited to "promises" and "mutation observer".

  - Starvation of callback

    - When the callbacks inside microtask queue keep pushing more callbacks into the same queue (in case of callback creating another promise), the tasks waiting in the callback queue might not get the chance to be executed. This is what is known as "starvation of callback."
    - Effective management of callback function inside microtask queue and callback queue is important

  - Not very clear

    - Mutation observer
    - The need of two separate callback queues

### 12 - JS Engine

- JS runtime environment is made of the following:

  - JS engine
  - Set of APIs
  - Event loop
  - Callback queue
  - Microtask queue

#### Phases of code execution in JS engine (need to study again)

- Parsing
  - Syntax Parser
    - Abstract syntax tree (AST)
- Compilation
  - Just in time (JIT) compilation
- Execution
  - Memory heap
  - Callstack

### 13 - setTimeout()

```js

console.log("start");

setTimeout(() => {
  console.log("callback")
}, 5000)

console.log("end");

// some blocking time-taking synchronous operation
for () {
  // takes 10sec to complete
}

console.log("for loop completed after 10sec");

```

- What will be the output of this program? Will the "callback" be printed after 5sec? Explain why?

  - The callback that setTiemout() registers will be pushed to the callback queue when the timer (of 5sec) associated with it expires. But becuase of the blocking operation inside the "for" loop, the callstack won't be empty before 10secs. Even if the callback from the setTimeout is ready to be executed after 5sec, it won't be able to because the "main thread is blocked" or the "callstack is not empty" and will be busy executing the sychronous code for the next 10 sec.After 10sec, the callstack becomes empty and the event loop will push the callback to the callstack and hence "callback" message will be printed after 10sec (and not 5sec).

  - Key learning: All the callbacks are only executed after the main thread is free, meaning the callstack is done executing all the synchronous code.

#### Concurrency Model

- Concurrency Model is a model in JS that allows JS to execute asychronous operations concurrently (at the same time) without blocking the main thread, despite the fact that JS is a synchronous single-threaded language.

- This model is possible because of the combined working of its components, which are: event loop, callback queue, microtask queue, callstack and web apis. It's nothing new, but just a jargon that refers to the entire architecture for all the code flow and execution of async code that is handled by the event loop and the other components combined together.

### 15 - Higher Order Function
