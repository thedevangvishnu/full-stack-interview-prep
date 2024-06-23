## Chapter 3: Operators & Conditions

#### 01 - What are operators? What are the types of operators in JS?

- Operators are mathematical symbols that do a particular type of operation (task).

- Based on the number of "operands", there are three types of operators:

  - Unary:

    - contains only one operand

    ```js
    const num = "10";
    console.log(+num); // 10
    ```

    - Some unary operators:
      - Unary plus (+): converts a string to a number, if string contains a valid number or else converts to NaN
      - Unary negation/minus: negates a value
      - Increment (++) / Decrement (--) operators: use to increment and decrement a numeric value by 1 respectively.

  - Binary:

    - contains two operands.

    ```js
    let a = 10;
    let b = 50;
    console.log(a + b);
    console.log(a / b);
    console.log(a >= b);
    console.log(a === b);
    ```

    - Some of the Binary operators:
      - Arithmetic operators: +, -, \*, /, %
      - Comparison operators: ==, !=, <=, >=, <, >, ===, !==
      - Logical/Boolean operators: &&, ||, ! (not operator)

  - Ternary:

    - contains three operands.

    ```js
    let question = "What is your name?";
    const answer = question ? "Devang" : "NA";
    ```

#### 02 - What is the difference between unary, binary and ternary operators?

#### 03 - What is short-circuit evaluation in JS?

- Short circuit is the pattern of using boolean operators to "resolve an expression prematurely" without evaluating the entire expression.

- It checks for "truthy" and "falsy" values based on the `OR` or `AND` operator.

- falsy values: 0, false, "", undeined, null, NaN
- rest all are truthy.

- for `||` operator:

  - returns the first truthy value.
  - returns the last value when no truthy values are present.

- for `&&` operator:
  - returns the first falsy value.
  - return the last value when there are no falsy values present.

```js
const a = "10";
const b = false;
const c = null;
const d = true;

console.log(a || b); // 10
console.log(b || c); // null
console.log(b || d); // true
console.log(a && b); // false
console.log(b && c); // false
console.log(a && d); // true
```

#### 04 - What is operator precendence?

- Operator precendence defines the "default priority order for operators" that is set by default in programming languages which is used to resolve the conflict of which operation will be executed first when an expression contains multiple operators.

#### 05 - What are the types of conditions statements in JS?

- if
- if...else
- if, else if, else
- switch statements
- ternary statements

#### 06 - When to use which type of conditions statements in real applications?

#### 07 - What is the difference between == and === ?

- Equality operator (==) compares the operands for their value only.
- Strict Equality opeator (===) compares the operands for their values as well as their types.

```js
const a = "10";
const b = 10;

console.log(a == b); // true
console.log(a === b); // false
```

#### 08 - What is the difference between Spread and Rest operator in JS?

- Spread Operator `...`

  - It is used to "expand or spread" elements of a iterable into individual elements.

  ```js
  const array = [1, 2, 3, 4];
  console.log(...array); // 1, 2, 3, 4

  const obj = {
    name: "Devang",
    greet() {
      console.log(this.name);
    },
  };

  console.log(...Object.keys(obj)); // name greet
  ```

  - Use case:

    - copying an object or array

    ```js
    const array = [1, 2, 3, 4];
    const newArray = [...array];
    console.log(newArray); // [1, 2, 3, 4]

    const obj = {
      name: "Devang",
      greet() {
        console.log(this.name);
      },
    };

    const newObj = { ...obj };
    console.log(newObj); // {name: "Devang", greet: f}
    ```

    - merging

    ```js
    const first = [1, 2, 3];
    const second = [4, 5];
    const array = [...first, ...second];
    console.log(array); // [1, 2, 3, 4, 5]

    // merging objects
    const obj1 = { name: "Devang" };
    const obj2 = {
      greet: function () {
        console.log(this.name);
      },
    };
    const newObj = { ...obj1, ...obj2 };
    console.log(newObj.greet()); // Devang
    ```

    - passing multiple arguments to a function

    ```js
    const numbers = [1, 2, 3, 4];

    function display(first, second, third, fourth) {
      console.log(first);
      console.log(second);
      console.log(third);
      console.log(fourth);
    }

    display(...numbers); // used when function is invoked
    ```

- Rest Operator `...`

  - It is used inside function to pass the rest of the parameters collectively without passing them individually.
  - used inside function paramters (while defining the function)

  ```js
  function display(first, second, ...rest) {
    console.log(first); // 1
    console.log(second); // 2
    console.log(rest); // [3, 4, 5, 6]
    console.log(...rest); // 3, 4, 5, 6
  }

  display(1, 2, 3, 4, 5, 6);
  ```

#### 09 - What is the difference between `break` and `continue` keywords?
